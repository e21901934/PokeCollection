import { pokemonCards } from './data/pokemonCards.js';
import { CollectionManager } from './utils/collectionManager.js';
import { Card } from './components/Card.js';
import { PackStats } from './components/PackStats.js';
import { Controls } from './components/Controls.js';

class App {
  constructor() {
    this.collectionManager = new CollectionManager();
    this.controls = document.getElementById('controls');
    this.cardGrid = document.getElementById('cardGrid');
    this.packStatsContainer = document.getElementById('packStats');
    
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    // Render controls
    const controlsComponent = new Controls(() => {
      this.collectionManager.toggleAll(pokemonCards);
      this.render();
    });
    this.controls.innerHTML = '';
    this.controls.appendChild(controlsComponent.render());

    // Render pack stats
    const stats = this.collectionManager.getPackStats(pokemonCards);
    const packStatsComponent = new PackStats(stats);
    this.packStatsContainer.innerHTML = '';
    this.packStatsContainer.appendChild(packStatsComponent.render());

    // Render cards
    this.cardGrid.innerHTML = '';
    pokemonCards.forEach(cardData => {
      const isCollected = this.collectionManager.isCollected(cardData.id);
      const card = new Card(
        cardData,
        isCollected,
        (cardId) => {
          this.collectionManager.toggleCard(cardId);
          this.render();
        }
      );
      this.cardGrid.appendChild(card.render());
    });
  }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new App();
});