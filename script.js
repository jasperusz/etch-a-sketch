let gridQuantity = 0; //Quantidade base de grids para ser alterada
let divToChange = document.getElementsByClassName('gameGrids');
let dadDiv = document.getElementById('squareGrid');
let squareSize = 960 / 16;

// Função de criação de novas divs
function newDiv() {
    const createdDiv = document.createElement('div');
    createdDiv.className = 'gameGrids';
    dadDiv.appendChild(createdDiv);

    // Evento de mudança de cores.
    createdDiv.addEventListener('mouseover', function () {
            this.style.backgroundColor = '#000000'
        });
};

// Função que define o tamanho do grid
function baseGridQuantity() {
    gridQuantity = 256 - 1;
    for (let i = 1; i <= gridQuantity; i++) {
        newDiv();
    };
};

// Função de resetar a cor do grid
function resetGrid() {
    const getResetButton = document.getElementById('resetButton');
    getResetButton.addEventListener('click', function() { 
        for (let i = 0; i < divToChange.length; i++) {
            divToChange[i].style.backgroundColor = '#ffffff'; };
    });
};

function changeGridSize() {
    const getGridButton = document.getElementById('gridButton');
    getGridButton.addEventListener('click', function(){
        const userPrompt = parseInt(prompt('Change the size of the number of squares per side that you want. (Max. 100)'));
        const removeGrid = document.getElementById('squareGrid').innerHTML = ""
        gridQuantity = userPrompt * userPrompt;
        squareSize = 960 / userPrompt;
        dadDiv.style.gridTemplateColumns = `repeat(${userPrompt}, ${userPrompt}px)`;
        divToChange[i].style.height = `${userPrompt}px`
        divToChange[i].style.width = `${userPrompt}px`
        for (let i = 1; i <= gridQuantity; i++) {
            newDiv();

    };
    });
};

baseGridQuantity();
resetGrid();
changeGridSize();