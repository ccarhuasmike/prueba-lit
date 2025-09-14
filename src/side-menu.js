import { LitElement, html } from "lit";

class SideMenu extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
          <ul class="nav metismenu" id="side-menu">
            <li class="nav-header">
              <div class="dropdown profile-element">
                <span><img alt="image" class="img-circle" src="/img/profile_small.jpg" /></span>
                <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                  <span class="clear">
                    <span class="block m-t-xs"><strong class="font-bold">Usuario Demo</strong></span>
                    <span class="text-muted text-xs block">Administrador <b class="caret"></b></span>
                  </span>
                </a>
                <ul class="dropdown-menu animated fadeInRight m-t-xs">
                  <li><a href="#">Perfil</a></li>
                  <li><a href="#">Configuración</a></li>
                  <li class="divider"></li>
                  <li><a href="#">Salir</a></li>
                </ul>
              </div>
              <div class="logo-element">IN+</div>
            </li>
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
    `;
  }
}

customElements.define("side-menu", SideMenu);
