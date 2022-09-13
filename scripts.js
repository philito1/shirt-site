let time = 0;

function getMarTop() {
  return document.getElementById('shirt').style.marginTop;
}

function setMarTop(val) {
  document.getElementById('shirt').style.marginTop = val;
}

function sineMarTop() {
  newMar = 4 * Math.floor(6 * Math.sin(0.1 * time)) + 240;
  setMarTop(String(newMar) + 'px');
  time += 1;
}

setInterval(sineMarTop, 100);

// while (true) {
//   elem.style.paddingTop += 1;
// }
