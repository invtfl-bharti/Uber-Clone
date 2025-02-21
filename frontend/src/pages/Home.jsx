import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setPanelOpen(!panelOpen);
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 20,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translate(100%)",
        });
      }
    },
    [vehiclePanel]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Uber Logo */}
      <img
        className="w-12 left-5 top-5 absolute"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />

      <div className="h-screen w-screen">
        {/* image for temporary use  */}
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Background"
        />
      </div>

      {/* Form and Animated Panel */}
      <div className=" w-full absolute top-0 flex flex-col h-screen justify-end">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute top-6 right-3 opacity-0 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form
            className="relative py-3"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              className="text-base py-2 bg-[#eee] px-12 rounded-lg w-full mb-4 mt-4"
              placeholder="Add a pickup location"
              type="text"
              value={pickup}
              // onChange={(e) => setPickup(e.target.value)}
            />

            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              className="text-base py-2 bg-[#eee] px-12 rounded-lg w-full mb-4"
              placeholder="Enter your destination"
              type="text"
              value={destination}
              // onChange={(e) => setDestination(e.target.value)}
            />
          </form>
        </div>

        {/* GSAP Animated Panel */}
        <div ref={panelRef} className="bg-white p-5 h-0">
          <LocationSearchPanel
            setVehiclePanel={setVehiclePanel}
            setPanelOpen={setPanelOpen}
            setPickup={setPickup}
            setDestination={setDestination}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 translate-y-full"
      >
        <h3 className="text-2xl font-semibold mb-10">Choose a Vehicle</h3>

        <div className="flex flex-col gap-3">
          {/* Uber Car */}
          <div className="flex items-center justify-between w-full p-3 active:border-2 rounded-xl">
            <img
              className="h-10"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png"
              alt=""
              srcset=""
            />
            <div className="w-1/2">
              <h4 className="font-medium text-base">
                UberGo{" "}
                <span>
                  <i className="ri-user-3-fill"></i>4
                </span>
              </h4>
              <h5 className="font-medium text-sm">2 mins away</h5>
              <p className="font-normal text-xs text-gray-600">
                Affordable, compact rides
              </p>
            </div>
            <h2 className="text-lg font-semibold">₹193.20</h2>
          </div>

          {/* Uber Bike */}
          <div className="flex items-center justify-between w-full p-3  active:border-2 rounded-xl">
            <img
              className="h-10"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
              alt=""
              srcset=""
            />
            <div className="w-1/2">
              <h4 className="font-medium text-base">
                Moto{" "}
                <span>
                  <i className="ri-user-3-fill"></i>1
                </span>
              </h4>
              <h5 className="font-medium text-sm">3 mins away</h5>
              <p className="font-normal text-xs text-gray-600">
                Affordable, motorcycle rides
              </p>
            </div>
            <h2 className="text-lg font-semibold">₹64.27</h2>
          </div>

          {/* Uber Auto */}

          <div className="flex items-center justify-between w-full p-3 active:border-2 rounded-xl">
            <img
              className="h-10"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
              alt=""
              srcset=""
            />
            <div className="w-1/2">
              <h4 className="font-medium text-base">
                Auto{" "}
                <span>
                  <i className="ri-user-3-fill"></i>3
                </span>
              </h4>
              <h5 className="font-medium text-sm">2 mins away</h5>
              <p className="font-normal text-xs text-gray-600">
                Affordable, Auto Rides
              </p>
            </div>
            <h2 className="text-lg font-semibold">₹118.21</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
