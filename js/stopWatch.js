const stopWatchTxt = document.querySelector('.stopWatch-txt > p');
const stopWatchPlay = document.querySelector('.stopWatch-btns .play');
const stopWatchPause = document.querySelector('.stopWatch-btns .pause');
const stopWatchReset = document.querySelector('.stopWatch-btns .reset');
let sec = 0;
let millisec = 0;
let playWatch;
let timer_is_on = 0;

stopWatchTxt.innerHTML = `${sec}:${millisec}`;

function startWatch(){
  if(millisec==100){
    sec++;
    millisec = 0;
  }
  stopWatchTxt.innerHTML = `${sec}:${millisec}`;
  millisec++;
  playWatch = setTimeout(startWatch,10);
}

function stopWatch(){
  if(timer_is_on != 1){
    timer_is_on = 1;
    startWatch();
  }
}

function pauseWatch(){
  if(timer_is_on == 1){
    clearTimeout(playWatch);
    timer_is_on = 0;
  }
}

function resetWatch(){
  clearTimeout(playWatch);
  timer_is_on = 0;
  sec = 0;
  millisec = 0;
  stopWatchTxt.innerHTML = `${sec}:${millisec}`;
}

stopWatchPlay.addEventListener("click", stopWatch);
stopWatchPause.addEventListener("click", pauseWatch);
stopWatchReset.addEventListener("click", resetWatch);
