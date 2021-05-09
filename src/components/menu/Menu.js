import React from 'react'
import {NavLink} from 'react-router-dom'
export const Menu = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            
            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/home"
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/listar"
                    >
                        Listar
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/agregar"
                    >
                        Agregar
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/acercade"
                    >
                        SobreNosotros
                    </NavLink>
                </div>
            </div>

           
        </nav>
    )
}
