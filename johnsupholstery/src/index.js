import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Switch} from "react-router"
import { createBrowserHistory } from "history"

import App from "./App";
import Contact from "./Contact";
import Services from "./About"

const routes = [
    {
        path:"/",
        exact: true,
        component: App,
        name: "Home"
    },
    {
        path:"/contact-us",
        component: Contact,
        name: "Contact Us"
    },
    {
        path:"/services",
        component: Services,
        name: "Services"
    },
]

const root = document.getElementById('root');
let hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            {
                routes.map((route) => {
                    return(
                        <Route 
                            exact={route.exact}
                            path={route.path} 
                            component={route.component}
                            key={route.name}
                        ></Route>
                    )
                })
            }
        </Switch>
    </Router>, root
);

export {
    routes
}
