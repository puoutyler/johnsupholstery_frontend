import React, { Component } from "react";
import MainNav from '../MainNav'
import Form from '../Form/index.js'
import Map from '../Map/index.js'
import "../App/style.scss";

const Contact = (props) => {

  const blank = {
    fullName: '',
    phoneNumber: '',
    email: '',
    message: ''
  }

  const handleCreate = async (data) => {
    const response = await fetch('http://localhost:3000/johnsupholstery', {
        method: 'POST',
        body: JSON.stringify(data)
    })
  }

  return (
    <div className="wrapper">
      <section className='hero2'>
        <div className='inner'>
          <h1 className='testi_title'>Contact Us</h1>
          <div className='testimonials'>
        <div className='testimonials_container'>
          <h1>Testimonials</h1>
          <p>Read more on <a href='https://www.yelp.com/biz/johns-furniture-upholstery-kaneohe'>Yelp</a></p>
          <div className='profiles'>
            <img src='.../public/img/testimonial1.png' />
            <p>AMAZING!! I emailed the pictures of the job mid week, they picked up my 8 Nautica dining chairs on a Thursday. I brought them the fabric on Friday, on Tuesday they called, it's all done. I could not get this service on the mainland. They were friendly, professional and FAST! My most amazing customer service experience since moving here. These people ROCK</p>
            <h3>Rob B. - Kaneohe</h3>
          </div>
          <div className='profiles'>
            <img src='.../public/img/testimonial2.png'/>
            <p>John's Upholstery rocks!! Quality work and reasonable prices.We had four painted rattan chairs whose original cushions and cloth seat covers were cheap to start with...I only took in the seat portions to save the hassle of transporting and carrying the actual chairs.We spray painted the painted rattan chairs to freshen them up while were were waiting for the seat covers.Looked better than new with the new seats. We were so happy. 5 Stars for great work at low cost.</p>
            <h3>Vince B. - Kaneohe</h3>
          </div>
          <div className='profiles'>
            <img src='.../public/img/testimonial3.png'/>
            <p>Good honest business, even willing to give advice that saves a customer money even though this meant directing business away to another establishment. That is true customer service.  Mahalo nui again.</p>
            <h3>Ji f. - Kailua</h3>
          </div>
        </div>

      </div>
        </div>
      </section>
      <section className='side'>
        <MainNav />
        <Form initial={blank} handleSubmit = {handleCreate} className='form' />
      </section>
      <section className='hours'>
        <Map />
      </section>
    </div>
  )
}

export default Contact;