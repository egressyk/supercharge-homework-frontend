class MemoryCard extends HTMLElement {
    get faceUP() {
        return this.hasAttribute('faceUp');
    }

    connectedCallback() {
        this.classList.add('card');
        this.innerHTML = `
                <div class="back">Back</div>
                <div class="front">Front</div>`;
    }

    flip() {
        this.toggleAttribute('faceUp');
    }

}

console.log('import OK');
customElements.define('memorygame-card', MemoryCard);