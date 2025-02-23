import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "./FinishRide";

const CaptainRiding = () => {
  const finishRidePanelRef = useRef(null);
  const [finishRidePanel, setFinishRidePanel] = useState(false);

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: " translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );
  return (
    <div className="h-screen">
      <Link
        to="/captain-home"
        className="h-10 p-3 top-2 flex justify-center items-center w-10 bg-white rounded-full right-0 fixed"
      >
        <i className=" text-2xl font-medium ri-logout-box-r-line"></i>
      </Link>
      <img
        className="w-12 left-5 top-5 absolute object-cover"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="h-1/5 bg-yellow-400 flex items-center justify-between p-6 relative">
        <h5
          className="p-1 text-center w-[93%] absolute top-0"
          onClick={() => {
            setFinishRidePanel(true);
          }}
        >
          <i className="text-3xl text-black ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className="text-xl font-semibold">4KM Away</h4>
        <button className="bg-green-600 text-white  rounded-lg font-semibold px-10 py-3 text-xl">
          Confirm Ride
        </button>
      </div>

      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>
    </div>
  );
};

export default CaptainRiding;
