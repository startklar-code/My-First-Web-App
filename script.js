// === 1. قسم قائمة المهام (To-Do List) ===
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText.trim() === "") return;

    let li = document.createElement("li");
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div class="actions">
            <button onclick="editTask(this)" style="background: orange;">تعديل</button>
            <button class="delete-btn" onclick="this.parentElement.parentElement.remove(); saveData();">حذف</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
    saveData();
}

function editTask(button) {
    let li = button.parentElement.parentElement;
    let span = li.querySelector(".task-text");
    let newTask = prompt("قم بتعديل المهمة:", span.innerText);
    
    if (newTask !== null && newTask.trim() !== "") {
        span.innerText = newTask;
        saveData();
    }
}

function saveData() {
    let listContainer = document.getElementById("taskList");
    if (listContainer) {
        localStorage.setItem("data", listContainer.innerHTML);
    }
}

// === 2. قسم الطقس (Weather API) ===
async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const resultDiv = document.getElementById('weatherResult');
    const apiKey = "60cf9723b71192e4e7e60155b11a5b82";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ar`;

    if (city.trim() === "") {
        resultDiv.innerHTML = "<p>يرجى كتابة اسم المدينة أولاً</p>";
        return;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            resultDiv.innerHTML = `<p>الحرارة في ${data.name}: ${data.main.temp}°C</p>`;
        } else {
            resultDiv.innerHTML = "<p>المدينة غير موجودة</p>";
        }
    } catch (error) {
        resultDiv.innerHTML = "<p>⚠️ عذراً، حدث خطأ في الاتصال</p>";
    }
}

// === 3. قسم محول العملات والجمع (للإختبار) ===
function sum(a, b) {
    return a + b;
}

function convertToSAR(usd) {
    if (usd < 0) return 0;
    return usd * 3.75;
}

function convertCurrency() {
    const usd = document.getElementById('usdAmount').value;
    const resultDiv = document.getElementById('result');
    const sar = convertToSAR(usd);
    resultDiv.innerHTML = `المبلغ بالريال: ${sar.toFixed(2)} ريال`;
}

// === 4. التصدير للاختبار (Module Exports) ===
if (typeof module !== 'undefined') {
    module.exports = { 
        sum: sum, 
        convertToSAR: convertToSAR 
    };
}
