const container = document.getElementById('container');

function makeGrid(rows, columns) {
  container.style.setProperty('--grid-row', rows);
  container.style.setProperty('--grid-column', columns);
}