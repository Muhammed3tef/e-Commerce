import React, { useContext, useEffect, useState } from "react";
import style from "./Allorders.module.css";
import axios from "axios";
import { CartContext } from "../../Context/CartContext";

export default function Allorders() {
  const [allOrders, setAllOrders] = useState([]);
  let { cartId } = useContext(CartContext);

  async function getAllOrders() {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/orders/`
    );
    console.log(data.data);
    setAllOrders(data.data);
  }

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <>
      {/* {allOrders.map((order) => (
        <div key={order.id}>
          <div className="row">
          {order.cartItems.map((item) => (
            <div key={item._id}>
              <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/6 ">
                <div className="">
                  <img src={item.product.imageCover} className="w-full md:object-cover object-contain" alt="" />
                  <h3 className="mb-1  font-semibold mt-4 text-center"></h3>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      ))} */}

      <div className="row">
        {allOrders.map((order) => (
          <div key={order.id} className="w-full  md:w-1/2 lg:w-1/4 xl:w-1/6">
            {order.cartItems.map((item) => <div key={item._id} className="product p-3 my-2">
                <img src={item.product.imageCover} className="w-full" alt="" />
                <h3 className=" text-emerald-600 py-1">
                  {item.product.category.name}
                </h3>
                <h3 className="mb-1 font-semibold ">
                  {item.product.title.split(" ").slice(0, 2).join(" ")}
                </h3>
                <div className="flex justify-between p-3">
                  <span>{item.price} EGP</span>
                  <span>
                    <i className="fas fa-star text-yellow-500"></i>
                    {item.product.ratingsAverage}
                  </span>
                </div>
            </div>)}
          </div>
        ))}
      </div>
    </>
  );
}
