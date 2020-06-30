import React, { Component } from "react";
import MainNav from '../MainNav'
import Form from '../Form/index.js'
import Map from '../Map/index.js'

const Contact = (props) => {

  const blank = {
    fullName: '',
    phoneNumber: '',
    email: '',
    message: ''
  }

  const handleCreate = async (data) => {
    const response = await fetch('http://localhost:8000/johnsupholstery', {
        method: 'POST',
        body: JSON.stringify(data)
    })
  }

  return (
    <div className="wrapper">
      <div className='Main'>
        <div className='Main_title'>
          <MainNav />
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className='form'>
        <Form initial={blank} handleSubmit = {handleCreate} />
      </div>
      <div className='reviews'>

      </div>
      <Map />
    </div>
  )
}

export default Contact;