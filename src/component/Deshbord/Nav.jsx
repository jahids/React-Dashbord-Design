import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className=' bg-slate-100 pt-5 pb-5 '>
        <div class="navbar bg-white rounded-lg container mx-auto  ">
        <div class="flex-1">
          <h2 className="text-gray-600  text-xl sm:text-xl md:text-xl lg:text-xl xl: text-xl  text-sm block font-semibold ">
            ABC Behavarial Therapy
          </h2>
        </div>
        <div class="flex-none">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="">
              <div class="indicator">
              <Link
                  className=" btn text-sm btn-sm bg-gradient-to-r from-blue-400 to-blue-300  font-semibold drop-shadow-md  border-none"
                  to="/"
                >
                  Home
                </Link>

                <Link
                  className=" btn text-sm btn-sm bg-gradient-to-r from-blue-400 to-blue-300 mx-3 font-semibold drop-shadow-md  border-none"
                  to="/batching"
                >
                  Batching
                </Link>
              </div>
            </label>
          </div>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10  rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
          </div>
        </div>
      </div>
      </div>
    );
};

export default Nav;