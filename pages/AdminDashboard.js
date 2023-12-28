import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../images/LogoF.png'
import { PiStudentFill } from "react-icons/pi";
import { MdFactCheck } from "react-icons/md";
import Students from './components/Students';
import Attendence from './components/Attendence';
const Dashboard = () => {

  const [isStudents, setisStudents] = useState(true)

  const stdToggle = () => {
    setisStudents(true)
  }


  const AttToggle = () => {
    setisStudents(false)

  }

  return (
    <>

      <section className='flex'>

        {/* sideBar */}
        <div>

          <div className='flex justify-between items-center flex-col w-[300px]   h-screen bg-white'>

            <div className='flex justify-between items-center  flex-col mt-1 h-[280px]'>
              <div><Image className='w-64 ' src={Logo} /></div>
              <div className=' '>
                <div onClick={stdToggle} className={`flex   cursor-pointer  items-center text-2xl  mt-3 mb-10 ${isStudents ? "text-black" : "text-gray-400"}`}><span className='text-3xl mr-4 bg-[#d7d7d7] rounded-full p-2 text-[#1C74BB]'><PiStudentFill /></span>Students</div>

                <div onClick={AttToggle} className={`flex  items-center  cursor-pointer text-2xl  mt-3 ${isStudents ? "text-gray-400" : "text-black"}`}><span className='text-3xl mr-4 bg-[#d7d7d7] rounded-full p-2 text-[#1C74BB]'><MdFactCheck /></span>Attendence</div>
              </div>

            </div>

            <div className=' w-[120px] mb-5 text-center '>
              <button className='w-full p-2 bg-[#1C74BB] rounded-md text-white'>Logout</button>
            </div>

          </div>
        </div>

        {
          isStudents ? <Students /> : <Attendence />
        }


      </section>

    </>
  )
}

export default Dashboard
