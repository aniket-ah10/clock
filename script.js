function updateTime(){
const date=new Date();
var clockTime={
time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit'}),
dateAndDay:date.toLocaleDateString([],{weekday:'long',day:'numeric',month:'long',year:'numeric'}),
};
document.querySelector("#time").textContent=clockTime.time;
document.querySelector("#date").textContent=clockTime.dateAndDay;
var hours=date.getHours();
if(hours>=3&&hours<12){
    document.querySelector("#greeting").innerHTML="Good Morning";
}
else if(hours>=12&&hours<17){
    document.querySelector("#greeting").innerHTML="Good Afternoon";
}
else if(hours>=17&&hours<19){
    document.querySelector("#greeting").innerHTML="Good Evening";
}
else{
    document.querySelector("#greeting").innerHTML="Good Night";
}
}
updateTime();
setInterval(updateTime, 1000);//this call function in every 1000ms

//switch to dark and light mode
function func(){

var select=document.body;
select.classList.toggle("bg-dark");

var btn_selection=document.querySelector(".btn");
btn_selection.classList.toggle("light-btn");
if(document.querySelector(".btn").innerHTML==="Dark Mode"){
    document.querySelector(".btn").innerHTML="Light Mode";
}
else{
    document.querySelector(".btn").innerHTML="Dark Mode";
}
}