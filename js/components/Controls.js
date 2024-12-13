import { SelectAllButton } from './SelectAllButton.js';

export class Controls {
  constructor(onSelectAll) {
    this.onSelectAll = onSelectAll;
  }

  render() {
    const container = document.createElement('div');
    container.className = 'controls';
    
    const selectAllButton = new SelectAllButton(this.onSelectAll);
    container.appendChild(selectAllButton.render());
    
    return container;
  }
}