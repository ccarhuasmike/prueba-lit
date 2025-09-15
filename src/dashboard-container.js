import { LitElement, html } from 'lit';
import { map } from 'lit/directives/map.js';

export class DashboardContainer extends LitElement {
  static properties = {
    widgets: { type: Array }
  };

  constructor() {
    super();
    this.widgets = [
      { id: 1, type: 'weather-widget', config: { city: 'Lima' } },
      { id: 2, type: 'noticie-widget', config: { source: 'BBC' } },
      { id: 3, type: 'chart-widget', config: { title: 'Ventas 2025' } }
    ];
  }

  createRenderRoot() {
    return this; // ⚡ Permite que los estilos Bootstrap apliquen
  }

  handleWidgetClosed(e) {
    const id = e.detail.id;
    this.widgets = this.widgets.filter(w => w.id !== id);
  }

  render() {
    return html`
      ${this.widgets.length === 0
        ? html`
          <div class="alert alert-info text-center">
            No hay widgets en el dashboard
          </div>
        `
        : html`
          <div class="row g-3">
            ${map(this.widgets, w => html`
              <div class="col-md-4">
                <widget-wrapper
                  .id=${w.id}
                  .type=${w.type}
                  .config=${w.config}
                  @widget-closed=${this.handleWidgetClosed}>
                </widget-wrapper>
              </div>
            `)}
          </div>
        `}
    `;
  }
}
customElements.define('dashboard-container', DashboardContainer);