export class Card {
  constructor(cardData, isCollected, onToggle) {
    this.cardData = cardData;
    this.isCollected = isCollected;
    this.onToggle = onToggle;
  }

  render() {
    const card = document.createElement('div');
    card.className = `pokemon-card ${this.isCollected ? 'collected' : ''}`;
    
    card.innerHTML = `
      <div class="card-container">
        <div class="card-header">
          <span class="font-bold">${this.cardData.name}</span>
          <span>#${this.cardData.number}</span>
        </div>
        <div class="card-image-container">
          <img src="${this.cardData.imageUrl}" alt="${this.cardData.name}" class="card-image">
        </div>
        <div class="card-footer">
          <p>${this.cardData.packName}</p>
        </div>
      </div>
    `;

    card.addEventListener('click', () => this.onToggle(this.cardData.id));
    
    return card;
  }
}