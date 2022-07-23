function addTask(){
  var myTask = document.getElementById("task").value;
  var myTasks = document.getElementById("tasks").innerHTML += myTask+"\n"; 
    localStorage.setItem('myTasks', myTasks);
    document.getElementById("tasks").innerHTML = localStorage.myTasks;
    document.getElementById("task").value = "";
}

function clearTask(){
  localStorage.clear(); 
  document.getElementById("tasks").innerHTML = "";
  document.getElementById("task").value = "";
}