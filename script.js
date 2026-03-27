let gridQuantity = 0; //Quantidade base de grids para ser alterada
let divToChange = document.getElementsByClassName('gameGrids');
let dadDiv = document.getElementById('squareGrid');
let squareSize = 960 / 16;
let activeButton = 'black'


// Função de criação de novas divs
function newDiv() {
    const createdDiv = document.createElement('div');
    createdDiv.className = 'gameGrids';
    dadDiv.appendChild(createdDiv);
    createdDiv.style.width = `${squareSize}px`;
    createdDiv.style.height = `${squareSize}px`;
    
    // Evento de mudança de cores.
    createdDiv.addEventListener('mouseover', function () {
        let divOpacity = this.style.opacity || '1'; 
        if (activeButton === 'black') {
            this.style.backgroundColor = '#000000' 
        } else if (activeButton === 'random') {
                    const red = Math.floor(Math.random() * 256);
                    const green = Math.floor(Math.random() * 256);
                    const blue = Math.floor(Math.random() * 256);
                    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        } else if (activeButton === 'opacity') {  
                let newDivOpacity = parseFloat(divOpacity) - 0.1;
                this.style.opacity = `${newDivOpacity}`; 
            };
        });
};

// Função que define o tamanho do grid
function baseGridQuantity() {
    gridQuantity = 256;
    for (let i = 1; i <= gridQuantity; i++) {
        newDiv();
    };
};

// Função de resetar a cor do grid
function resetGrid() {
    const getResetButton = document.getElementById('resetButton');
    getResetButton.addEventListener('click', function() {
        activeButton = 'black'
        for (let i = 0; i < divToChange.length; i++) {
            divToChange[i].style.backgroundColor = '#ffffff';
            divToChange[i].style.opacity = '1'};
    });
};

function changeGridSize() {
    const getGridButton = document.getElementById('gridButton');
    getGridButton.addEventListener('click', function(){
        const userPrompt = parseInt(prompt('Change the size of the number of squares per side that you want. (Max. 100)'));
        const removeGrid = document.getElementById('squareGrid').innerHTML = ""
        gridQuantity = userPrompt * userPrompt;
        squareSize = 960 / userPrompt;
        for (let i = 1; i <= gridQuantity; i++) {
            newDiv();

    };
    });
};

function opacityChange() {
    const getOpacityButton = document.getElementById('opacityButton');
    getOpacityButton.addEventListener('click', function(){
        activeButton = 'opacity'
    })
};

function randomColor() {
    const getRandomButton = document.getElementById('randomButton');
        getRandomButton.addEventListener('click', function(){
        activeButton = 'random'
    });
};

function blackColor() {
    const getBlackButton = document.getElementById('blackButton');
        getBlackButton.addEventListener('click', function(){
        activeButton = 'black'
    });
};

baseGridQuantity();
resetGrid();
changeGridSize();
opacityChange();
randomColor();
blackColor();