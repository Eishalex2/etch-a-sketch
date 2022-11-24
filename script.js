const container = document.getElementById('container');

function makeGrid(rows, columns) {
  container.style.setProperty('--grid-row', rows);
  container.style.setProperty('--grid-column', columns);
  for (let i = 1; i <= (rows * columns); i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
  }
}

makeGrid(5,5);

let gridItems = document.querySelectorAll('.cell');
for (let i = 0; i < gridItems.length; i++) {
  gridItems[i].addEventListener('mouseover', makeBlue);
}

function makeBlue(e) {
  e.target.style.backgroundColor = 'blue';
}