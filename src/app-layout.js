import { LitElement, html, css } from 'lit';
import './components/comp1.js';
import './components/comp2.js';

export class AppLayout extends LitElement {
    static styles = css`
    .container {
      margin-top: 20px;
    }
  `;
    // 🔑 Usamos Light DOM
    createRenderRoot() {
        return this;
    }
    render() {
        return html`
      <div class="container">
        <h1 class="text-center text-primary">Layout Principal con Lit + Bootstrap</h1>
        <div class="row">
          <div class="col-md-4"><comp-1></comp-1></div>
          <div class="col-md-4"><comp-2></comp-2></div>          
        </div>
        <div class="row mt-3">
          
        </div>
        <div class="row mt-3">
          
        </div>
      </div>
    `;
    }
}

customElements.define('app-layout', AppLayout);