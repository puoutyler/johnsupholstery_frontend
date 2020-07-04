import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Switch} from "react-router"
import { createBrowserHistory } from "history"
import {routes} from './routes.js';


const root = document.getElementById('root');
let hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            {
                routes.map((route) => {
                    return(
                        <Route
                            path={route.path}
                            component={route.component}
                            key={route.name}
                        />
                    )
                })
            }
        </Switch>
    </Router>, root
);

export {
    routes
}
