import React from 'react'

const CaptainDetails = () => {
  return (
    <div className="h-2/5 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://images.generated.photos/-PGxquAoUIGhdbbI8OnqHXNy8VXJ16Af-8N7di3H4X4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Nzg4OTE3LmpwZw.jpg"
            alt=""
            srcset=""
          />
          <h3 className="text-xl font-semibold">Harsh Patel</h3>
        </div>

        <div className="">
          <h4 className="text-xl font-semibold">₹295.20</h4>
          <p className="text-sm text-gray-600 font-semibold">Earned</p>
        </div>
      </div>

      <div className="flex justify-center items-start mt-3 gap-3 p-6 bg-gray-100 rounded-xl">
        <div className="text-center">
          <i class="text-3xl mb-2 font-thin ri-timer-2-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>

        <div className="text-center">
          <i class="text-3xl mb-2 font-thin ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>

        <div className="text-center">
          <i class="text-3xl mb-2 font-thin ri-booklet-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
}

export default CaptainDetails
