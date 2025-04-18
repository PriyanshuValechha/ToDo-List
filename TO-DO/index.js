const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list-cont");
const progressBarFill = document.querySelector('.progress-bar-fill');

function addTask(){
  if(inputBox.value === ''){
    alert("Add a Task, Cutie");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listCont.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
  updateProgressBar(); 
}

listCont.addEventListener("click", function(To){
  if(To.target.tagName === "LI"){
    To.target.classList.toggle("checked");
    saveData();
    updateProgressBar(); 
  }
  else if(To.target.tagName === "SPAN"){
    To.target.parentElement.remove();
      saveData();
      updateProgressBar(); 
  }
}, false);

function saveData(){
  localStorage.setItem("data", listCont.innerHTML);
}
function showTask(){
  listCont.innerHTML = localStorage.getItem("data");
  updateProgressBar(); 
}


function updateProgressBar() {
  
  const totalTasks = listCont.getElementsByTagName("li").length;
  const completedTasks = listCont.getElementsByClassName("checked").length;
  const progressPercentage = (completedTasks / totalTasks) * 100;
  progressBarFill.style.width = `${progressPercentage}%`;
}
showTask();


