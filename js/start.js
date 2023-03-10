// 화면 전환하기
const pages = document.querySelectorAll('#main>div');
const gnbBtns = document.querySelectorAll('#gnb>li');

for (let i = 0; i < gnbBtns.length; i++) {
    gnbBtns[i].addEventListener("click", function () {
        for (let j = 0; j < pages.length; j++) {
            if (pages[j].hidden === false) {
                pages[j].classList.add('hidden');
                gnbBtns[j].classList.remove('liClick');
                gnbBtns[j].querySelector('a').classList.remove('aClick');
                gnbBtns[j].querySelector('span').classList.remove('spanClick');
            }
        }
        pages[i].classList.toggle('hidden');
        gnbBtns[i].classList.add('liClick');
        gnbBtns[i].querySelector('a').classList.add('aClick');
        gnbBtns[i].querySelector('span').classList.add('spanClick');
    })
}


//뮤직 리스트
const musicWrap = document.querySelector(".music");
const musicImg = musicWrap.querySelector(".music-img img");
const musicName = musicWrap.querySelector(".music-song .name");
const musicArtist = musicWrap.querySelector(".music-song .artist");
const musicAudio = musicWrap.querySelector("#main-audio");
const musicPlay = musicWrap.querySelector("#control-play");
const musicPrevBtn = musicWrap.querySelector("#control-prev");
const musicNextBtn = musicWrap.querySelector("#control-next");
const musicProgress = musicWrap.querySelector(".music-progress");
const musicProgressBar = musicProgress.querySelector(".bar");
const musicProgressCurrent = musicProgress.querySelector(".current");
const musicProgressDuration = musicProgress.querySelector(".duration");
const musicRepeat = musicWrap.querySelector("#control-repeat");
const musicList = musicWrap.querySelector(".music-list");
const MusicListBtn = musicWrap.querySelector("#control-list");
const MusicListClose = musicList.querySelector(".close");
const musicListUl = musicList.querySelector(".list ul");

let musicIndex = 1;

// 음악 재생
function loadMusic(num) {
    musicImg.src = `img/${allMusic[num - 1].img}.jpg`;
    musicImg.alt = `${allMusic[num - 1].img}`;
    musicName.innerText = allMusic[num - 1].name;
    musicArtist.innerText = allMusic[num - 1].artist;
    musicAudio.src = `songs/${allMusic[num - 1].audio}.mp3`;
}

// 플레이 버튼
function playMusic() {
    musicWrap.classList.add("paused");
    musicPlay.innerText = "pause_circle";
    musicPlay.setAttribute("title", "일시정지")
    musicAudio.play();
}

// 일시정지 버튼
function pauseMusic() {
    musicWrap.classList.remove("paused");
    musicPlay.innerText = "play_circle";
    musicPlay.setAttribute("title", "재생")
    musicAudio.pause();
}

// 이전 곡 듣기 버튼
function prevMusic() {
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playListMusic();
}

// 다음 곡 듣기 버튼
function nextMusic() {
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playListMusic();
}

// 뮤직 진행바
musicAudio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    musicProgressBar.style.width = `${progressWidth}%`

    musicAudio.addEventListener("loadeddata", () => {
        let audioDuration = musicAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if (totalSec < 10) totalSec = `0${totalSec}`;

        musicProgressDuration.innerText = `${totalMin}:${totalSec}`;
    })

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) currentSec = `0${currentSec}`;
    musicProgressCurrent.innerText = `${currentMin}:${currentSec}`
})

// 진행 버튼
musicProgress.addEventListener("click", e => {
    let progressWidth = musicProgress.clientWidth;
    let clickedOffsetX = e.offsetX;
    let songDuration = musicAudio.duration;

    musicAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    playMusic();
})




// 재생/일시정지
musicPlay.addEventListener("click", () => {
    const isMusicPaused = musicWrap.classList.contains("paused");
    isMusicPaused ? pauseMusic() : playMusic();
})

musicPrevBtn.addEventListener("click", () => {
    prevMusic();
});
musicNextBtn.addEventListener("click", () => {
    nextMusic();
});

// 반복 버튼
musicRepeat.addEventListener("click", () => {
    let getText = musicRepeat.innerText;

    switch (getText) {
        case "repeat":
            musicRepeat.innerText = "repeat_one";
            musicRepeat.setAttribute("title", "한곡 반복")
            break;

        case "repeat_one":
            musicRepeat.innerText = "shuffle";
            musicRepeat.setAttribute("title", "랜덤 반복")
            break;

        case "shuffle":
            musicRepeat.innerText = "repeat";
            musicRepeat.setAttribute("title", "전체 반복")
            playListMusic();
            break;
    }
})

// 오디오가 끝나고
musicAudio.addEventListener("ended", () => {
    let getText = musicRepeat.innerText;

    switch (getText) {
        case "repeat":
            nextMusic();
            break;

        case "repeat_one":
            loadMusic(musicIndex);
            playMusic();
            break;

        case "shuffle":
            let randIndex = Math.floor((Math.random() * allMusic.length) + 1);
            do {
                randIndex = Math.floor((Math.random() * allMusic.length) + 1);
            } while (musicIndex == randIndex);
            musicIndex = randIndex;
            loadMusic(musicIndex);
            playMusic();
            break;
    }
})

// 뮤직 리스트 버튼
MusicListBtn.addEventListener("click", () => {
    musicList.classList.add("show");
})

// 뮤직 리스트 닫기 버튼
MusicListClose.addEventListener("click", () => {
    musicList.classList.remove("show");
})

// 뮤직 리스트 구현하기
for (let i = 0; i < allMusic.length; i++) {
    let li = `
        <li data-index="${i + 1}">
            <div>
                <em>${allMusic[i].name}</em>
                <p>${allMusic[i].artist}</p>
            </div>
            <audio class="${allMusic[i].audio}" src="songs/${allMusic[i].audio}.mp3"></audio>
            <span id="${allMusic[i].audio}" class="audio-duration">3:36</span>
        </li>
    `;
    musicListUl.insertAdjacentHTML("beforeend", li);

    let liAudioDuration = musicListUl.querySelector(`#${allMusic[i].audio}`);
    let liAudio = musicListUl.querySelector(`.${allMusic[i].audio}`);

    liAudio.addEventListener("loadeddata", () => {
        let audioDuration = liAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if (totalSec < 10) totalSec = `0${totalSec}`;

        liAudioDuration.innerText = `${totalMin}:${totalSec}`;
        liAudioDuration.setAttribute("data-duration", `${totalMin}:${totalSec}`);
    });
}

// 뮤직 리스트 클릭하기
const musicListAll = musicListUl.querySelectorAll("li");



function playListMusic() {
    for (let j = 0; j < musicListAll.length; j++) {
        let audioTag = musicListAll[j].querySelector(".audio-duration");
        let adDuration = audioTag.getAttribute("data-duration");

        if (musicListAll[j].classList.contains("playing")) {
            musicListAll[j].classList.remove("playing");
            audioTag.innerText = adDuration;
        }

        if (musicListAll[j].getAttribute("data-index") == musicIndex) {
            musicListAll[j].classList.add("playing");
            audioTag.innerText = "재생중";
        }
        musicListAll[j].setAttribute("onclick", "clicked(this)");
    }
}

function clicked(el) {
    let getLiIndex = el.getAttribute("data-index");

    musicIndex = getLiIndex;
    loadMusic(musicIndex);
    playMusic();
    playListMusic();
}

window.addEventListener('load', () => {
    loadMusic(musicIndex);
    playListMusic();
})