export class PackStats {
  constructor(stats) {
    this.stats = stats;
  }

  render() {
    const container = document.createElement('div');
    container.innerHTML = `
      <h2>Statistiques par Pack</h2>
      ${Object.entries(this.stats)
        .map(([packName, { total, collected }]) => {
          const percentage = Math.round((collected / total) * 100);
          return `
            <div class="pack-stat">
              <h3>${packName}</h3>
              <div class="progress-container">
                <div class="stats-info">
                  <span class="collected">Collectées: ${collected}</span>
                  <span class="total">Total: ${total}</span>
                  <span class="percentage">Progression: ${percentage}%</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-bar-fill" style="width: ${percentage}%"></div>
                </div>
              </div>
            </div>
          `;
        }).join('')}
    `;
    
    return container;
  }
}