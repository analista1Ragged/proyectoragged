import React, { Fragment } from 'react'
import { Sidebar as SB, Menu, MenuItem, SubMenu, useProSidebar, menuClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import {FaAngleRight, FaChartBar, FaCogs, FaDatabase, FaDoorClosed, FaHome, FaUser} from 'react-icons/fa'
import { routeServer } from '../App';
import { useStateContext } from '../contexts/ContextApp';


const Sidebar = () => {

  const { collapseSidebar, collapsed } = useProSidebar();

  const {roleCode} = useStateContext();

  const menu = [
    {
      title: 'Ventas',
      auth: ["ADM", "UPD", "VDR", "ECM", "CRD"],
      icon: <FaChartBar />,
      submenu: [
        {
          title: 'Gestión comercial',
          auth: ["ADM", "UPD"],
          route: '/reportes/canal',
        },
        {
          title: 'PDV',
          auth: ["ADM", "UPD", "VDR", "CRD"],
          route: '/reportes/tienda',
        },
        {
          title: 'Zonas',
          auth: ["ADM", "UPD", "CRD"],
          route: '/reportes/coordinacion',
        },
        {
          title: 'E-commerce',
          auth: ["ADM", "UPD", "ECM"],
          route: '/ecommerce',
          
        },
      ]
    },
    {
      title: 'Administración',
      auth: ["ADM", "UPD"],
      icon: <FaDatabase />,
      submenu: [
        {
          title: 'Almacenes',
          auth: ["ADM", "UPD"],
          route: '/almacenes',
        },
        {
          title: 'Presupuestos',
          auth: ["ADM", "UPD"],
          route: '/presupuestos',
        },
        {
          title: 'Vendedores',
          auth: ["ADM", "UPD"],
          route: '/vendedores',
        },
        {
          title: 'Coordinación',
          auth: ["ADM", "UPD"],
          route: '/coordinacion',
        },
        {
          title: 'Grupos',
          auth: ["ADM", "UPD"],
          route: '/grupos',
        },
        {
          title: 'Canales',
          auth: ["ADM", "UPD"],
          route: '/canales',
        },
        {
          title: 'Importar ventas',
          auth: ["ADM", "UPD"],
          route: '/ventas/importar',
        },
        {
          title: 'Importar inventario',
          auth: ["ADM", "UPD"],
          route: '/inventario/importar',
        },
      ]
    },
    {
      title: 'Ajustes',
      auth: ["ADM", "UPD"],
      icon: <FaCogs />,
      submenu: [
        {
          title: 'Usuarios',
          auth: ["ADM", "UPD"],
          route: '/usuarios'
        },
        {
          title: 'Roles',
          auth: ["ADM", "UPD"],
          route: '/roles'
        },
      ]
    },
    {
      title: 'Mi cuenta',
      auth: ["ADM", "UPD", "VDR", "ECM", "CRD"],
      icon: <FaUser />,
      submenu: [
        {
          title: 'Cerrar sesión',
          auth: ["ADM", "UPD", "VDR", "ECM", "CRD"],
          route: '/login',
          icon: <FaDoorClosed />
        }
      ]
    }
  ]

  const {colorApp} = useStateContext();

  const menuItemStyles= {
    [`.${menuClasses.menuItemRoot}`]: {
      backgroundColor: '#322e6d'
    },
    [`.${menuClasses.button}`]: {
      backgroundColor: colorApp,
      color: '#fff',
      '&:hover': {
        backgroundColor: colorApp,
        filter: 'brightness(.9)'
      }
    },
  }

  return (
    <div className='flex h-full relative'>
      <button onClick={() => collapseSidebar()} className='hidden absolute right-0 z-[4] bg-white ring ring-gray-300 rounded-full p-2 md:flex justify-center items-center translate-x-[50%] translate-y-[50%]'>
          <FaAngleRight className={`${!collapsed && 'rotate-180'} transition-all duration-300`}/>
      </button>
      <SB backgroundColor={colorApp} rootStyles={menuItemStyles} defaultCollapsed>
        <Menu>
            <MenuItem component={<Link to={routeServer} />} icon={<FaHome />}>
              <img src="https://unicentrodearmenia.com/wp-content/uploads/2016/06/ragged-logo.png" alt="LOGO" className='py-1'/>
            </MenuItem>
            {menu.map((nav, index) => (
              <>
              {nav.auth.includes(roleCode) && (
                <Fragment key={index}>
                {!nav.submenu ? (
                    <MenuItem component={<Link to={routeServer+nav.route} />} icon={nav.icon}>
                      {nav.title}
                    </MenuItem>
                ) : (
                  <SubMenu label={nav.title} icon={nav.icon}>
                    {nav.submenu.map((sub, index) => (
                      <>
                        {sub.auth.includes(roleCode) && (
                          <MenuItem key={index} component={<Link to={routeServer+sub.route} />} icon={sub.icon}> {sub.title}</MenuItem>
                        )}
                      </>
                    ))}
                  </SubMenu>
                )}
                </Fragment>
              )}
              </>
            ))}
        </Menu>
      </SB>
    </div>
  )
}

export default Sidebar