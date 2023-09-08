const displayToken = document.querySelector("#token"),
  progress = document.querySelector("progress"),
  btnCopiar = document.querySelector("button");
let random = Math.floor(Math.random() * 1000000);
displayToken.value = random;
let intervalo = 100;
progress.value = 100;
const intervaloToken = setInterval(() => {
  if (intervalo == 0) {
    clearInterval(intervaloToken);
    intervalo = 100;
    location.reload();
  }
  intervalo -= 10;
  progress.value = intervalo;
}, 1000);

const copyToClipboard = (str) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(str);
  return Promise.reject("La API Clipboard no está disponible en su navegador.");
};

btnCopiar.addEventListener("click", () => {
  copyToClipboard(displayToken.value);
});
