import React from 'react'
import "./contact.css"

export default function 
() {
  return (
    <div className='contact_page'>
       <div className="container">
          <h1>Contact Us</h1>
        <form action="">
          <label htmlFor="">FirsName</label>
          <input type="text" placeholder='FirsName' />
          <label htmlFor="">LastName</label>
          <input type="text" placeholder='LastName' />
          <label htmlFor="">Email</label>
          <input type="email" placeholder='Email' />

          <textarea name="" id="" cols="30" rows="10" placeholder='massage'>

          </textarea>
        </form>
          <button className='formBtn'>Submit</button>
       </div>
    </div>
  )
}
