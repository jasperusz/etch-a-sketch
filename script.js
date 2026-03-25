let gridQuantity = 0;

function newDiv() {
    const dadDiv = document.getElementById('squareGrid');
    const createdDiv = document.createElement('div');
    createdDiv.className = 'gameGrids';
    dadDiv.appendChild(createdDiv);
}

function baseGridSize() {
    gridQuantity = 256;
    for (i = 1; i <= gridQuantity; i++) {
        newDiv();
    }
}

baseGridSize();