export class MemoryGame {

    constructor(numberOfPairs) {
        this.numberOfPairs = numberOfPairs;
        this.deckOfCards = [];
    }

    static get _CARD_SYMBOLS() {
        return [
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
    }

    static get _CARD_BOARD() {
        return document.querySelector('#game-board');
    }

    startGame() {
        for (let i = 0; i < this.numberOfPairs * 2; i++) {
            const symbolId = Math.floor(i / 2);
            const rawCard = document.createElement('memorygame-card');
            const preparedCard = this._setupCard(rawCard, symbolId);
            this.deckOfCards.push(preparedCard);
            MemoryGame._CARD_BOARD.appendChild(preparedCard);
        }
    }

    _setupCard(card, symbolId) {
        card.setAttribute('symbol', MemoryGame._CARD_SYMBOLS[symbolId]);
        card.frontImageUrl = `./resources/images/cards/${MemoryGame._CARD_SYMBOLS[symbolId]}.png`;
        card.addEventListener('click', function () {
            this.flip();
        });
        return card;
    }
}