const container = document.getElementById('container');
const dim = document.querySelector('input[type=number]');
const btn = document.querySelector('input[type=submit]');

function makeGrid(rows, columns) {
  container.style.setProperty('--grid-row', rows);
  container.style.setProperty('--grid-column', columns);
  for (let i = 1; i <= (rows * columns); i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
  }

  const cells = document.querySelectorAll('.cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseover', function(e) {
      e.target.style.backgroundColor = 'blue';
    })
  }
}

function reset() {
  const gridItems = document.querySelectorAll('.cell');
  gridItems.forEach((e) => {
    e.parentNode.removeChild(e);
  })
}

btn.addEventListener('click', () => {
  reset();
  const size = dim.value;
  makeGrid(size, size);
});