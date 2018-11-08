import './components/memorygame-card.js';

const card = document.createElement('memorygame-card');
document.querySelector('body').appendChild(card);
card.addEventListener('click', function () {
    this.flip();
});
