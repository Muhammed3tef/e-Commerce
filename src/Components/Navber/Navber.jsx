import React, { useContext, useState } from "react";
import style from "./Navber.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/freshcart-logo.svg";
import { UserContext } from "../../Context/UserContext";
import { CartContext } from "../../Context/CartContext";
import { Button, Navbar } from "flowbite-react";

export default function Navber() {
  const { numberItems } = useContext(CartContext);
  const { userLogin, setuserLogin } = useContext(UserContext);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  function signout() {
    localStorage.removeItem("userToken");
    setuserLogin(null);
    navigate("/login");
  }

  function toggleNav() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <>
      {/* <nav className="border-gray-200 px-6 bg-slate-300 fixed left-0 right-0 top-0">
        <div className="max-w-screen-xl flex flex-wrap items-center md:justify-normal justify-between p-2 mx-auto py-3">
          <Link to="" className="flex items-center pb-1 space-x-3 rtl:space-x-reverse">
            <img src={logo} width={"110px"} className="h-8 me-3" alt="Flowbite Logo" />
          </Link>
          <button
            onClick={toggleNav}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isNavOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div
            className={`${
              isNavOpen ? "block" : "hidden"
            } w-full md:block md:w-auto relative md:top-1`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col text-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-5 rtl:space-x-reverse md:mt-0 md:border-0 text-white">
              {userLogin != null ? (
                <>
                  <li>
                    <NavLink to="" className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                      <i className="fas fa-home text-emerald-600"></i> Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="cart" className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                      Cart
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="products" className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                      Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="categories" className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                      Categories
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="brands" className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                      Brands
                    </NavLink>
                  </li>
                </>
              ) : null}
              {userLogin == null ? (
                <>
                  <div className="md:flex items-center space-x-6 rtl:space-x-reverse relative bottom-[2px] md:left-[950px]">
                    {userLogin != null ? (
                      <>
                        <div className="icons flex my-3 md:my-[-5px] gap-3 justify-center">
                          <Link to={`/cart`}>
                            <i className="fa-solid fa-cart-shopping relative cursor-pointer">
                              <span className="absolute top-[-15px] right-[-12px] text-white size-5 bg-red-600 rounded-full flex items-center justify-center text-[12px]">
                                {numberItems}
                              </span>
                            </i>
                          </Link>
                          <i className="fab fa-facebook text-black"></i>
                          <i className="fab fa-linkedin text-black"></i>
                          <i className="fab fa-youtube text-black"></i>
                          <i className="fab fa-tiktok text-black"></i>
                          <i className="fab fa-twitter text-black"></i>
                        </div>
                      </>
                    ) : null}
                    <div className="links flex gap-3">
                      {userLogin != null ? (
                        <span onClick={signout} className="text-sm cursor-pointer btn">
                          SignOut
                        </span>
                      ) : (
                        <>
                          <NavLink to="login" className="text-sm btn">
                            Login
                          </NavLink>
                          <NavLink to="register" className="text-sm btn">
                            Register
                          </NavLink>
                        </>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="md:flex items-center space-x-6 rtl:space-x-reverse relative bottom-[2px] md:left-[500px]">
                    <div className="icons flex my-3 md:my-[-5px] gap-3 justify-center">
                      <Link to={`/cart`}>
                        <i className="fa-solid fa-cart-shopping hover:text-emerald-500 transition-all relative cursor-pointer">
                          <span className="absolute top-[-15px] right-[-12px] text-white size-5 bg-red-600 rounded-full flex items-center justify-center text-[12px]">
                            {numberItems}
                          </span>
                        </i>
                      </Link>
                      <i className="fab fa-facebook text-black hover:text-blue-600 cursor-pointer transition-all"></i>
                      <i className="fab fa-linkedin text-black hover:text-blue-600 cursor-pointer transition-all"></i>
                      <i className="fab fa-youtube text-black hover:text-red-600 cursor-pointer transition-all"></i>
                      <i className="fab fa-tiktok text-black hover:text-black cursor-pointer transition-all"></i>
                      <i className="fab fa-twitter text-black hover:text-blue-400 cursor-pointer transition-all"></i>
                    </div>
                    <div className="links flex gap-3">
                      {userLogin != null ? (
                        <span onClick={signout} className="text-sm cursor-pointer btn">
                          SignOut
                        </span>
                      ) : (
                        <>
                          <NavLink to="login" className="text-sm btn">
                            Login
                          </NavLink>
                          <NavLink to="register" className="text-sm btn">
                            Register
                          </NavLink>
                        </>
                      )}
                    </div>
                  </div>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav> */}


<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
}
