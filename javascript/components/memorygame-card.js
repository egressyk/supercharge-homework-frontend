class MemoryCard extends HTMLElement {
    constructor() {
        super();
        this._frontImageUrl = '';
    }

    get faceUP() {
        return this.hasAttribute('faceUp');
    }

    get frontImageUrl() {
        return this._frontImageUrl;
    }

    set frontImageUrl(imgUrl) {
        this._frontImageUrl = imgUrl;
    }

    connectedCallback() {
        this.classList.add('card');
        this.innerHTML = `
                <div class="back"></div>
                <div class="front" style="background-image: url(${this._frontImageUrl})">
                </div>`;
    }

    flip() {
        this.toggleAttribute('faceUp');
    }

}

console.log('import OK');
customElements.define('memorygame-card', MemoryCard);