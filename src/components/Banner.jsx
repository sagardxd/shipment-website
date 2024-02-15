import React from 'react'
import { MdLocationOn } from "react-icons/md";
import containerImage from '../assets/Screenshot_2024-02-15_165957-removebg-preview.png'

const Banner = () => {
    return (
        <div className='w-1/2 flex flex-col pt-[160px] px-20 gap-10'>
            <div className='text-gray-500 leading-tight text-6xl '>
                <h1>Where
                    <span className='text-black font-bold'> Quality </span> and <br />
                    <span className='text-black font-bold'> Security Converge </span>
                    for<br /> Peace of Mind
                </h1>
            </div>

            {/* input */}
            <div className='bg-white w-[370px] h-[160px] shadow-sm flex flex-col gap-3 justify-center items-center' >
                <div className='relative'>
                    <input className='bg-white border border-gray-300 w-[330px] pl-10 h-10 placeholder:text-md p-2'
                        placeholder='Enter your tracking id..' />
                        <MdLocationOn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                <button className='w-[330px] h-10 bg-[#5b7c5b] text-white'>Track your shipment</button>
            </div>

            <img src={containerImage} alt="container image"  className="absolute w-[730px] left-[790px] top-[150px]" />
        </div>
    )
}

export default Banner
