export class CollectionManager {
  constructor() {
    this.collectedCards = new Set();
  }

  toggleCard(cardId) {
    if (this.collectedCards.has(cardId)) {
      this.collectedCards.delete(cardId);
    } else {
      this.collectedCards.add(cardId);
    }
  }

  isCollected(cardId) {
    return this.collectedCards.has(cardId);
  }

  toggleAll(cards) {
    // Si toutes les cartes sont collectées, on les retire toutes
    // Sinon, on les ajoute toutes
    const allCollected = cards.every(card => this.collectedCards.has(card.id));
    
    if (allCollected) {
      this.collectedCards.clear();
    } else {
      cards.forEach(card => this.collectedCards.add(card.id));
    }
  }

  getPackStats(cards) {
    const stats = {};
    
    cards.forEach(card => {
      if (!stats[card.packName]) {
        stats[card.packName] = { total: 0, collected: 0 };
      }
      stats[card.packName].total++;
      if (this.collectedCards.has(card.id)) {
        stats[card.packName].collected++;
      }
    });

    return stats;
  }
}