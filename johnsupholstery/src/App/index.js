/////////////////////////-*
//    IMPORTS
/////////////////////////-*
import React from "react";
import "./style.scss";
import MainNav from '../MainNav';
import Form from '../Form/index.js'


const App = (props) => {
    
    const handleCreate = async (data) => {
        const response = await fetch('http://localhost:8000/johnsupholstery', {
            method: 'POST',
            body: JSON.stringify(data)
        })
    }

    return(
        <div className='wrapper'>
            <MainNav />
            <div className='Main'>
                <div className='Main_text'>
                    <div className='Main_text_title'>
                        <h1>John's Upholstery</h1>
                    </div>
                    <div className='Main_text_panel'>
                        <p>Serving residential and commercial clients all throughout O'ahu for over 50 years!</p>
                    </div>
                </div>
            </div>
            <div className='Main_side'>
                <div className='Main_side_content'>
                    <div className='Main_side_content_title'>
                        <h2>Who we are</h2>
                    </div>
                    <div className='Main_side_content_text'>
                        <p>John’s Upholstery was started in 1964 by John Ambrose and has since become a leader in hotel and residential upholstery. Now run by his son, Ryan, and his daughter-in-law, here you'll find a husband-and-wife team committed to quality work and customer satisfaction. Whether you are looking to restore your favorite piece of furniture or need a custom-made piece for your business, John’s can work with you for all your upholstery needs.</p>
                    </div>
                </div>
            </div>
            <div className='Main_side_hours'>
                <div className='Main_side_hours_content'>
                    <p>John's Upholstery 46-138 Kahuhipa St Kaneohe, HI 96744</p>
                    <p>Call (808) 236-2218</p>
                    <p>Text (808)  271-2665</p>
                    <p>Hours: Mon-Fri: 8:30am-4:30pm | Sat-Sun: Closed</p>
                </div>
            </div>
        </div>
    )
}

export default App;
