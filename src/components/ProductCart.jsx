import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

export default  function ProductCart({id,name,img,price}){  
  return (
        <Link to={`/products/${id-1}`}>
      <div className="cartLine">
                <div className="price__cart" key={id} >
                    <div className="cartBox" >
                    <img src={img} alt="" />
                    <div className='center'>
                    <h3>{name}</h3>
                    <div className='flex_price'>
                        <h3>${price}</h3>
                        <div className="iconc_korzin">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>
                    </div>
                    </div>
                     </div>      


    </div>
        </Link>
   
  )
}


