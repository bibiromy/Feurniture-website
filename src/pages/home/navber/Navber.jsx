import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { PiShoppingCartThin } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
const Navber = () => {
    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white  text-sm py-6 ">
  <nav className="relative max-w-[85rem] w-full mx-auto px-14 sm:flex sm:items-center sm:justify-between " aria-label="Global">
    <div className="flex items-center justify-between">
      <a className="flex-none text-3xl font-bold text-black" href="#" aria-label="Brand">A U R O S 
      <span className='text-orange-500'> .</span></a>
      <div className="sm:hidden">
        <button type="button" className="hs-collapse-toggle w-9 h-9 flex justify-center items-center  font-semibold rounded-lg  text-gray-800 text-2xl disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
        <FiMenu />
        </button>
      </div>
    </div>
    <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
      <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
        
        

        <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
          <button type="button" className="flex items-center w-full text-black border-b-4 border-orange-200 px-2 font-medium  ">
            Home
            <svg className="flex-shrink-0 ms-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>

          <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white  p-2  dark:divide-gray-700 before:absolute top-full  before:-top-5 before:start-0 before:w-full before:h-5">
            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400
            hover:text-orange-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              About
            </a>
            <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">



              <button type="button" className=" w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400
            hover:text-orange-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Sub Menu

              </button>

             
            </div>

            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400
            hover:text-orange-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Downloads
            </a>
            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400
            hover:text-orange-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Team Account
            </a>
          </div>
        </div>
        <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
          <button type="button" className="flex items-center hover:border-b-4  hover:border-orange-200 px-3 pb-[3px] hover:pb-0 w-full text-black font-medium  ">
            Shop
            <svg className="flex-shrink-0 ms-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>

          <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white  p-2  dark:divide-gray-700 before:absolute top-full  before:-top-5 before:start-0 before:w-full before:h-5">
            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400
            hover:text-orange-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              About
            </a>
            <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">



              <button type="button" className=" w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400
            hover:text-orange-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Sub Menu

              </button>

             
            </div>

            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400
            hover:text-orange-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Downloads
            </a>
            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400
            hover:text-orange-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Team Account
            </a>
          </div>
        </div>


        <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
          <button type="button" className="flex items-center hover:border-b-4  hover:border-orange-200 px-3 pb-[3px] hover:pb-0 w-full text-black font-medium  ">
            Product
            <svg className="flex-shrink-0 ms-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>

          <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white  p-2  dark:divide-gray-700 before:absolute top-full  before:-top-5 before:start-0 before:w-full before:h-5">
            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400
            hover:text-orange-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              About
            </a>
            <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">



              <button type="button" className=" w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400
            hover:text-orange-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Sub Menu

              </button>

             
            </div>

            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400
            hover:text-orange-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Downloads
            </a>
            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400
            hover:text-orange-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Team Account
            </a>
          </div>
        </div>



        <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
          <button type="button" className="flex items-center hover:border-b-4  hover:border-orange-200 px-3 pb-[3px] hover:pb-0 w-full text-black font-medium  ">
            Blog
            <svg className="flex-shrink-0 ms-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>

          <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white  p-2  dark:divide-gray-700 before:absolute top-full  before:-top-5 before:start-0 before:w-full before:h-5">
            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400
            hover:text-orange-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              About
            </a>
            <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">



              <button type="button" className=" w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400
            hover:text-orange-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Sub Menu

              </button>

             
            </div>

            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400
            hover:text-orange-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Downloads
            </a>
            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400
            hover:text-orange-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Team Account
            </a>
          </div>
        </div>

        <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
          <button type="button" className="flex items-center hover:border-b-4  hover:border-orange-200 px-3 pb-[3px] hover:pb-0 w-full text-black font-medium  ">
            Page
            <svg className="flex-shrink-0 ms-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>

          <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white  p-2  dark:divide-gray-700 before:absolute top-full  before:-top-5 before:start-0 before:w-full before:h-5">
            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400
            hover:text-orange-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              About
            </a>
            <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">



              <button type="button" className=" w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400
            hover:text-orange-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Sub Menu

              </button>

             
            </div>

            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400
            hover:text-orange-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Downloads
            </a>
            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400
            hover:text-orange-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Team Account
            </a>
          </div>
        </div>

        <a className="font-medium text-black hover:border-b-4  hover:border-orange-200 px-3 pb-[3px] hover:pb-0 " href="#">Contact</a>

        <div className="flex items-center gap-x-5 sm:ms-auto text-xl">
        <IoIosSearch />
        <IoPersonOutline />
        <PiShoppingCartThin />
        </div>



      </div>
    </div>
  </nav>
</header>
    );
};

export default Navber;