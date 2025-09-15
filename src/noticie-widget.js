import { LitElement, html } from 'lit';

export class NoticieWidget extends LitElement {
  static properties = {
    source: { type: String }
  };

  constructor() {
    super();
    this.source = 'CNN';
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <h5 class="card-title">Noticias - ${this.source}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Noticia 1...</li>
        <li class="list-group-item">Noticia 2...</li>
      </ul>
    `;
  }
}
customElements.define('noticie-widget', NoticieWidget);
