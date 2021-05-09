import React from 'react';
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom';
import { Acercade } from '../Acercade';
import { Agregar } from '../Agregar';
import { Editar } from '../Editar';
import { Home } from '../Home';
import { Listar } from '../Listar';
import { Menu } from './Menu';

export const RouterApp = () => {
    return (
        <div>
            <Router>
                <Menu/>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/listar" component={Listar}/>
                    <Route exact path="/agregar" component={Agregar}/>
                    <Route exact path="/acercade" component={Acercade}/>
                    <Route exact path="/editar/:id/nombre/:nombre/apellido/:apellido" 
                    component={Editar}/>
                </Switch>
            </Router>
        </div>
    )
}
