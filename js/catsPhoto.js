const catsPhotoImg = document.querySelector('.catsPhoto-img>img');
const catsPhotoBtn = document.querySelector('.catsPhoto-btn');
let photoNum;

function showCats(){
  photoNum = Math.floor(Math.random()*10);
  catsPhotoImg.src = `./img/cat-${photoNum}.jpg`;
}

showCats();
catsPhotoBtn.addEventListener("click", showCats);
