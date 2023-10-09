// Load the to-do list from local storage
function loadTodoList() {
  var todoList = localStorage.getItem("todoList");
  if (todoList) {
    document.getElementById("myUl").innerHTML = todoList;
  }
}

// Save the to-do list to local storage
function saveTodoList() {
  var todoList = document.getElementById("myUl").innerHTML;
  localStorage.setItem("todoList", todoList);
}

// Add a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myinput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUl").appendChild(li);
    saveTodoList(); // Save the updated to-do list
  }
  document.getElementById("myinput").value = "";
}

// Click on a close button to hide the current list item
function hideListItem() {
  var div = this.parentElement;
  div.style.display = "none";
  saveTodoList(); // Save the updated to-do list
}

// Add event listeners to the close buttons
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = hideListItem;
}

// Add event listener to the "Add" button
document.querySelector(".addbtn").addEventListener("click", newElement);

// Load the to-do list when the page loads
window.addEventListener("load", loadTodoList);