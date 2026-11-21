const form = document.getElementById("pace-form");
const paceOutput = document.getElementById("pace-output");

function calculatePace() {
  const distance = parseFloat(document.getElementById("distance").value);
  const hours = parseInt(document.getElementById("hours").value, 10) || 0;
  const minutes = parseInt(document.getElementById("minutes").value, 10) || 0;
  const seconds = parseInt(document.getElementById("seconds").value, 10) || 0;

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  if (!distance || distance <= 0 || totalSeconds <= 0) {
    paceOutput.textContent = "--:-- min/km";
    return;
  }

  const secondsPerKm = Math.round(totalSeconds / distance);
  const paceMinutes = Math.floor(secondsPerKm / 60);
  const paceSeconds = secondsPerKm % 60;

  const formattedSeconds = String(paceSeconds).padStart(2, "0");
  paceOutput.textContent = `${paceMinutes}:${formattedSeconds} min/km`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  calculatePace();
});

// Calcula un valor inicial al cargar la página
calculatePace();