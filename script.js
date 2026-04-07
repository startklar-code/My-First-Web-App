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
function showTask() {
    let listContainer = document.getElementById("taskList");
    listContainer.innerHTML = localStorage.getItem("data");
}

// استدعاء الدالة فور فتح الصفحة
showTask();