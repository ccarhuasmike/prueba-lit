import { LitElement, html } from 'lit';

export class WeatherWidget extends LitElement {
  static properties = {
    city: { type: String }
  };

  constructor() {
    super();
    this.city = 'Lima';
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <h5 class="card-title">Clima en ${this.city}</h5>
      <p class="display-6 fw-bold text-primary">26°C ☀️</p>
      <p class="text-muted">Soleado todo el día</p>
    `;
  }
}
customElements.define('weather-widget', WeatherWidget);
