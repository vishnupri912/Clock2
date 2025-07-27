let hours=document.getElementById("hour");
let minutes=document.getElementById("min");
let secods=document.getElementById("sec");


let bar = document.querySelector(".barsecods");

for (let i = 1; i <= 60; i++) {
  let tick = document.createElement("span");
  tick.style.setProperty("--i", i);/*<span style="--i:1;"></span>setProperty() is a JavaScript method used to set a CSS custom property (variable) on an element’s inline style.*/
  bar.appendChild(tick);
}


function displayTime(){
   let date=new Date();

   //Getting hour,min,secs from date

   let hh=date.getHours();
   let mm=date.getMinutes();
   let ss=date.getSeconds();

   let hRotation = 30*hh + mm/2;
   let mRotation = 6*mm;
   let sRotation = 6*ss;

   hours.style.transform=`rotate(${hRotation}deg)`;
   minutes.style.transform=`rotate(${mRotation}deg)`;
   secods.style.transform=`rotate(${sRotation}deg)`;

}

setInterval(displayTime,1000);