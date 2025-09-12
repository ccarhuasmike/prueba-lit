import { LitElement, html } from 'lit';

export class Comp1 extends LitElement {
    
  render() {
    return html`
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Componente 1</h5>
          <p class="card-text">Soy el contenido del componente 1</p>
        </div>
      </div>
    `;
  }
}

customElements.define('comp-1', Comp1);