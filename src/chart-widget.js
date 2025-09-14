import { LitElement, html } from 'lit';

export class ChartWidget extends LitElement {
  static properties = {
    title: { type: String }
  };

  constructor() {
    super();
    this.title = 'Gráfico';
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <h5 class="card-title">${this.title}</h5>
      <div class="p-3 bg-light border rounded text-center">
        [Aquí iría el gráfico 📊]
      </div>
    `;
  }
}
customElements.define('chart-widget', ChartWidget);
