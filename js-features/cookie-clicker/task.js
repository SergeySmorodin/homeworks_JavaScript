const counter = document.getElementById('clicker__counter');

let clickCount = 0;
let isCookieOriginal = false;

cookie.onclick = function() {
  clickCount++;
  counter.textContent = clickCount;

  if (isCookieOriginal) {
    cookie.width = 200;
  } else {
    cookie.width = 220;
  }

  isCookieOriginal = !isCookieOriginal;
};
