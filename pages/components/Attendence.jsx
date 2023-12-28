import React from 'react';
import { MdFactCheck } from "react-icons/md";
import Logo from '../../images/logo.png'
import Image from 'next/image';

const Attendence = () => {
  return (
    <>
      <section className='w-full '>

        <div className=' p-4 pt-6'>
          <div className='flex  items-center'>
            <span className='text-3xl mr-4 text-[#fff] rounded-full p-2 bg-[#1C74BB]'><MdFactCheck /></span>
            <h1 className='text-4xl font-extrabold'>Attendence</h1>
          </div>

        </div>

        <div className='relative  w-[90%] m-auto mt-10 bg-[#1C74BB] rounded-lg p-3 text-lg flex justify-around text-white'>
          <div className='text-center w-[2%]'>Id</div>
          <div className='text-center w-[12%]'>Profile Image</div>
          <div className='text-center w-[25%]'>Name</div>
          <div className='text-center w-[20%]'>CheckIn Time</div>
          <div className='text-center w-[20%]'>CheckOut Time</div>

        </div>

        <ul className='mt-16'>
                    <li className='bg-white mt-6 w-[90%] m-auto shadow-lg p-4 text-lg rounded-lg  flex justify-around items-center'>
                    <div className='text-center w-[2%]'>Id</div>
                    <div className='text-center w-[12%] flex justify-center'><div className='bg-gray-400 overflow-hidden flex justify-center items-center  h-12 w-12 rounded-full '><Image src={Logo} className='h-[150px] w-32' /></div></div>
          <div className='text-center w-[25%]'>Name</div>
          <div className='text-center w-[20%]'>CheckIn Time</div>
          <div className='text-center w-[20%]'>CheckOut Time</div>
                   

                    </li>
                    

                    
                </ul>

      </section>
    </>
  )
}

export default Attendence
