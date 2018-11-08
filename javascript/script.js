import './components/memorygame-card.js';

const CARD_SYMBOLS = [
    'angular',
    'd3',
    'jenkins',
    'postcss',
    'react',
    'redux',
    'sass',
    'supercharge',
    'ts',
    'webpack',
];

const deckOfCards = [];

const cardBoard = document.querySelector('#game-board');

function initBoard(numberOfPairs = 2) {
    for (let i = 0; i < numberOfPairs * 2; i++) {
        const symbolId = Math.floor(i / 2);
        const rawCard = document.createElement('memorygame-card');
        const preparedCard = setupCard(rawCard, symbolId);
        deckOfCards.push(preparedCard);
        cardBoard.appendChild(preparedCard);
    }
}

function setupCard(card, symbolId) {
    card.setAttribute('symbol', CARD_SYMBOLS[symbolId]);
    card.frontImageUrl = `./resources/images/cards/${CARD_SYMBOLS[symbolId]}.png`;
    card.addEventListener('click', function () {
        this.flip();
    });
    return card;
}

initBoard(5);
