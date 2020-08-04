// g\GETTING TODAYS DATE IN YYYY-MM-DD FORMAT
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0
var yyyy = today.getFullYear();
if(dd < 10){
    dd = '0'+dd
} 
if(mm<10){
    mm = '0'+mm
} 
today = yyyy+'-'+mm+'-'+dd;

// SETTING THE MINIMUM VALUE FOR THE DATE INPUT FIELD AS TODAY
document.getElementById("date").setAttribute("min", today);

// GETTING ALL TASK ELEMENTS (LIST ITEMS)
var task = document.getElementsByClassName("task");

// HANDLING CLICK FUNCTION ON ALL TASK ELEMENTS (LIST ITEMS)
for(let i = 0 ; i < task.length ; i++){
    task[i].addEventListener("click",function(){
        // COVERTING THE BOX TO CHECKED BOX ONCE THE TASK IS CLICKED
        let itag = task[i].querySelector(".far")
        itag.classList.toggle("fa-check-square");
        itag.classList.toggle("fa-square");
        var opacity = 100;
        // SELECTING ALL CHILDREN OF THE TASK ITEM CLICKED
        let allchildren = task[i].children
        // ADDING A CROSS LINE THROUGH ALL CHILDREN BUT THE CHECKBOX OF THE TASK ITEM CLICKED
        for(let i = 1 ; i < allchildren.length ; i++){
            allchildren[i].style.textDecoration = "line-through";
        }
        // FADDING THE TASK CLICKED BY REDUCING THE OPACITY OF TASK CLICKED
        var int = setInterval(function(){
            if(opacity <= 0){
                // REDIRECTING THE PAGE TO DELETETASK 
                // DELETING THE TASK AFTER ITS FADED
                window.location.href = "/deletetask/?id=" + task[i].getAttribute("data-id");
                clearInterval(int);
                return;
            }
            task[i].style.opacity = opacity + '%';
            opacity = opacity - 1;
        },12)
    })
}
