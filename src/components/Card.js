import React, { useEffect, useRef, useState } from "react";
import { useCartDis, useCart } from "./Context-Reducer";

export default function Card(props) {
  let dispatch = useCartDis();
  let data = useCart()
  const priceRef = useRef()
  let options = props.options;
  let qOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleAddtoCart = async () => {
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price:finalprice,
      img: props.foodItem.img,
      qty: qty,
      size: size,
    });
    console.log(data)
  };
  let finalprice = qty* parseInt(options[size])
  useEffect(()=>{
    setSize(priceRef.current.value)

  },[])

  return (
    <div>
      <div
        className="card mt-3 "
        style={{ width: "18rem", maxHeight: "360px" }}
      >
        <img
          src={props.foodItem.img}
          className="card-img-top"
          alt="..."
          style={{ height: "150px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          {/* <p className="card-text"> {props.descriptions} </p> */}
          <div className="continer w-100">
            <select className="m-2 h-100 bg-success rounded " onChange={(e)=> setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded " ref={priceRef} onChange={(e)=> setSize(e.target.value)}>
              {qOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>

            <div className="fs-5 d-inline h-100">₹{finalprice}/-</div>
          </div>
          <hr></hr>
          <button
            className={"btn btn-success justify-center m-2"}
            onClick={handleAddtoCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
