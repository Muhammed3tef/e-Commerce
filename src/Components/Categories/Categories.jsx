import React, { useEffect, useState } from "react";
import style from "./Categories.module.css";
import axios, { all } from "axios";
import { Link } from "react-router-dom";

export default function Categories() {
  const [allCategories, setallCategories] = useState([]);

  async function getAllCategories() {
    let response = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/categories`
    );

    setallCategories(response.data.data);
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      {allCategories.length > 0 ? (
        <div className="row ">
          {allCategories?.map((category) => (
            <div
              key={category._id}
              className="w-full md:w-1/3 lg:w-1/4 xl:w-1/6 app"
            >
              <div className="product p-3 my-2 ">
                
                  <img
                    src={category?.image}
                    className="w-full h-[200px]  md:object-cover object-contain"
                    alt=""
                  />
                
                <h3 className="mb-1  font-semibold mt-4 text-center">
                  {category?.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <i className="loader md:mt-72 mt-60"></i>
      )}
    </>
  );
}
