//variables
const buttons = document.querySelector(".container-buttons"),
  numbers = document.querySelectorAll(".display span");
let hr = "0" + 0,
  min = "0" + 0,
  sec = "0" + 0,
  ms = "0" + 0,
  idInterval;

//funciones
function start() {
  idInterval = setInterval(() => {
    ms++;
    ms = ms < 10 ? `0${ms}` : ms;

    if (ms == 100) {
      sec++;
      sec = sec < 10 ? `0${sec}` : sec;
      ms = `0${0}`;
    }
    if (sec == 60) {
      min++;
      min = min < 10 ? `0${min}` : min;
      sec = `0${0}`;
    }
    if (min == 60) {
      hr++;
      hr = hr < 10 ? `0${hr}` : hr;
      min = `0${0}`;
    }

    render();
  }, 10);
}

function render() {
  numbers[3].innerHTML = ms;
  numbers[2].innerHTML = sec;
  numbers[1].innerHTML = min;
  numbers[0].innerHTML = hr;
}

//listeners
buttons.addEventListener("click", (e) => {
  if (e.target.matches(".play") || e.target.matches(".fa-play")) {
    start();
    buttons.childNodes[1].setAttribute("disabled", "");
    buttons.childNodes[3].removeAttribute("disabled");
    buttons.childNodes[5].removeAttribute("disabled");
    buttons.childNodes[7].removeAttribute("disabled");
  }
  if (e.target.matches(".pause") || e.target.matches(".fa-pause")) {
    clearInterval(idInterval);
    buttons.childNodes[1].removeAttribute("disabled");
    buttons.childNodes[3].setAttribute("disabled", "");
    buttons.childNodes[5].setAttribute("disabled", "");
  }
  if (e.target.matches(".stop") || e.target.matches(".fa-stop")) {
    clearInterval(idInterval);
    buttons.childNodes[1].removeAttribute("disabled");
    buttons.childNodes[3].setAttribute("disabled", "");
    buttons.childNodes[5].setAttribute("disabled", "");
  }
  if (e.target.matches(".reset") || e.target.matches(".fa-stopwatch")) {
    hr = 0;
    min = 0;
    sec = 0;
    ms = 0;
    numbers[3].innerHTML = "0" + ms;
    numbers[2].innerHTML = "0" + sec;
    numbers[1].innerHTML = "0" + min;
    numbers[0].innerHTML = "0" + hr;
    buttons.childNodes[7].setAttribute("disabled", "");
  }
});
