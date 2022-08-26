import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import "./info.scss"
import data from '../../data'

export default function Info() {
  const params = useParams()
  console.log(params);

  const mahsulot = data.prodactData[params.productId]

  console.log(mahsulot);

  const [count, setCount] = useState(1)
  const total = count * mahsulot.price;
  function incr(){
    setCount(count +1)
  }
  function decr(){
    setCount(count -1)
  }

  
  return (
    <div className='cartInfo'>
      <div className="container">
        <div className='boxes'>
            <div className='box__left'>
             <div className='children__img'>
              <img src={mahsulot.img} alt="" />
              <img src={mahsulot.img} alt="" />
              <img src={mahsulot.img} alt="" />            
             </div>
             <div className='parent__img'>
              <img src={mahsulot.img} alt="" />
             </div>
            </div>
            <div className='box__right'>
              <h1>{mahsulot.name}</h1>
             
              <p>Price:  ${mahsulot.price}</p>
              <div>
                <label htmlFor="">Size:</label>
              <select name="" id="">
                <option value="">0.5</option>
                <option value="">1</option>
                <option value="">1.5</option>
              </select>

              </div>
              <div className='counter'>
                <button className='minusBtn' onClick={()=>decr() }>-</button>
                <p>{count > 0 ? count : 1}</p>
                <button className='plusBtn' onClick={()=>incr()}>+</button>
              </div>

              <div className='totalPrice'>
                <p>Total:${total >0  ? total.toFixed(2) : mahsulot.price}</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
