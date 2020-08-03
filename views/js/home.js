var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("date").setAttribute("min", today);
var dates = document.getElementsByClassName("date");
for(var i = 0 ; i < dates.length ; i++){
    if(dates[i].innerHTML == today){
        dates[i].classList.add("color-red");
    }
}