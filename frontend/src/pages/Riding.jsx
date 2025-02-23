import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to='/home' className="h-10 p-3 top-2 flex justify-center items-center w-10 bg-white rounded-full right-0 fixed">
        <i className=" text-2xl font-medium ri-home-4-line"></i>
      </Link>
      <img
        className="w-12 left-5 top-5 absolute object-cover"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />

        <div className="p-4">
          <div className="flex justify-between items-center">
            <img
              className="h-12"
              src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
            />
            <div className="text-right">
              <h2 className="text-lg font-medium">Rajesh Sharma</h2>
              <h4 className="text-xl font-semibold -mt-1 -mb-1">MP 04 5433</h4>
              <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
            </div>
          </div>
        </div>

        <div className="w-full p-4">
          <div className="flex items-center gap-4  border-b-2 border-gray-300">
            <i className="ri-map-pin-user-line"></i>
            <div>
              <h3 className="font-medium text-md">562/11-A </h3>
              <p className="text-sm text-gray-600 mb-2">
                Kaikon mahalli Bengaluru, Karnataka
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4  border-b-2 border-gray-300">
            <i className="ri-map-pin-2-fill"></i>

            <div className="mt-4 w-full">
              <h3 className="text-md font-medium">
                Third Wave Coffee 17th Cross Rd,
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                PWD Quarters, 1st Sector, HSR Layout, Bengaluru, Karnataka
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4 border-b-2 border-gray-300">
            <i className="ri-cash-line"></i>
            <p className="text-md font-semibold">
              ₹193.20 <br></br>
              <span className="text-md text-gray-600 mb-2">Cash</span>
            </p>
          </div>

          <div>
            <button className="bg-green-600  w-full  text-white font-semibold p-2 mt-5 rounded-lg px-4">
              Make Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Riding;
