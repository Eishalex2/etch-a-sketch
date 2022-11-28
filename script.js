const container = document.getElementById('container');
const dim = document.querySelector('input[type=number]');
const btn = document.querySelector('input[type=submit]');
const warn = document.querySelector('.warning');
const blueBtn = document.getElementById('blue');
const randomBtn = document.getElementById('random');
const gradientBtn = document.getElementById('gradient');
const resetBtn = document.getElementById('reset');

function makeGrid(rows, columns) {
  const size = dim.value;
  if (size < 0 || size > 100 || size === NaN) {
    warn.style.color = 'red';
    warn.textContent = 'Please select a number between 1 and 100.';
  } else {
    container.style.setProperty('--grid-row', rows);
    container.style.setProperty('--grid-column', columns);
    for (let i = 1; i <= (rows * columns); i++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      container.appendChild(cell);
    }
  }

  const cells = document.querySelectorAll('.cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseover', function(e) {
      e.target.style.backgroundColor = 'black';
    })
  }

}

function makeBlue() {
  const cells = document.querySelectorAll('.cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseover', function(e) {
      e.target.style.backgroundColor = 'lightskyblue';
    })
  }
}

blueBtn.addEventListener('click', makeBlue);

function makeRandom() {
  const cells = document.querySelectorAll('.cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseover', function(e) {
      let randomRed = Math.floor(Math.random() * 256);
      let randomGreen = Math.floor(Math.random() * 256);
      let randomBlue = Math.floor(Math.random() * 256);
      e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    })
  }
}

randomBtn.addEventListener('click', makeRandom);

function makeGradient() {
  const cells = document.querySelectorAll('.cell');
  let gradient = 0;
  let count = 1;
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseover', function(e) {
      e.target.style.backgroundColor = `rgba(0, 0, 0, ${gradient})`;
      if (Math.ceil(count / 25) % 2 !== 0) {
        gradient += 0.05;
      } else {
        gradient -= 0.05;
      }
      count += 1;
    })
  }
}

gradientBtn.addEventListener('click', makeGradient);

function reset() {
  const gridItems = document.querySelectorAll('.cell');
  gridItems.forEach((e) => {
    e.parentNode.removeChild(e);
  })
}

function resetColor() {
  const gridItems = document.querySelectorAll('.cell');
  gridItems.forEach((e) => {
    e.style.backgroundColor = "transparent";
  })
}

resetBtn.addEventListener('click', resetColor);

btn.addEventListener('click', () => {
  reset();
  const size = dim.value;
  makeGrid(size, size);
});

makeGrid(16,16);