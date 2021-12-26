function createGrid(size) {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (j = 0; j < size; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('mouseenter', () => square.style.backgroundColor = getRandomColor());
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => square.style.backgroundColor = 'white');
    let size;
    do {
        size = parseInt(prompt('Please enter a new grid size.'));
    } while (!Number.isInteger(size) || (size < 1 || size > 100));
    createGrid(size);
});

createGrid(10);