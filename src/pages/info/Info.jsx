import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import "./info.scss"
import data from '../../data'
import {Link} from "react-router-dom"

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function Info() {
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
  
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
    <div className="cartInfo">
      <div className="container">
        <div className="boxes">
          <div className="box__left">
            <div className="children__img">
              <img src={mahsulot.img} alt="" />
              <img src={mahsulot.img} alt="" />
              <img src={mahsulot.img} alt="" />
            </div>
            <div className="parent__img">
              <img src={mahsulot.img} alt="" />
            </div>
          </div>
          <div className="box__right">
            <h1>{mahsulot.name}</h1>

            <p>Price: ${mahsulot.price}</p>
            <div>
              <label htmlFor="">Size:</label>
              <select name="" id="">
                <option value="">0.5</option>
                <option value="">1</option>
                <option value="">1.5</option>
              </select>
            </div>
            <div className="counter">
              <button className="minusBtn" onClick={() => decr()}>
                -
              </button>
              <p>{count > 0 ? count : 1}</p>
              <button className="plusBtn" onClick={() => incr()}>
                +
              </button>
            </div>

            <div className="totalPrice">
              <p>Total:${total > 0 ? total.toFixed(2) : mahsulot.price}</p>
            </div>

            <Button onClick={handleOpen} className="cartBtn">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add To Cart{" "}
            <span className='check'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Your selected product has been added to the cart
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
