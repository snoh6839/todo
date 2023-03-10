const menuText = document.querySelector('.menuText h3');
const korFoodBtn = document.querySelector('.korFoodBtn');
const chiFoodBtn = document.querySelector('.chiFoodBtn');
const japFoodBtn = document.querySelector('.japFoodBtn');
const wesFoodBtn = document.querySelector('.wesFoodBtn');
let random;

function showKoreanFood(){
  random = Math.floor(Math.random()*koreanFood.length);
  menuText.innerHTML = '오늘의 점심 메뉴는<br>"' + koreanFood[random] + '"';
}

function showChineseFood(){
  random = Math.floor(Math.random()*chineseFood.length);
  menuText.innerHTML = '오늘의 점심 메뉴는<br>"' + chineseFood[random] + '"';
}

function showJapaneseFood(){
  random = Math.floor(Math.random()*japaneseFood.length);
  menuText.innerHTML = '오늘의 점심 메뉴는<br>"' + japaneseFood[random] + '"';
}

function showWesternFood(){
  random = Math.floor(Math.random()*westernFood.length);
  menuText.innerHTML = '오늘의 점심 메뉴는<br>"' + westernFood[random] + '"';
}

korFoodBtn.addEventListener("click", showKoreanFood);
chiFoodBtn.addEventListener("click", showChineseFood);
japFoodBtn.addEventListener("click", showJapaneseFood);
wesFoodBtn.addEventListener("click", showWesternFood);
