import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <div className="h-[95%]">
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
      >
              <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Finish this Ride to Start</h3>

      <div className="flex justify-between items-center bg-yellow-400 p-2 rounded-xl">
        <div className="flex justify-start items-center gap-2 ">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://images.generated.photos/-PGxquAoUIGhdbbI8OnqHXNy8VXJ16Af-8N7di3H4X4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Nzg4OTE3LmpwZw.jpg"
            alt=""
            srcset=""
          />
          <h3 className="text-lg font-semibold">Harsh Patel</h3>
        </div>
        <h5 className="font-semibold">2.2KM</h5>
      </div>

      <div className="flex justify-between items-center flex-col gap-2">
        <div className="w-full mt-5">
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
          <Link
            to="/captain-home"
            className="bg-green-500 text-white px-7 py-3 text-xl font-semibold rounded-xl w-full"
          >
            Finish Ride
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
