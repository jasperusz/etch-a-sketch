let gridQuantity = 0; //Quantidade base de grids para ser alterada
let divToChange = document.getElementsByClassName('gameGrids');

// Função de criação de novas divs
function newDiv() {
    const dadDiv = document.getElementById('squareGrid');
    const createdDiv = document.createElement('div');
    createdDiv.className = 'gameGrids';
    dadDiv.appendChild(createdDiv);
};

// Função que define o tamanho do grid
function baseGridSize() {
    gridQuantity = 256 - 1;
    for (let i = 1; i <= gridQuantity; i++) {
        newDiv();
    }
}

// Função de troca de cores das divs
function changeColor() {
    for (let i = 0; i < divToChange.length; i++)
        divToChange[i].addEventListener('mouseover', function () {
            this.style.backgroundColor = '#000000'
        });
};

// Função de resetar a cor do grid
function resetGrid() {
    const getResetButton = document.getElementById('resetButton');
    getResetButton.addEventListener('click', function() { 
        for (let i = 0; i < divToChange.length; i++) {
            divToChange[i].style.backgroundColor = '#ffffff'; };
    });
};

baseGridSize();
changeColor();
resetGrid();