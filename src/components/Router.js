import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from '../App';
import GifOne from './GifOne';




class Router extends Component {
   
    render() { 
        return ( 
            <BrowserRouter>
             <Switch>
                <Route path = '/' component={App} exact />
                <Route path = "/gif/:id" component={GifOne} />
             </Switch>
            </BrowserRouter>
        );
    }
}
 
export default Router;