import React from 'react'
import img from "../images/Без названия.jfif"
import "./header.css"
export default function 
() {
  return (
    <>
     <div className="header">

          <div className="container">
        <div className="logo">
   <h3>
     FastFood
   </h3>
   <div className="iconc__group">
     <div className="search">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
               <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
               </svg>
     </div>
     <div className="korzina">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
               </svg>
     </div>
   </div>


</div>

    <div className='title'>
      <h1>Let's find the best food around you</h1>
    </div>

   <div className="categories">
     <div className="flex">
     <h2>
       Find by Catigories
     </h2>
     <p>see all</p>
     </div>

     <div className="cart__item">
       <div className="cart">
         <img src={img} alt="" />
         <p>Pizza</p>
       </div>
       <div className="cart">
         <img src={img} alt="" />
         <p>Pizza</p>
       </div>
       <div className="cart">
         <img src={img} alt="" />
         <p>Pizza</p>
       </div>
       <div className="cart">
         <img src={img} alt="" />
         <p>Pizza</p>
       </div>
     </div>

     <div className="result">
       <h2>Result</h2>
     </div>
   </div>



   <div className="price__cart">
     <div className="cartBox">
       <img src={img} alt="" />
       <div className='center'>
       <h3>Supporo Misa</h3>
       <div className='flex_price'>
         <h3>$3.55</h3>
         <div className="iconc_korzin">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
               <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
             </svg>
         </div>

       </div>
       </div>
     </div>
     <div className="cartBox">
       <img src={img} alt="" />
       <div className='center'>
       <h3>Supporo Misa</h3>
       <div className='flex_price'>
       <h3>$3.55</h3>
         <div className="iconc_korzin">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
               <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
             </svg>
         </div>
       </div>     
       </div>
     </div>
     <div className="cartBox">
       <img src={img} alt="" />
       <div className='center'>
       <h3>Supporo Misa</h3>
       <div className='flex_price'>
       <h3>$3.55</h3>
         <div className="iconc_korzin">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
               <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
             </svg>
         </div>
       </div>     
       </div>
     </div>
     <div className="cartBox">
       <img src={img} alt="" />
       <div className='center'>
       <h3>Supporo Misa</h3>
       <div className='flex_price'>
       <h3>$3.55</h3>
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


    </div>

    </>
  )
}
