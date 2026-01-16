const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === ''){
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData(); 
}

listContainer.addEventListener("click", function(e){ // e is short for event — it's a parameter that represents the click event object when someone clicks inside listContainer. If the user clicks directly on a <li>, then e.target is that <li>.
    if (e.target.tagName == "LI"){
        e.target.classList.toggle("checked"); // e.target.classList is a DOMTokenList — basically a special object that lets you view, add, remove, or toggle CSS classes on an element
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); // Whatever content is there in the listContainer that would be store in our browser with the name of data. 
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
