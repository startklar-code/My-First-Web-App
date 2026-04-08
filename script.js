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
    saveData(); // حفظ بعد الإضافة
}

// دالة التعديل
function editTask(button) {
    let li = button.parentElement.parentElement;
    let span = li.querySelector(".task-text");
    
    let newTask = prompt("قم بتعديل المهمة:", span.innerText);
    
    if (newTask !== null && newTask.trim() !== "") {
        span.innerText = newTask;
        saveData(); // حفظ بعد التعديل
    }
}
// دالة لحفظ القائمة في ذاكرة المتصفح
function saveData() {
    let listContainer = document.getElementById("taskList");
    localStorage.setItem("data", listContainer.innerHTML);
}

// دالة لعرض البيانات المحفوظة عند فتح المتصفح
// كود قائمة المهام (تأكد من وجود دالة addTask و showTask هنا)

// كود جلب الطقس
// كود قائمة المهام (تأكد من وجود دالة addTask و showTask هنا)

// كود جلب الطقس
async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const resultDiv = document.getElementById('weatherResult');
    const apiKey = "b6907d289e10d714a6e88b30761fae22"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ar`;

    if (city.trim() === "") {
        resultDiv.innerHTML = "<p>يرجى كتابة اسم المدينة أولاً</p>";
        return;
    }

    try {
        resultDiv.innerHTML = "<p>جاري جلب البيانات...⏳</p>";
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            resultDiv.innerHTML = "<p>❌ المدينة غير موجودة</p>";
            return;
        }

        resultDiv.innerHTML = `
            <div style="margin-top:15px;">
                <h3>${data.name} 📍</h3>
                <h1 style="font-size: 2.5rem; margin: 10px 0;">${Math.round(data.main.temp)}°C</h1>
                <p>الحالة: ${data.weather[0].description}</p>
            </div>`;
    } catch (error) {
        resultDiv.innerHTML = "<p>⚠️ عذراً، حدث خطأ في الاتصال</p>";
    }
}
