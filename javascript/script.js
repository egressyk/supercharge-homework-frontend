import './components/memorygame-card.js';

const deckOfCards = [];

const cardBoard = document.querySelector('#game-board');

function initBoard(numberOfPairs = 2) {
    for (let i = 1; i <= numberOfPairs * 2; i++) {
        const newCard = document.createElement('memorygame-card');
        newCard.addEventListener('click', function () {
            this.flip();
        });
        deckOfCards.push(newCard);
        cardBoard.appendChild(newCard);
    }
}

initBoard(5);
