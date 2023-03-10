const clock = document.querySelector(".clock");
const h3 = clock.querySelector('h3');
const p = clock.querySelector('p');



function showDay(){
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  let date = today.getDate();
  let day = today.getDay();
  if(day==0){
    day = '일';
  }else if(day==1){
    day = '월';
  }else if(day==2){
    day = '화';
  }else if(day==3){
    day = '수';
  }else if(day==4){
    day = '목';
  }else if(day==5){
    day = '금';
  }else if(day==6){
    day = '토';
  }
  h3.innerHTML = `${year}년 ${month+1}월 ${date}일 ${day}`;
}

function showTime(){
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let ampm = '';
  if(hours < 12){
    ampm = '오전';
  }else if(hours == 12){
    ampm = '오후';
  }
  else {
    ampm = '오후';
    hours -= 12;
  }
  if(hours < 10){
    hours = '0' + hours;
  }
  if(minutes < 10){
    minutes = '0' + minutes;
  }
  if(seconds < 10){
    seconds = '0' + seconds;
  }
  p.innerHTML = `${ampm} ${hours}:${minutes}:${seconds}`;
}

showDay();
setInterval(showDay, 1000);

showTime();
setInterval(showTime, 1000);
