import { LitElement, html } from 'lit';

export class WidgetWrapper extends LitElement {
  static properties = {
    id: { type: Number },
    type: { type: String },
    config: { type: Object }
  };

  createRenderRoot() {
    return this; // ⚡ Bootstrap necesita esto
  }

  closeWidget() {
    this.dispatchEvent(new CustomEvent('widget-closed', {
      detail: { id: this.id },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="card shadow-sm h-100">
        <div class="card-header d-flex justify-content-between align-items-center">
          <span class="fw-bold">
            ${this.type === 'weather-widget' ? '🌤 Clima' :
              this.type === 'noticie-widget' ? '📰 Noticias' :
              this.type === 'chart-widget' ? '📊 Gráfico' : 'Widget'}
          </span>
          <button class="btn-close" aria-label="Cerrar" @click=${this.closeWidget}>
            <span class="fa fa-times"></span>
          </button>
        </div>
        <div class="card-body">
          ${this.type === 'weather-widget'
            ? html`<weather-widget .city=${this.config.city}></weather-widget>`
            : this.type === 'noticie-widget'
            ? html`<noticie-widget .source=${this.config.source}></noticie-widget>`
            : this.type === 'chart-widget'
            ? html`<chart-widget .title=${this.config.title}></chart-widget>`
            : html`<div>Widget desconocido</div>`
          }
        </div>
      </div>
    `;
  }
}
customElements.define('widget-wrapper', WidgetWrapper);
