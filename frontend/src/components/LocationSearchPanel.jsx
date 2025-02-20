import React from 'react'

const LocationSearchPanel = () => {
  return (
    <div>
      {/* sample data */}
      
      <div className='flex items-center justify-center gap-3 my-2'>
        <h2 className='bg-[#eee] h-6 w-12 rounded-full'><i className="ri-map-pin-fill flex items-center justify-center"></i></h2>
        <h4 className='font-medium'>6, Hydergarden 1st Street, Krishnadoss Road, Perambur, Chennai, Tamil Nadu</h4>
      </div>
      <div className='flex items-center justify-center gap-3 my-2'>
        <h2 className='bg-[#eee] h-6 w-12 rounded-full'><i className="ri-map-pin-fill flex items-center justify-center"></i></h2>
        <h4 className='font-medium'>6, Hydergarden 1st Street, Krishnadoss Road, Perambur, Chennai, Tamil Nadu</h4>
      </div>
    </div>
  )
}

export default LocationSearchPanel
