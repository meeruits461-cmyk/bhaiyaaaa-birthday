let currentStage = 1;
let starCount = 50;
let musicPlaying = false;

// NOTE: Agar aapki images ka naam GitHub par "Photo1.jpg" hai (P bada), toh yahan "Photo1.jpg" likhein.
// Agar naam "1.jpg", "2.jpg" hain, toh unhe change kar ke ["1.jpg", "2.jpg"] kar dein.
const photosList = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg"];
let currentPhotoIdx = 0;

const bgMusic = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');

function toggleMusic() {
    if (!musicPlaying) {
        bgMusic.play().then(() => {
            musicPlaying = true;
            musicBtn.innerText = "⏸ Pause Music";
            musicBtn.classList.add('playing');
        }).catch(err => console.log(err));
    } else {
        bgMusic.pause();
        musicPlaying = false;
        musicBtn.innerText = "🎵 Play Music";
        musicBtn.classList.remove('playing');
    }
}
if(musicBtn) { musicBtn.addEventListener('click', toggleMusic); }

function startSurpriseWithMusic() {
    nextPage(2);
    if (!musicPlaying && bgMusic) {
        bgMusic.play().then(() => {
            musicPlaying = true;
            musicBtn.innerText = "⏸ Pause Music";
            musicBtn.classList.add('playing');
        }).catch(err => console.log(err));
    }
}

function initStars() {
    const container = document.querySelector('.stars-container');
    if(!container) return;
    for (let i = 0; i < starCount; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        let size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDuration = (Math.random() * 2 + 1) + 's';
        container.appendChild(star);
    }
}
initStars();

function nextPage(pageNumber) {
    const currentActive = document.querySelector('.page.active');
    if (currentActive) { currentActive.classList.remove('active'); }
    
    let targetPage = (pageNumber === 10) ? document.getElementById('final-page') : document.getElementById(`page-${pageNumber}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    currentStage = pageNumber;

    // Direct Fix: Jaise hi letter open ho, text turant load ho jaye
    if (pageNumber === 7) {
        executeTypingEffect();
    }
}

function revealIrritate() {
    document.getElementById('q4-btns').classList.add('hide');
    document.getElementById('q4-title').classList.add('hide');
    document.getElementById('q4-reveal').classList.remove('hide');
}

function startCountdown() {
    nextPage(5);
    const counterElement = document.getElementById('countdown-number');
    let count = 3;
    let timer = setInterval(() => {
        count--;
        if (count === 2) counterElement.innerText = "2️⃣";
        else if (count === 1) counterElement.innerText = "1️⃣";
        else if (count <= 0) {
            clearInterval(timer);
            triggerGrandReveal();
        }
    }, 1000);
}

function triggerGrandReveal() {
    nextPage(6);
    startCanvasFX(5); 
    spawnBalloonsLoop(20);
}

// Aapka exact Urdu message safely encoded hai taake browser crash na kare
const textEncoded = "%F0%9F%8E%89%20HAPPY%20BIRTHDAY%20BHAIYA%20%F0%9F%8E%89%0A%0AHappy%20Birthday%21%20%0ADo%20you%20know%20how%20grateful%20I%20am%20to%20have%20you%20as%20my%20Bhaiya%3F%20%F0%9F%A4%8D%0AThank%20you%20for%20always%20being%20there.%0AMay%20Allah%20bless%20you%20with%20happiness%2C%20success%2C%20good%20health%20and%20endless%20smiles.%0AHappy%20Birthday%20once%20again.%20%F0%9F%92%99%0A%0A%7C%20%E2%94%8C%20%E2%94%90%F0%9F%92%97%0A%E2%94%94%20%E2%94%98APPY_%F0%9F%8E%82%F0%9F%8E%86%F0%9F%8E%89%0A%E2%94%8C%E2%94%91%20%20%20%20%F0%9F%84%B1%F0%9F%84%B8%F0%9F%85%81%F0%9F%85%82%F0%9F%84%B7%F0%9F%84%B3%F0%9F%84%B0%F0%9F%85%80%F0%9F%8E%89%F0%9F%8E%86%F0%9F%8C%8C%0A%E2%94%94%E2%94%98.%20%F0%9F%A4%98%20%F0%9F%90%AC%0A%22Officially%2C%20you%27re%20one%20year%20older%20now...%20but%20don%27t%20worry%2C%20you%27re%20still%20not%20that%20old.%20%F0%9F%98%82%0A%0A%22I%20wish%20you%20happiness%20on%20this%20wonderful%20day%21%20HAPPY%20BIRTHDAY%20%F0%9F%8E%89%F0%9F%8E%89%0AMay%20God%20Bless%20you%20and%20bring%20more%20happiness%20and%20success%20in%20your%20life%E2%99%A6%23%2A%20%F0%9F%94%A5%F0%9F%A5%B0%0A%2AHappy%20Birthday%2A%F0%9F%8E%82%F0%9F%8D%B0%0A%2AWish%20You%20Many%20Many%20Happy%20Return%27s%20Of%20The%20Day%2A%0A%2A%2AHappy%20Birthday%20Wishes%2A%2A%20%20%F0%9F%92%96%F0%9F%92%96%F0%9F%92%96%E2%9D%A5%EF%B8%8E%E2%99%A1%EF%B8%8E%20%20%20%2A%2AHAPPY%20BIRTHDAY%20%20WishinG%20Y%E2%97%AFu%20A%20%2AVery%2A%20Happy%20Birthday%2A%2A%0A%F0%9F%92%97%D9%88%DB%81%20%D9%84%E2%80%8D%D9%85%D8%AD%DB%92%20%D8%AA%D9%85%DB%81%D8%A7%D8%B1%DB%92%20%D9%82%D8%AF%D9%85%D9%88%DA%BA%20%D9%85%D9%8A%DA%BA%20%DB%81%D9%88%DA%BA%F0%9F%92%97%0A%2A%2AMay%20All%20Y%E2%97%AFur%20%2ADreams%2A%20C%E2%97%AFme%20True%2A%2A%F0%9F%A5%B0%0A%F0%9F%92%97%D8%AE%D8%AF%D8%A7%20%D9%88%DB%81%20%E0%A4%B8%E0%A4%AC%20%DA%A9%DA%86%D8%AA%D9%85%20%DA%A9%D9%88%20%D8%AF%DB%92%20%F0%9F%98%BB%0A%2A%2AMay%20Y%E2%97%AFu%20%2AHave%2A%20%2AAlways%2A%20Smile%20Like%20%2ATOday%2A%2A%2A%F0%9F%92%99%0A%F0%9F%92%97%D8%AC%D9%85%20%D8%B3%D9%88%DA%86%D8%A7%20%D8%AA%D9%85%20%D9%86%DB%92%20%D8%A7%D9%BE%D9%86%DB%92%20%D8%B3%D9%BE%D9%86%D9%88%DA%BA%20%D9%85%D9%8A%DA%BA%20%DB%81%D9%88%20%F0%9F%A5%BA-%E2%99%A1%EF%B8%8E%0A%E2%80%A2%C2%B0%F0%9F%8E%88%F0%9F%A5%82%F0%9F%8D%BE%C2%B0%E2%80%A2%0A%F0%9F%A4%8D%F0%9F%AB%B6%F0%9F%8F%BB%0A%2A%E2%95%94%E2%95%90%E2%95%90%E2%99%A6%E2%80%A2%C2%B0%E0%A8%85%C2%B0%20%E1%B5%92%20%E1%B5%92%C2%B0%E0%A8%85%C2%B0%E2%99%A6%20%E2%95%90%E2%95%90%E2%95%97%2A%0A%E2%97%A6%20%23%F0%9F%92%99%F0%9F%92%99%F0%9F%92%99%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%9B%B2%E2%9B%B2%E2%9B%B2%20%23%0A%7C%7C%E2%95%94%E2%95%90%E2%95%90%E2%99%A6%E2%80%A2%C2%B0%E0%A8%85%C2%B0%20%E1%B5%92%20%E1%B5%92%C2%B0%E0%A8%85%C2%B0%E2%99%A6%20%E2%95%90%E2%95%90%7C%7C%0A%E2%97%A6%20%23%F0%9F%92%99%F0%9F%92%99%F0%9F%92%99%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%9B%B2%E2%9B%B2%E2%9B%B2%20%23%0A%0A.%20%20%20%20%20%20%E2%95%AD%E2%95%90%E2%95%90.%20%E2%9C%81%E0%BD%82%E0%BD%B4%E0%BD%82%E0%BD%B2%E0%BD%BA.%20%E2%95%90%E2%95%90%E2%95%AE%0A%2A%2ABirthday%20post%2A%2A%0A%E2%95%AD%E2%95%90%E2%95%90.%20%E2%9C%81%E0%BD%82%E0%BD%B4%E0%BD%82%E0%BD%B2%E0%BD%BA.%20%E2%95%90%E2%95%90%E2%95%AE%0A%2A%23Birthday_Celebration%2A%0A%F0%9F%8E%82%F0%9F%8E%82%F0%9F%8E%82%F0%9F%8E%82%F0%9F%8E%82%F0%9F%8E%82%F0%9F%8E%82%F0%9F%8E%82%0A%F0%9F%92%A0%F0%9F%92%A0%F0%9F%92%A0%F0%9F%92%A0%F0%9F%92%A0%F0%9F%92%A0%F0%9F%92%A0%F0%9F%92%A0%F0%9F%92%A0%F0%9F%92%A0%F0%9F%92%A0%F0%9F%92%A0%F0%9F%92%A0%F0%9F%92%A0%0A%2A%E2%95%94%E2%95%90%E2%95%90%E2%99%A6%E2%80%A2%C2%B0%E0%A8%85%C2%B0%20%E1%B5%92%20%E1%B5%92%C2%B0%E0%A8%85%C2%B0%E2%99%A6%20%E2%95%90%E2%95%90%E2%95%97%2A%0A%2A%2AHappy%20Birthda%2Ay%2A%2A%0A%2A%E2%95%9A%E2%95%90%E2%95%90%E2%99%A6%E2%80%A2%C2%B0%E0%A8%85%C2%B0%20%E1%B5%92%20%E1%B5%92%C2%B0%E0%A8%85%C2%B0%E2%99%A6%20%E2%95%90%E2%95%90%E2%95%9D%2A%0A%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%0A%E2%95%AD%E2%95%90%E2%95%90%E2%96%88%20%E2%9C%88%20%E2%96%88%E2%95%90%E2%95%90%E2%95%AE%0A%2A%2AHappy%20birthday%2A%2A%0A%F0%9F%8C%B9%20%0A%E2%95%AD%E2%95%90%E2%95%90%E2%96%88%20%E2%9C%88%20%E2%96%88%E2%95%90%E2%95%90%E2%95%AE%0A%F0%9F%92%9E%F0%9F%8C%83%F0%9F%92%A8%F0%9F%92%97%28%26%29%F0%9F%94%8F%F0%9F%92%97%F0%9F%92%97%F0%9F%92%97%F0%9F%92%97%F0%9F%92%97%F0%9F%92%97%%0A%0A%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%0A%F0%9F%8C%B9%E2%9D%A3%EF%B8%8E%E2%96%AC%20%E2%96%AC%E2%96%AC%F0%9F%92%97%20%E2%99%A6%20%F0%9F%92%97%E2%96%AC%E2%96%AC%20%E2%96%AC%E2%9D%A3%EF%B8%8E%F0%9F%8C%B9%0A%2A%E2%95%94%E2%95%90%E2%95%90%E2%99%A6%E2%80%A2%C2%B0%E0%A8%85%C2%B0%20%E1%B5%92%20%E1%B5%92%C2%B0%E0%A8%85%C2%B0%E2%99%A6%20%E2%95%90%E2%95%90%E2%95%97%2A%0A%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%E2%9C%B5%0A%F0%9F%8E%82%F0%9F%8E%82%F0%9F%8E%82%F0%9F%8E%82%F0%9F%8E%82%F0%9F%8E%82%F0%9F%8E%82%0A%F0%9F%8E%82%F0%9F%8E%82%F0%9F%8E%82%F0%9F%8E%82%F0%9F%8E%82%F0%9F%8E%82%F0%9F%8E%82%F0%9F%8E%82%0A%2A%E2%95%9A%E2%95%90%E2%95%90%E2%99%A6%E2%80%A2%C2%B0%E0%A8%85%C2%B0%20%E1%B5%92%20%E1%B5%92%C2%B0%E0%A8%85%C2%B0%E2%99%A6%20%E2%95%90%E2%95%95%E2%95%9D%2A%0A%F0%9F%8C%B9%E2%9D%A3%EF%B8%8E%E2%96%AC%20%E2%96%AC%E2%96%AC%F0%9F%92%97%20%E2%99%A6%20%F0%9F%92%97%E2%96%AC%E2%96%AC%20%E2%96%AC%E2%9D%A3%EF%B8%8E%F0%9F%8C%B9%0A%2A%E2%95%94%E2%95%90%E2%95%90%E2%99%A6%E2%80%A2%C2%B0%E0%A8%85%C2%B0%20%E1%B5%92%20%E1%B5%92%C2%B0%E0%A8%85%C2%B0%E2%99%A6%20%E2%95%90%E2%95%90%E2%95%97%2A%0A%E2%97%A6%20%23%F0%9F%92%99%F0%9F%92%99%F0%9F%92%99%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%9B%B2%E2%9B%B2%E2%9B%B2%20%23%0A%E2%95%AD%E2%95%90%E2%95%90.%20%E2%9C%81%E0%BD%82%E0%BD%B4%E0%BD%82%E0%BD%B2%E0%BD%BA.%20%E2%95%90%E2%95%90%E2%95%AE%0A%2A%2AHappy%20birthday%2A%2A%0A%E2%95%AD%E2%95%90%E2%95%90.%20%E2%9C%81%E0%BD%82%E0%BD%B4%E0%BD%82%E0%BD%B2%E0%BD%BA.%20%E2%95%90%E2%95%90%E2%95%AE%0A%F0%9F%8E%82%F0%9F%8E%82%20%20%20%20%20%20%F0%9F%8E%82%F0%9F%8E%82%0A%F0%9F%92%A0%F0%9F%92%A0%F0%9F%92%A0%F0%9F%92%A0%F0%9F%92%A0%F0%9F%92%A0%F0%9F%92%A0%F0%9F%92%A0%F0%9F%92%A0%F0%9F%92%A0%F0%9F%92%A0%F0%9F%92%A0%F0%9F%92%A0%F0%9F%92%A0%0A%E2%95%AD%E2%95%9E%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%AE%0A%F0%9F%84%B7%20%F0%9F%84%B0%20%F0%9F%85%8F%20%F0%9F%85%8F%20%F0%9F%85%8E%0A%F0%9F%84%B1%20%F0%9F%84%B7%20%F0%9F%84%B0%20%F0%9F%85%8F%20%F0%9F%85%8E%20%F0%9F%84%B0%0A%E2%95%9A%E2%95%9D%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%9D%0A%F0%9F%91%88.% Rudra.%C2%B0%E2%80%A2%0A%F0%9F%A4%8D%F0%9F%AB%B6%F0%9F%8F%BB%0A%2A%E2%95%94%E2%95%90%E2%95%90%E2%99%A6%E2%80%A2%C2%B0%E0%A8%85%C2%B0%20%E1%B5%92%20%E1%B5%92%C2%B0%E0%A8%85%C2%B0%E2%99%A6%20%E2%95%90%E2%95%90%E2%95%97%2A%0A%E2%97%A6%20%23%F0%9F%92%99%F0%9F%92%99%F0%9F%92%99%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%95%90%E2%9B%B2%E2%9B%B2%E2%9B%B2%20%23%0A%B8.%C2%B7%C2%B4%C2%AF%C2%B7.%C2%B4%C2%AF%C2%B7.%B8%E2%9C%80%20%B8.%C2%B7%C2%B4%C2%AF%C2%B7.%C2%B4%C2%AF%C2%B7.%B8%0A%E2%9C%80%20%20%20%E2%98%95%E2%98%95%E2%98%95%20%20%20%20%20%20%20%20%E2%9E%B9%E2%9E%B9%E2%9E%B9%E2%9E%B9%E2%9C%BF%E2%9E%B9%E2%9E%B9%E2%9E%B9%E2%9E%B9%0A%F0%9F%92%9D.%B8%B8.%C2%B7%C2%B4%C2%AF%60%C2%B7.%B8%E2%98%95%E2%98%95%E2%98%95%0A%E2%9C%A8%F0%9F%8C%92%E2%9C%A8%F0%9F%8C%92%E2%9C%A8%F0%9F%8C%92%0A%0A%20%2A%F0%9F%8C%B9%F0%9F%8C%B9%2A%0A%E2%9A%9E.%20%E2%99%A6%E2%99%A6%E2%99%A6%E2%99%A6%E2%99%A6%E2%99%A6%E2%99%A6%E2%99%A6%E2%9A%AB%E2%99%A6%0A%2A%E2%95%94%E2%95%90%E2%95%90%E2%99%A6%E2%80%A2%C2%B0%E0%A8%85%C2%B0%20%E1%B5%92%20%E1%B5%92%C2%B0%E0%A8%85%C2%B0%E2%99%A6%20%E2%95%90%E2%95%90%E2%95%97%2A%0A%2A%23Happy_Birthday%2A%0A%2A%E2%95%94%E2%95%90%E2%95%90%E2%99%A6%E2%80%A2%C2%B0%E0%A8%85%C2%B0%20%E1%B5%92%20%E1%B5%92%C2%B0%E0%A8%85%C2%B0%E2%99%A6%20%E2%95%90%E2%95%90%E2%95%97%2A%0A%2A%C2%B0%E0%A8%85%C2%B0%E2%99%A6%20%E2%95%90%E2%95%90%E2%95%9D%2A%0AHappy%20birthdaY%F0%9F%92%97%F0%9F%A5%83%F0%9F%8C%B9%F0%9F%8E%82%F0%9F%92%96%F0%9F%92%96%F0%9F%92%96%F0%9F%92%96%F0%9F%92%96%20%F0%9F%92%96%F0%9F%92%96%F0%9F%92%96%F0%9F%92%96%F0%9F%92%96%F0%9F%92%96%F0%9F%92%96%0A%DA%A9%D8%B1%D9%88%DA%91%D9%88%DA%BA%20%D8%AF%D8%B9%D8%A7%D8%A6%D9%85%DA%BA%20%D8%A7%D9%88%D8%B1%20%D8%AE%D9%88%D8%B4%D9%8A%D9%85%DA%BA%20%DA%A9%DB%92%0A%D9%84%D8%A7%D8%B2%D9%88%D8%A7%D9%84%20%D8%AE%D8%B2%D8%A7%D9%86%DB%92%20%DA%A9%DB%92%20%D8%B3%D8%A7%D8%AA%D8%AD%0A%D8%A7%D9%BE%20%DA%A9%D9%8A%20%D8%B3%D8%A7%D9%84%DA%AF%D8%B1%DB%81%20%DA%A9%D8%A7%20%D8%A7%D9%88%D8%B1%20%DB%81%D8%B1%20%D8%A2%D9%86%DB%92%20%D9%88%D8%A7%D9%84%D8%A7%20%D8%AF%D9%86%0A%D8%AE%D9%88%D8%B4%D9%8A%D9%85%DA%BA%20%D8%8C%D8%B1%D8%AD%D9%85%D8%AA%D9%85%DA%BA%D9%8B%20%D8%A7%D9%88%D8%B1%20%D8%A8%D8%B1%DA%A9%D8%AA%D9%85%DA%BA%20wala%20ho%0A%D8%B1%D8%A8%D9%90%20%DA%A9%D8%A7%D8%A6%D9%86%D8%A7%D8%AA%20%D8%A7%D9%BE%20%DA%A9%D9%88%20%DA%A8%DA%BE%D9%8A%D8%B1%D9%88%DA%BA%D9%8B%20%DA%A9%D8%A7%D9%85%D9%8A%D8%A7%D8%A8%D9%8A%D8%A7%D9%86%D9%8B%20%D8%A7%D9%88%D8%B1%20%D8%AE%D9%88%D8%B4%D9%8A%D9%85%DA%BA%20%D9%86%D8%B5%D9%8A%D8%A8%20%DA%A9%D8%B1%DB%92...%F0%9F%98%8D%0A%F0%9F%92%97%D8%A2%D9%85%D9%80%D9%80%D9%8A%D9%80%D9%8min%20%DB%81%D9%85%D9%8A%D8%B4%DB%81%20%DB%81%D9%86%D8%B3%D8%AA%DB%92%D9%85%D8%B3%DA%A9%D8%B1%D8%A7%D8%AA%DB%92%D8%B1%DB%81%D9%8A%D9%86%0A%F0%9F%92%97%F0%9F%92%97%D8%AC%D9%8A%D9%88%20%DB%81%D8%B2%D8%A7%D8%B1%D9%85%DA%BA%20%D8%B3%D8%A7%D8%AA%D8%AD%20%F0%9F%92%97%F0%9F%92%97%0AHappy%20birthday%20to%20you%0A%F0%9F%8E%82%F0%9F%96%A4%F0%9F%98%8D%0A%F0%9F%8E%88%0A%E2%80%A2%E2%94%8C%E2%94%91APPY_%F0%9F%8E%82%F0%9F%8E%86%F0%9F%8E%89%0A%E2%94%94%E2%98%8E%EF%B8%8F%20%F0%9F%84%B1%F0%9F%84%B8%F0%9F%85%81%F0%9F%85%82%F0%9F%84%B7%F0%9F%84%B3%F0%9F%84%B0%F0%9F%85%80%F0%9F%8E%89%F0%9F%8E%86.%20%40%F0%9F%98%8D%20Wait%20%F0%9F%8E%82%F0%9F%8E%82%F0%9F%92%96%F0%9F%92%96%0A%23happybirthdaywishes%F0%9F%92%97%F0%9F%92%96%23HAPP%20we_%F0%9F%93%B3%F0%9F%93%B3%F0%9F%93%B3%0A%F0%9F%92%96%F0%9F%92%96%F0%9F%92%96%F0%9F%92%96%F0%9F%92%96%F0%9F%92%96%0A%F0%9F%92%96%F0%9F%8E%82%F0%9F%8E%82%0A%F0%9F%8E%82%F0%9F%8E%82%F0%9F%8E%82%F0%9F%8D%B0%F0%9F%8D%B0%F0%9F%8D%AB%F0%9F%8D%AB%F0%9F%8D%B0%0A%E2%9D%A3%EF%B8%8E%E2%9D%A3%EF%B8%8E%E2%9D%A3%EF%B8%8E%E2%9D%A3%EF%B8%8E%E2%9D%A3%EF%B8%8E%E2%9D%A3%EF%B8%8E%E2%9D%A3%EF%B8%8E%E2%9D%A3%EF%B8%8E%0AHappy%20Birthday%20%F0%9F%92%96%F0%9F%92%96%F0%9F%92%96%0A%F0%9F%8E%82..%F0%9F%A7%A1%F0%9F%8C%B9%F0%9F%8C%B9%F0%9F%8C%B9%F0%9F%8C%B9%F0%9F%8C%B9%F0%9F%8C%B9%F0%9F%8C%B9%F0%9F%8C%B9%0AWish%20you%20a%20very%20happy%20and%20beautiful%20long%20life%0AALLAH%20bless%20you%20all%20happiness%20in%20life%0AAmeen%20%E2%9C%A8...%F0%9F%98%BB%F0%9F%8C%B9%F0%9F%8C%B9%F0%9F%98%8D%F0%9F%98%8D%F0%9F%98%8D%F0%9F%98%8D..";

function startSlideshowPage() {
    nextPage(8);
    currentPhotoIdx = 0;
    updateSlideshowImage();
}

function changePicture(direction) {
    currentPhotoIdx += direction;
    if (currentPhotoIdx >= photosList.length) currentPhotoIdx = 0;
    else if (currentPhotoIdx < 0) currentPhotoIdx = photosList.length - 1;
    updateSlideshowImage();
}

function updateSlideshowImage() {
    const imgElement = document.getElementById('slideshow-img');
    if (imgElement) {
        imgElement.style.opacity = '0.3';
        setTimeout(() => {
            imgElement.src = photosList[currentPhotoIdx];
            imgElement.style.opacity = '1';
        }, 150);
    }
}

function executeTypingEffect() {
    const container = document.getElementById('typing-text');
    const actionBtn = document.getElementById('letter-continue-btn');
    if(!container) return;
    
    // Direct load encoded data safely
    container.innerText = decodeURIComponent(textEncoded);
    if(actionBtn) actionBtn.classList.remove('hide');
}

function goToCakePage() {
    const candle = document.getElementById('cake-candle');
    const blowBtn = document.getElementById('blow-btn');
    if (candle) candle.classList.remove('blown');
    if (blowBtn) {
        blowBtn.removeAttribute('disabled');
        blowBtn.innerText = "🕯 Blow Candle";
    }
    nextPage(9);
}

function blowCandle() {
    const candle = document.getElementById('cake-candle');
    const blowBtn = document.getElementById('blow-btn');
    if (candle) candle.classList.add('blown');
    if (blowBtn) {
        blowBtn.setAttribute('disabled', 'true');
        blowBtn.innerText = "Blown! 💖";
    }
    startCanvasFX(6);
    setTimeout(() => { nextPage(10); }, 2500);
}

function restartSurprise() {
    fxActive = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('q4-reveal').classList.add('hide');
    document.getElementById('q4-btns').classList.remove('hide');
    document.getElementById('q4-title').classList.remove('hide');
    nextPage(1);
}

/* FX ENGINE */
const canvas = document.getElementById('fx-canvas');
const ctx = canvas.getContext('2d');
let fxActive = false;
let particles = [];

function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor(x, y, color, type) {
        this.x = x; this.y = y; this.color = color; this.type = type;
        this.radius = Math.random() * 3 + 1;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 5 + 2;
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;
        this.gravity = 0.1;
        this.opacity = 1;
        this.fade = Math.random() * 0.015 + 0.01;
    }
    update() { this.x += this.vx; this.y += this.vy; this.vy += this.gravity; this.opacity -= this.fade; }
    draw() {
        ctx.save(); ctx.globalAlpha = this.opacity; ctx.fillStyle = this.color;
        ctx.beginPath(); ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
    }
}

function spawnFireworkBurst() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * (canvas.height * 0.5) + canvas.height * 0.15;
    const hues = ['#ffd700', '#38bdf8', '#ffffff', '#f43f5e'];
    for(let i = 0; i < 40; i++) { particles.push(new Particle(x, y, hues[Math.floor(Math.random() * hues.length)], 'firework')); }
}

function renderFXLoop() {
    if(!fxActive) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(Math.random() < 0.04) { spawnFireworkBurst(); }
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        if (particles[i].opacity <= 0) particles.splice(i, 1);
        else particles[i].draw();
    }
    requestAnimationFrame(renderFXLoop);
}

function startCanvasFX(durationSeconds) {
    fxActive = true; particles = []; renderFXLoop();
    setTimeout(() => { fxActive = false; ctx.clearRect(0, 0, canvas.width, canvas.height); }, durationSeconds * 1000);
}

function spawnBalloonsLoop(count) {
    const container = document.getElementById('balloon-container');
    if (!container) return;
    container.innerHTML = '';
    const colors = ['rgba(212,175,55,0.7)', 'rgba(56,189,248,0.7)', 'rgba(244,63,94,0.7)'];
    for(let i=0; i<count; i++) {
        let balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 90 + '%';
        balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.animationDelay = (Math.random() * 4) + 's';
        container.appendChild(balloon);
    }
}
