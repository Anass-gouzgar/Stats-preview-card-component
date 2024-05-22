import React from 'react'
import mblImg from "/public/images/image-header-mobile.jpg"
import dkpImg from "/public/images/image-header-desktop.jpg"
import Image from 'next/image'

const index = () => {
  return (
    <div className="w-[300px] md:w-[1000px] h-[750px] md:h-[400px] bg-Darkdesaturatedblue rounded-2xl overflow-hidden font-Lexend_Deca flex flex-col md:flex md:flex-row-reverse  ">
      <div className="md:w-1/2 relative h-[311px] md:h-full bg-gradient-to-r from-Softviolet to-Softviolet md:mb-0">
        <Image
          src={mblImg}
          alt="mobile"
          className="md:hidden object-cover absolute inset-0 opacity-40"
        />
        <Image
          src={dkpImg}
          alt="desktop"
          className="hidden md:block object-cover absolute inset-0 opacity-20"
        />
      </div>
      {/* sec section */}

      <div className="md:w-1/2 md:flex md:flex-col md:justify-center h-full md:p-6 ">
        <div className="flex flex-col justify-center items-center text-center gap-y-3 pt-6 md:text-start md:p-3 md:mb-6">
          <h1 className="text-3xl text-White font-semibold pr-20">
            {" "}
            Get <span className="text-Softviolet">insights</span> that help your
            business grow.
          </h1>
          <p className="text-Slightlytransparentw  px-5 md:px-0 md:pr-16 ">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
        </div>

        {/* nombers */}
        <div className="flex flex-col items-center justify-around text-White gap-y-8 p-3 md:flex md:flex-row md:justify-start md:gap-14 ">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-2xl font-bold">10k+</h1>
            <h2 className="uppercase text-Slightlytransparentw ">companies</h2>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-2xl font-bold">314</h1>
            <h2 className="text-Slightlytransparentw uppercase">templates</h2>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-2xl font-bold">12M+</h1>
            <h2 className="text-Slightlytransparentw uppercase">queries</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index