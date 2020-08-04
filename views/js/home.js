var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd < 10){
    dd = '0'+dd
} 
if(mm<10){
    mm = '0'+mm
} 
today = yyyy+'-'+mm+'-'+dd;
document.getElementById("date").setAttribute("min", today);
var task = document.getElementsByClassName("task");
for(let i = 0 ; i < task.length ; i++){
    task[i].addEventListener("click",function(){
        console.log(task[i]);
        let itag = task[i].querySelector(".far")
        console.log(itag);
        itag.classList.toggle("fa-check-square");
        itag.classList.toggle("fa-square");
        var opacity = 100;
        let allchildren = task[i].children
        for(let i = 1 ; i < allchildren.length ; i++){
            console.log(allchildren[i]);
            allchildren[i].style.textDecoration = "line-through";
        }
        var int = setInterval(function(){
            if(opacity <= 0){
                task[i].style.display = "none";
                window.location.href = "/deletetask/?id=" + task[i].getAttribute("data-id");
                clearInterval(int);
                return;
            }
            task[i].style.opacity = opacity + '%';
            opacity = opacity - 1;
        },12)
    })
}
