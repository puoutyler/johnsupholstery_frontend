import React, { Component } from "react";
import MainNav from '../MainNav'
import "../App/style.scss";

class Services extends Component {
  render() {
    return (
      <>
      <head>
        <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
      </head>
      <div className="wrapper">
        <div className='Main'>
          <div className='Main_title'>
            <MainNav />
            <h1>Services</h1>
          </div>
        </div>
          <ul className="App_row">
            <div className='card small' id='cards'>
              <li>
                <div class="card-image">
                  <img src="#"/>
                  <span class="card-title">Commercial Services</span>
                </div>
                <div class="card-content">
                  <p>Do you manage a hotel or resort? Since 1964 John’s has become a leader in hotel upholstery. We offer large volume upholstery and seamstress services, we understand the industry needs and requirements and commit our due diligence to our commercial clients from the bid process to billing.</p>
                </div>
              </li>
            </div>
            <div className='card' id='cards'>
                <li>
                  <div class="card-image">
                    <img src="#"/>
                    <span class="card-title">Residential Services</span>
                  </div>
                  <div class="card-content">
                    <p>We never forget our residential customers! They are the best and they are still coming in year after year. From day one our Kama’aina customers have been with us each step of the way. Some still ask for Big John, the original owner, but most are friends Ryan has made over the last 21 years. Whether it’s a sofa and a love seat or a single cushion, all are welcome.</p>
                  </div>
                </li>
            </div>
            <div className='card' id='cards'>
              <li>
                <div class="card-image">
                  <img src="#"/>
                  <span class="card-title">Modern Customization</span>
                </div>
                <div class="card-content">
                  <p>Do you want the latest style for your home but can't afford new furniture? We can expertly reupholster your sofa, chairs and other furniture pieces for a very affordable price. Choose from our designer fabrics and find a look that brings a fresh new update to your home without breaking the bank.</p>
                </div>
              </li>
            </div>
            <div className='card' id='cards'>
              <li>
                <div class="card-image">
                  <img src="#"/>
                  <span class="card-title">Cushions, Cushions, and More Cushions!</span>
                </div>
                <div class="card-content">
                  <p>Another staple of our business. From Auntie’s Pune’e to the Koa set you just (luckily) inherited from your mom and dad. We do it all. Any cushion size, any cushion shape, bring it in. Such a simple and cost-effective way to update an entire living room. Update your cushion covers to the latest and greatest colors and patterns or go more traditional for the that old-style Hawaiian feels.</p>
                </div>
              </li>
            </div>
          </ul>
        </div>
          <script type="text/javascript" src="js/materialize.min.js"></script>
      </>
    )
  }
}

export default Services;