import React from 'react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({}); 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <div>
        <div className='black-contact'>
            <h1>Drive with <span> UNIQUE </span> Today</h1>
            <p>Get th app to explore the world of premium</p>
            <p>cars - thats exciting!!!</p>
            <button>Download Now</button>
        </div>
        <div className='white-contact'>
            <div className='terms'>
              <p>Terms</p>
              <p>Privacy</p>
            </div>
            <div className='foot-nav'>
              <ul>
                <li>About US</li>
                <li>Cars</li>
                <li>Features</li>
                <li>Help</li>
              </ul>
            </div>
            <div className='Susbscribe'>
              <h3>Subscirbe to News</h3>
              <form action="">
                <input type="email" placeholder='Your e-mail here' className='formm' id='email' onChange={handleChange} />
              </form>
              <h3>UNIQUE</h3>
            </div>
        </div>
    </div>
  )
}
