// Variáveis para controlar o estado atual
var leftBank = ['homem', 'lobo', 'cabra', 'alfafa'];
var rightBank = [];
var boat = [];

// Função para mover um item do banco para o barco
function move(item) {
    if (leftBank.includes(item)) {
        // Se o item estiver na margem esquerda
        if (item === 'lobo' && leftBank.includes('cabra')) {
            alert("O lobo não pode ficar sozinho com a cabra!");
            return;
        }
        if (item === 'cabra' && leftBank.includes('alfafa')) {
            alert("A cabra não pode ficar sozinha com o maço de alfafa!");
            return;
        }
        leftBank = leftBank.filter(i => i !== item);
        boat.push(item);
    } else if (rightBank.includes(item)) {
        // Se o item estiver na margem direita
        rightBank = rightBank.filter(i => i !== item);
        boat.push(item);
    } else if (boat.includes(item)) {
        // Se o item estiver no barco
        boat = boat.filter(i => i !== item);
        if (leftBank.length === 0) {
            rightBank.push(item);
            checkWin();
            return;
        }
        if (item === 'lobo' && leftBank.includes('cabra')) {
            alert("O lobo não pode ficar sozinho com a cabra!");
            boat = [];
            return;
        }
        if (item === 'cabra' && leftBank.includes('alfafa')) {
            alert("A cabra não pode ficar sozinha com o maço de alfafa!");
            boat = [];
            return;
        }
        leftBank.push(item);
    }
    render();
}

// Função para verificar se o jogador ganhou
function checkWin() {
    if (rightBank.length === 4) {
        alert("Parabéns! Você atravessou o rio com todos os seus pertences.");
    }
}

// Função para renderizar a tela com base no estado atual
function render() {
    var leftBankElem = document.getElementById('left-bank');
    var rightBankElem = document.getElementById('right-bank');
    var boatElem = document.getElementById('boat');
    
    leftBankElem.innerHTML = leftBank.map(item => `<p>${item}</p>`).join('');
    rightBankElem.innerHTML = rightBank.map(item => `<p>${item}</p>`).join('');
    boatElem.innerHTML = boat.map(item => `<p>${item}</p>`).join('');
}

// Renderiza a tela inicial
render();
