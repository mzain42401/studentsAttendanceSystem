import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../images/LogoF.png'
import { PiStudentFill } from "react-icons/pi";
import { MdFactCheck } from "react-icons/md";
import Students from './components/Students';
import Attendence from './components/Attendence';
import NewStd from './components/NewStd';
import EditStd from './components/EditStd';
const Dashboard = () => {
  const [newStd, setNewStd] = useState(false)
  const [EditStudent, setEditStudent] = useState(false)

  const [isStudents, setisStudents] = useState(true)

  const stdToggle = () => {
    setisStudents(true)
  }
   const AddStd = () => {
       setNewStd(!newStd)
   }
   const  editstd= () => {
    setEditStudent(!EditStudent)
}
const back=()=>{
  setEditStudent(!EditStudent)
}

  const AttToggle = () => {
    setisStudents(false)

  }

  return (
    <>
{
  EditStudent?<EditStd back={back}/>:null
}

{
  newStd?<NewStd AddStd={AddStd}/>:null
}
      <section className='flex'>

        {/* sideBar */}
        <div>

          <div className='flex justify-between items-center flex-col w-[230px]   h-screen bg-white'>

            <div className='flex justify-between items-center  flex-col mt-1  h-[230px]'>
              <div className=' '><Image className='w-52  ' src={Logo} /></div>
              <div className=' '>
                <div onClick={stdToggle} className={`flex   cursor-pointer  items-center text-xl  hover:text-black  ${isStudents ? "text-black" : "text-gray-400"}`}><span className='text-2xl mr-4 bg-[#d7d7d7] rounded-full p-2 text-[#1C74BB]'><PiStudentFill /></span>Students</div>

                <div onClick={AttToggle} className={`flex  hover:text-black items-center  cursor-pointer text-xl  mt-5 ${isStudents ? "text-gray-400" : "text-black"}`}><span className='text-2xl mr-4 bg-[#d7d7d7] rounded-full p-2 text-[#1C74BB]'><MdFactCheck /></span>Attendence</div>
              </div>

            </div>

            <div className=' w-[120px] mb-5 text-center '>
              <button className='w-full p-2 bg-[#1C74BB] rounded-md text-white'>Logout</button>
            </div>

          </div>
        </div>

        {
          isStudents ? <Students AddStd={AddStd} editstd={editstd} /> : <Attendence />
        }


      </section>



    </>
  )
}

export default Dashboard
