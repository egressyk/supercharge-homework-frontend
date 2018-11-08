export class MemoryGame {

    constructor(numberOfPairs) {
        this.numberOfPairs = numberOfPairs;
        this.deckOfCards = [];
        this.pickedCards = [];
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
        card.addEventListener('click', this._onClickCard.bind(this));
        return card;
    }

    _onClickCard(event) {
        const clickedCard = event.currentTarget;
        if (clickedCard.hasAttribute('faceUP') || this.pickedCards.length === 2) return;
        clickedCard.flip();
        this.pickedCards.push(clickedCard);
        if (this.pickedCards.length < 2) return;
        if (this.pickedCards[0].getAttribute('symbol') === this.pickedCards[1].getAttribute('symbol')) {
            this._handlePair();
        } else {
            this._handleNoPair();
        }
    }

    _handlePair() {
        this.pickedCards.forEach(card => card.removeEventListener('click', this._onClickCard));
        this.pickedCards[1].addEventListener('transitionend', () => {
            if (this._isGameOver()) {
                this._handleGameOver();
            } else {
                this.pickedCards = [];
            }
        });
    }

    _handleNoPair() {
        setTimeout(() => {
            this.pickedCards.forEach(card => card.flip());
            this.pickedCards = [];
        }, 2000);
    }

    _isGameOver() {
        return !this.deckOfCards.some(card => !card.hasAttribute('faceUp'));
    }

    _handleGameOver() {
        alert("WOW, you won!");
    }
}