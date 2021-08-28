// import css from "./css/style.css";

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
console.log(colors);
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');
btnStart.addEventListener('click', onBtnStart);
btnStop.addEventListener('click', onBtnStop);
let idInterval;
function onBtnStart() {
  idInterval = setInterval(() => {
    let backgr = colors[randomIntegerFromInterval(0, colors.length - 1)];
    body.style.backgroundColor = backgr;
  }, 1000);
  btnStart.disabled = true;
}
function onBtnStop() {
  clearInterval(idInterval);
  btnStart.disabled = false;
}
