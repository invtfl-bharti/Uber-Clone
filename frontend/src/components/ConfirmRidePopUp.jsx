import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = () => {
  const [otp, setOtp] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-[95%]">
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setVehiclePanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Confirm this Ride to Start
      </h3>

      <div className="flex justify-between items-center flex-col gap-2">
        <img
          className="h-20"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
        />

        <div className="w-full">
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

            <div className="mt-4">
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
        </div>

        <div className="mt-6">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              onChange={(e) => {
                setOtp(e.target.value);
              }}
              value={otp}
              type="text"
              placeholder="Enter OTP"
              className="bg-[#eee] px-12 py-2 text-lg rounded-md text-center"
            />
            <Link
              to="/captain-riding"
              className="w-full mt-5 p-2 flex justify-center items-center bg-green-600 text-white rounded-md text-xl font-semibold"
            >
              Confirm
            </Link>
            <button
              onClick={() => {
                props.setConfirmRidePopUpPanel(false);
                props.setRidePopUpPanel(false);
              }}
              className="bg-red-600 w-full p-2 font-semibold rounded-md text-white text-xl mt-5"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
