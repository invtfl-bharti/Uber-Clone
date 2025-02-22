import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setWaitingForDriver(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>


      <div className="flex justify-between items-center flex-col gap-2">
        {/* <img
          className="h-20"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
        /> */}

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
        {/* <button
          onClick={() => {
            props.setVehicleFound(true);
          }}
          className="bg-green-600 w-full p-2 font-semibold rounded-md text-white text-xl mt-5"
        >
          Confirm
        </button> */}
      </div>
    </div>
  );
}

export default WaitingForDriver
