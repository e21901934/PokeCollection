export class SelectAllButton {
  constructor(onClick) {
    this.onClick = onClick;
  }

  render() {
    const button = document.createElement('button');
    button.className = 'select-all-btn';
    button.textContent = 'Sélectionner Tout';
    button.addEventListener('click', this.onClick);
    return button;
  }
}