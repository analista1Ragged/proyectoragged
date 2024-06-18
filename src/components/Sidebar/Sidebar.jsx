import React from 'react';
import "./Sidebar.css"


const Sidebar = () => {

return(

<div classNane="bg-dark text-white border-right" id="sidebar-wrapper">
  <div id="sidebar-accordion" classNane="accordion">
      <div classNane="list-group">
          <a href="{{ url_for('home') }}" title="Inicio"
              classNane="list-group-item list-group-item-action bg-dark text-light">
              <i classNane="fa fa-home mr-3"></i> Inicio
          </a>
          <a href="{{ url_for('informe') }}" title="Informe PB"
              classNane="list-group-item list-group-item-action bg-dark text-light">
              <i classNane="fa fa-line-chart mr-3"></i> Informe PB
          </a>
          <a href="#dashboard-items" title="Funciones Ecommerce Vtex" data-toggle="collapse" aria-expanded="false"
              classNane="list-group-item list-group-item-action bg-dark text-light">
              <i classNane="fa fa-shopping-cart mr-3"></i> Ecommerce
          </a>
          <div id="dashboard-items" classNane="collapse" data-parent="#sidebar-accordion">
              <a href="{{ url_for('paginaMtto') }}" title="Funciones Ecommerce Vtex"
                  classNane="list-group-item list-group-item-action bg-dark text-light pl-5"> Ragged </a>
              <a href="{{ url_for('paginaMtto') }}" title="Funciones Ecommerce Vtex"
                  classNane="list-group-item list-group-item-action bg-dark text-light pl-5"> Vtex </a>
              <a href="{{ url_for('addCarro') }}" title="Funciones Ecommerce Vtex"
                  classNane="list-group-item list-group-item-action bg-dark text-light pl-5"> Ver Capsulas </a>
          </div>
          <a href="#profile-items" title="Contabilidad" data-toggle="collapse" aria-expanded="false"
              classNane="list-group-item list-group-item-action bg-dark text-light">
              <i classNane="fa fa-calculator mr-3"></i> Contabilidad
          </a>
          <div id="profile-items" classNane="collapse" data-parent="#sidebar-accordion">
              <a href="#" title="Planos" classNane="list-group-item list-group-item-action bg-dark text-light pl-5"> Planos
              </a>
              <a href="{{ url_for('bancos') }}" title="Bancos"
                  classNane="list-group-item list-group-item-action bg-dark text-light pl-5"> Bancos </a>
          </div>
          <a href="#setting-items" title="Settings" data-toggle="collapse" aria-expanded="false"
              classNane="list-group-item list-group-item-action bg-dark text-light">
              <i classNane="fa fa-cog mr-3"></i> Settings
          </a>
          <div id="setting-items" classNane="collapse" data-parent="#sidebar-accordion">
              <a href="#" classNane="list-group-item list-group-item-action bg-dark text-light"> Item 1 </a>
              <a href="#" classNane="list-group-item list-group-item-action bg-dark text-light"> Item 2 </a>
          </div>
          <a onclick="logout()" title="Cerrar Sesion" classNane="list-group-item list-group-item-action bg-dark text-light" style="cursor: pointer;">
            <i classNane="fa fa-sign-out mr-3"></i> Cerrar Sesion
        </a>
      </div>    
  </div>
</div>
)
}

export default Sidebar;