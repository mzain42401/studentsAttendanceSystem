import React, { useState } from 'react';
import { PiStudentFill } from "react-icons/pi";
import { FaEdit, FaTrash } from "react-icons/fa";
import Image from 'next/image';
import Logo from '../../images/Logo.png'


const Students = ({AddStd,editstd}) => {
    const [editStudent, seteditStudent] = useState(false)

    const [stdName, setstdName] = useState()
    const [course, setcourse] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [img, setImg] = useState()


    const back = () => {
        seteditStudent(!editStudent)
    }


    // const editstd = () => {
    //     seteditStudent(!editStudent)
    // }


    

    const AddnewStd = (e) => {
        e.preventDefault()

        setNewStd(!newStd)

        console.log(stdName, course, email, password, img);
    }
    return (
        <>

            <section className='w-full '>

                <div className='flex justify-between items-center p-4 pt-6'>
                    <div className='flex  items-center'>
                        <span className='text-3xl mr-4 text-[#fff] rounded-full p-2 bg-[#1C74BB]'><PiStudentFill /></span>
                        <h1 className='text-4xl font-extrabold'>Students</h1>
                    </div>
                    <div>
                        <button onClick={AddStd} className='w-32 p-3 bg-[#1C74BB] rounded-md text-white'>Add Students</button>

                    </div>
                </div>
                <div className='  w-[90%] m-auto mt-10 bg-[#1C74BB] rounded-lg p-3 text-base  flex justify-around text-white'>
                        <div className='text-center w-[2%]'>Id</div>
                        <div className='text-center w-[12%]'>Profile Image</div>
                        <div className='text-center w-[20%]'>Name</div>
                        <div className='text-center w-[20%]'>Course Name</div>
                        <div className='text-center w-[10%]'>Password</div>
                        <div className='text-center w-[15%]'></div>
                    </div>
                    <ul className='mt-16'>
                                <li className='bg-white mt-6 w-[90%] m-auto shadow-lg p-3 text-base rounded-lg  flex justify-around items-center'>
                                    <div className='text-center w-[2%]'>Id</div>
                                    <div className='text-center w-[12%] flex justify-center'><div className='bg-gray-400 overflow-hidden flex justify-center items-center  h-12 w-12 rounded-full '><Image src={Logo} className='h-[150px] w-32' /></div></div>
                                    <div className='text-center w-[20%]'>Name</div>
                                    <div className='text-center w-[20%]'>Course Name</div>
                                    <div className='text-center w-[10%]'>Password</div>
                                    <div className='text-center w-[15%] flex justify-around'>
                                        <div className='text-xl cursor-pointer hover:text-[#1C74BB]'><FaEdit onClick={editstd} /></div>
                                        <div className='text-xl cursor-pointer hover:text-[#1C74BB]'><FaTrash /></div>
                                    </div>

                                </li>



                            </ul>
                        
                  

            </section>
        </>
    )
}

export default Students














