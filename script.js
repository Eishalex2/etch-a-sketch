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
    console.log(cell);
  }
}

let numCells = dim.value;

//looks like <div class='cell'></div>
btn.addEventListener('click', () => {
  makeGrid(dim.value, dim.value);
});

//Also looks like <div class='cell'></div>
// makeGrid(5,5);

let gridItems = document.querySelectorAll('.cell');
for (let i = 0; i < gridItems.length; i++) {
  gridItems[i].addEventListener('mouseover', makeBlue);
};

function makeBlue(e) {
  e.target.style.backgroundColor = 'blue';
};

// function makeBlue(e) {
//   e.
// }