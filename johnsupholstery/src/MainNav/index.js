import React from 'react'
import {Link} from 'react-router-dom'
import {routes} from '../index'

class MainNav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            routes: routes
        }
    }
    render(){
        return(
            <section>
                <ul>
                    {
                        this.state.routes.map((route) => {
                            return (
                                <li key={route.name}><Link to={route.path}>{route.name}</Link></li>
                            )
                        })
                    }
                </ul>
            </section>
        )
    }
}

export default MainNav;