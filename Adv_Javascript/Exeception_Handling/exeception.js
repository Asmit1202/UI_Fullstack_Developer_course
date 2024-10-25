var userName = "";

var taskList = [
    "Do The Project Review.",
    "Participating in the design and creation of scalable software.",
    "Writing clean, functional code on the front- and back-end.",
    "Testing and fixing bugs or other coding issues.",
    "Test software to ensure responsiveness and efficiency.",
    "Troubleshoot, debug and upgrade software.",
    "Create security and data protection settings."
]

var showThanksBlock = () => {
    $(".thanksBlock").show();
    $(".thanksBlock").text("Thanks For Using Our Site....");
}
var saveUserName = () => {
    userName = $("#uname").val();
}
var createTaskBlock = () => {
    document.querySelector(".mainContainer").innerHTML = "";
    var divtag = document.createElement("div");
    divtag.setAttribute("id", "taskBlock");
    divtag.setAttribute("class","taskContainer");
    document.querySelector(".mainContainer").append(divtag);
} 
var showTask = () =>{
    var index = Math.floor(Math.random() * taskList.length);
    var Task = taskList[index];
    var msg = 'Hello Mr. ' + userName + ' Today Task is ' + Task;
    try{
        document.querySelector(".taskContainer").innerText = msg;
    } catch(error){
        console.log(error);
        alert("Boss you Missed to create task container, make sure you click on the 'Create Task Block', then you check for your Task");
    } finally{
        setTimeout(()=>{
            showThanksBlock();
        }, 2000)
    }
    
}