function horaZonaActual() {
  const DateTime = luxon.DateTime,
    fecha = DateTime.now();
  let hora = fecha.hour,
    minuto = fecha.minute,
    segundo = fecha.second,
    zone = fecha.zoneName;

  hora < 10 && (hora = `0${hora}`);
  minuto < 10 && (minuto = `0${minuto}`);
  segundo < 10 && (segundo = `0${segundo}`);

  return {
    hora,
    minuto,
    segundo,
    zone,
  };
}

function createHTML() {
  let { hora, minuto, segundo, zone } = horaZonaActual();
  document.querySelector(".container-clock").innerHTML = ` 
        <div class="clock">
          <span>${hora}</span>:<span>${minuto}</span><span class="seconds">${segundo}</span>
          </div>
          <div class="info">
          <span>${zone}</span>
          </div>`;
}

setInterval(createHTML, 1000);
