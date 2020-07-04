import React from 'react'
import {Link} from 'react-router-dom'
import {routes} from '../routes'
import "../App/style.scss";

class MainNav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            routes: routes
        }
        console.log(routes)
    }
    render(){
        return(
            <section className='header'>
                <nav>
                    <ul className='nav'>
                        {
                            this.state.routes.map((route) => {
                                return (
                                    <li key={route.name}><Link className='link' to={route.path}>{route.name}</Link></li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </section>
        )
    }
}

export default MainNav;
