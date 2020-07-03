import React, { Component } from "react";
import MainNav from '../MainNav'
import Form from '../Form/index.js'
import Map from '../Map/index.js'
import "../App/style.scss";
import Testimonials from "../Carousel/index.js";

const Contact = (props) => {

  const [contact, setContact] = React.useState(null)

  const blank = {
    fullName: '',
    phoneNumber: '',
    email: '',
    message: ''
  }


  const handleCreate = async (data) => {
    const response = await fetch('http://localhost:8000/johnsupholstery/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    console.log(response)
  }

  return (
    <div className="wrapper">
      <section className='hero2'>
        <div className='inner'>
        <div className='testimonials'>
          <div className='testimonials_container'>
            <h1>Testimonials</h1>
            <p>Read more on <a href='https://www.yelp.com/biz/johns-furniture-upholstery-kaneohe'>Yelp</a></p>
            <Testimonials />
          </div>
          </div>
        </div>
      </section>
      <section className='side'>
        <MainNav />
        <h1 className='testi_title'>Contact Us</h1>
        <p className='contact-p'>Just enter your name, email, and provide a phone number in your message. We will get back to you right away!</p>
        <Form initial={blank} handleSubmit = {handleCreate} className='form' />
      </section>
      <section className='hours'>
        <Map />
      </section>
    </div>
  )
}

export default Contact;