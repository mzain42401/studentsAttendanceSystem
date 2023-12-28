import React, { useState } from 'react';
import { PiStudentFill } from "react-icons/pi";
import { FaEdit, FaTrash } from "react-icons/fa";
import Image from 'next/image';
import Logo from '../../images/logo.png'
import EditStd from './EditStd';
import { FaArrowLeft } from "react-icons/fa6";


const Students = () => {
    const [newStd, setNewStd] = useState(false)
    const [editStudent,seteditStudent] = useState(false)

const [stdName,setstdName]=useState()
const [course,setcourse]=useState()
const [email,setemail]=useState()
const [password,setpassword]=useState()
const [img,setImg]=useState()


const back=()=>{
    seteditStudent(!editStudent)
}


const editstd=()=>{
    seteditStudent(!editStudent)
}


    const AddStd = () => {
        setNewStd(!newStd)
    }

    const AddnewStd=(e)=>{
e.preventDefault()

setNewStd(!newStd)

console.log(stdName,course,email,password,img);
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
                        <button onClick={AddStd} className='w-32 p-3 bg-[#1C74BB] rounded-md text-white'>{newStd ?'Cancle':"Add Students"}</button>

                    </div>
                </div>
                {
                    newStd ? <>
                        <>
                            <div className="flex  flex-1 flex-col justify-center  px-6 py-12  lg:px-8  bg-white">
                                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                                    <h2 className="flex items-center mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                    <span onClick={AddStd} className='mr-5 cursor-pointer'><FaArrowLeft/></span>   Add New Student
                                    </h2>
                                </div>

                                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                    <form className="space-y-6" onSubmit={(e)=>AddnewStd(e)}>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                Full Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    name="userName"
                                                    type="text"
                                                    required
                                                    onChange={(e)=>setstdName(e.target.value)}
                                                    className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1C74BB] sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                Course Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    name="courseName"
                                                    type="text"
                                                    required
                                                    onChange={(e)=>setcourse(e.target.value)}
                                                    className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1C74BB] sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                Email address
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    required
                                                    onChange={(e)=>setemail(e.target.value)}
                                                    className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1C74BB] sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Password
                                                </label>

                                            </div>
                                            <div className="mt-2">
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    autoComplete="current-password"
                                                    required
                                                    onChange={(e)=>setpassword(e.target.value)}
                                                    className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1C74BB] sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                Your Image
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    name="img"
                                                    type="file"
                                                    required
                                                    onChange={(e)=>setImg(e.target.files[0])}
                                                    className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1C74BB] sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                className="flex w-full justify-center rounded-md bg-[#1C74BB] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#4798db] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C74BB]"
                                            >
                                                Add New
                                            </button>
                                        </div>
                                    </form>

                                    
                                </div>
                            </div>
                        </>
                    </> : <><div className='  w-[90%] m-auto mt-10 bg-[#1C74BB] rounded-lg p-3 text-lg flex justify-around text-white'>
                        <div className='text-center w-[2%]'>Id</div>
                        <div className='text-center w-[12%]'>Profile Image</div>
                        <div className='text-center w-[20%]'>Name</div>
                        <div className='text-center w-[20%]'>Course Name</div>
                        <div className='text-center w-[10%]'>Password</div>
                        <div className='text-center w-[15%]'></div>
                    </div>
{
    editStudent? <EditStd back={back}/>:<ul className='mt-16'>
    <li className='bg-white mt-6 w-[90%] m-auto shadow-lg p-4 text-lg rounded-lg  flex justify-around items-center'>
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
}
                        </>
                }

            </section>
        </>
    )
}

export default Students














