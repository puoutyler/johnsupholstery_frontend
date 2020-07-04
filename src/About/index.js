import React, { Component } from "react";
import MainNav from '../MainNav'
import "../App/style.scss";

class Services extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className='hero3'>
            <div className='inner'>
                <h1>Services</h1>
                <ul className="services">
                    <li  className="card">
                        <img className='img-container' src="https://s3-media0.fl.yelpcdn.com/bphoto/pUmzk21s_hj_n99aePyFRw/o.jpg" alt=''/>
                        <span class="card-title">Commercial Services</span>
                        <p>Do you manage a hotel or resort? Since 1964 John’s has become a leader in hotel upholstery. We offer large volume upholstery and seamstress services, we understand the industry needs and requirements and commit our due diligence to our commercial clients from the bid process to billing.</p>
                    </li>
                        <li className='card'>
                            <img className='img-container' src="https://s3-media0.fl.yelpcdn.com/bphoto/ogkStPqY7_FauZWDZtO1SA/o.jpg" alt=''/>
                            <span class="card-title">Residential Services</span>
                            <p>We never forget our residential customers! They are the best and they are still coming in year after year. From day one our Kama’aina customers have been with us each step of the way. Some still ask for Big John, the original owner, but most are friends Ryan has made over the last 21 years. Whether it’s a sofa and a love seat or a single cushion, all are welcome.</p>
                        </li>
                    <li className='card'>
                        <img className='img-container' src="https://s3-media0.fl.yelpcdn.com/bphoto/fDBviZaRrh3BR8sLFi-1Jw/o.jpg" alt=''/>
                        <span class="card-title">Cushions, Cushions, and More Cushions!</span>
                        <p>Another staple of our business. From Auntie’s Pune’e to the Koa set you just (luckily) inherited from your mom and dad. We do it all. Any cushion size, any cushion shape, bring it in. Such a simple and cost-effective way to update an entire living room. Update your cushion covers to the latest and greatest colors and patterns or go more traditional for the that old-style Hawaiian feels.</p>
                    </li>
                </ul>
          </div>
        </section>
        <section className='side'>
                <div className='inner'>
                <MainNav />
                    <div className='clipper'>
                        <h2>Upholstery is the Cornerstone of Our Business!</h2>
                    </div>
                    <div className='anim-panel'>
                        <p className='side-p'>
                        From Grandma’s wing chair to Mom’s sectional or Uncle’s teak dining set, we’ve done it all. Simply send us a picture with some dimensions and we will get you a price then you decide! Reupholstering is a perfect way to pick your own fabric to coordinate with the way you are living your life today and to modernize and give life to that favorite piece.</p>
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
    )
  }
}

export default Services;