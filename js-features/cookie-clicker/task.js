const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const speedElement = document.getElementById('speed__counter');

let clickCount = 0;
let isCookieOriginal = false;
let lastClickTime = null;

cookie.onclick = function() {
  const currentTime = new Date();

  clickCount++;
  counter.textContent = clickCount;

  if (isCookieOriginal) {
    cookie.width = 200;
  } else {
    cookie.width = 220;
  }
  isCookieOriginal = !isCookieOriginal;

  if (lastClickTime !== null) {
    const timeDiff = (currentTime - lastClickTime) / 1000;
    const clicksPerSecond = (1 / timeDiff).toFixed(2);
    speedElement.textContent = clicksPerSecond;
  }

  lastClickTime = currentTime;
};
