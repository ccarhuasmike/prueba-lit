import { LitElement, html, css } from 'lit';
import "./side-menu.js";
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
       <div id="wrapper">
        <!-- Sidebar -->
        <nav class="navbar-default navbar-static-side" role="navigation">
          <div class="sidebar-collapse">
            <ul class="nav metismenu" id="side-menu">             
              <li class="active">
                <a href="#"><i class="fa fa-th-large"></i> <span class="nav-label">Dashboard</span></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-bar-chart-o"></i> <span class="nav-label">Gráficas</span></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-table"></i> <span class="nav-label">Tablas</span></a>
              </li>
            </ul>
          </div>
        </nav>
        <!-- Page wrapper -->
        <div id="page-wrapper" class="gray-bg">
          <!-- Top navbar -->
          <div class="row border-bottom">
            <nav class="navbar navbar-static-top white-bg" role="navigation">
              <div class="navbar-header">
                <a class="navbar-minimalize btn btn-primary" href="#"><i class="fa fa-bars"></i></a>
              </div>
              <ul class="nav navbar-top-links navbar-right">
                <li><a href="#"><i class="fa fa-sign-out"></i> Salir</a></li>
              </ul>
            </nav>
          </div>
          <!-- Main content -->
          <div class="wrapper wrapper-content">
            <dashboard-container></dashboard-container>
          </div>
          <!-- Footer -->
          <div class="footer">
            <div class="pull-right">Versión <strong>1.0</strong></div>
            <div><strong>Copyright</strong> Mi App © 2025</div>
          </div>
        </div>
      </div>
    `;
    }
}
customElements.define('app-layout', AppLayout);