import React from 'react'

const RightCardContent = (props) => {
  return (
   <div className="absolute top-0 left-0 h-full w-full p-7 text-2xl font-bold flex flex-col justify-between">
        <h2 className="bg-white rounded-full flex justify-center items-center h-12 w-12 font-semibold">{props.id+1}</h2>
        <div>
          <p className="text-sm leading-normal text-gray-100 mb-12">{props.intro}</p>
          <div>
            <button className="bg-[#05339C] text-white font-medium px-5 py-2 rounded-full text-sm">{props.tag}</button>
            <button className="bg-[#05339C] text-white font-medium px-3 py-2 rounded-full text-sm"><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent
