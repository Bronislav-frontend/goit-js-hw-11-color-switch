const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body')
}

const INTERVAL_DELAY = 1000;
let intervalId = null;

function startInterval() {
  intervalId = setInterval(() => {
  setBodyBgColor()
}, INTERVAL_DELAY )
}

function stopInterval() {
  clearInterval(intervalId)
}

function onClickStartBtn() {
    startInterval()
    makeBtnDisabled()
}

function onClickStopBtn() {
    stopInterval()
     if (refs.startBtn.hasAttribute('disabled')) {
    makeBtnDisabled()
  }
}


function setBodyBgColor() {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval([0], colors.length - 1)];
}

function makeBtnDisabled() {
  refs.startBtn.toggleAttribute('disabled')
  refs.startBtn.classList.toggle('disabled')
}


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', onClickStartBtn)
refs.stopBtn.addEventListener('click', onClickStopBtn)

