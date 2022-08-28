import { Slider } from "@mui/material";
import React from "react";
import data from "../data";
import Carusel from "./Carusel";
import "./header.css";
import ProductCart from "./ProductCart";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import dataProduct from "./dataProdoct";

const dataItem = data.prodactData;
console.log(dataItem);
export default function () {

    const options = dataProduct.map((option) => {
      const firstLetter = option.title[0].toUpperCase();
      return {
        firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
        ...option,
      };
    });

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="logo">
            <h3>FastFood</h3>
            <div>
              <Autocomplete
                id="grouped-demo"
                options={options.sort(
                  (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                )}
                groupBy={(option) => option.firstLetter}
                getOptionLabel={(option) => option.title}
                sx={{ width: 600 }}
                renderInput={(params) => (
                  <TextField {...params} label="What are you looking for...." />
                )}
              />
            </div>
            <div className="iconc__group">
              <div className="search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="korzina">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="slider">
            <Carusel />
          </div>
          <div className="categories">
            <div className="flex">
              <h2>Find by Catigories</h2>
              <div>
                <Autocomplete
                  id="grouped-demo"
                  options={options.sort(
                    (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                  )}
                  groupBy={(option) => option.firstLetter}
                  getOptionLabel={(option) => option.title}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="See all" />
                  )}
                />
              </div>
            </div>

            <div className="line">
              {dataItem.map((product) => {
                return (
                  <div className="cart__item" key={product.id}>
                    <div className="cart">
                      <img src={product.img} alt="" />
                      <p>{product.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="result">
              <h2>Result</h2>
            </div>
          </div>

          <div className="flex__price">
            {dataItem.map((el) => {
              return (
                <ProductCart
                  id={el.id}
                  name={el.name}
                  img={el.img}
                  price={el.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
