import React from "react";

const LocationSearchPanel = (props) => {
  // console.log(props);
  const locations = [
    "6, Hydergarden 1st Street, Krishnadoss Road, Perambur, Chennai, Tamil Nadu",
    "279, Shop No 2, Ground Floor, Chickpet, Bangalore, Karnataka",
    " 84 2nd, New Bardan Ln,samuel St, Masjid Bunder, Mandvi, Mumbai, Maharashtra",
    "A-1, Bangla Garden, Church Pakhadi Rd No1, Andheri (west), Mumbai, Maharashtra",
  ];
  return (
    <div>
      {/* sample data */}

      {
        locations.map(function (element, idx)
        {
          return (
            <div key={idx} onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);

            }} className="flex items-center justify-center gap-3 my-2 border-2 p-2 rounded-xl border-gray-400">
              <h2 className="bg-[#eee] h-6 w-12 rounded-full">
                <i className="ri-map-pin-fill flex items-center justify-center"></i>
              </h2>
              <h4 className="font-medium">{element}</h4>
            </div>
          );
        
      }
      )}
      
    </div>
  );
};

export default LocationSearchPanel;
