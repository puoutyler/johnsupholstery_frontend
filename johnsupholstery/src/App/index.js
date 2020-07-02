/////////////////////////-*
//    IMPORTS
/////////////////////////-*
import React from "react";
import "./style.scss";
import MainNav from '../MainNav';
import Form from '../Form/index.js'


const App = (props) => {
    
    const handleCreate = async (data) => {
        const response = await fetch('http://localhost:3000/johnsupholstery', {
            method: 'POST',
            body: JSON.stringify(data)
        })
    }

    return(
        <>
        <div className='wrapper'>
            <section className='hero'>
                <div className='inner-main'>
                    <div className='clipper'>
                        <h1 className='title'>John's Upholstery</h1>
                    </div>
                    <div className='anim-panel'>
                        <p className='main-p'>Family owned and proudly serving residential and commercial clients throughout O'ahu for over 50 years!</p>
                    </div>
                </div>
            </section>
            <section className='side'>
                <div className='inner'>
                <MainNav />
                    <div className='clipper'>
                        <h2>Who we are</h2>
                    </div>
                    <div className='anim-panel'>
                        <p className='side-p'>John’s Upholstery was started in 1964 by John Ambrose and has since become a leader in hotel and residential upholstery. Now run by his son, Ryan, and his daughter-in-law, here you'll find a husband-and-wife team committed to quality work and customer satisfaction. Whether you are looking to restore your favorite piece of furniture or need a custom-made piece for your business, John’s can work with you for all your upholstery needs.</p>
                    </div>
                </div>
            </section>
            <section className='hours'>
                <div className='hours_content'>
                    <p className='hours-p'>John's Upholstery 46-138 Kahuhipa St Kaneohe, HI 96744</p>
                    <p className='hours-p'>Call (808) 236-2218</p>
                    <p className='hours-p'>Text (808)  271-2665</p>
                    <p className='hours-p'>Hours: Mon-Fri: 8:30am-4:30pm | Sat-Sun: Closed</p>
                </div>
            </section>
        </div>
        </>
    )
}

export default App;
