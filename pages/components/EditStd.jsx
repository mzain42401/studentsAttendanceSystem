import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";

const EditStd = ({back}) => {
    return (
        <>
      <div className='absolute h-screen w-full backdrop'>

            <div className="absolute right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2 flex  flex-1 flex-col justify-center  px-6 py-2 lg:px-8 rounded-lg  bg-white w-96 shadow-lg">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm flex">

                    <h2 className="flex items-center mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      <span onClick={back} className='mr-5 cursor-pointer'><FaArrowLeft/></span>  Edit Student
                    </h2>
                    
                </div>

                <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-2" onSubmit={(e) => AddnewStd(e)}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Full Name
                            </label>
                            <div className="mt-2">
                                <input
                                    name="userName"
                                    type="text"
                                    required
                                    onChange={(e) => setstdName(e.target.value)}
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
                                    onChange={(e) => setcourse(e.target.value)}
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
                                    onChange={(e) => setemail(e.target.value)}
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
                                    onChange={(e) => setpassword(e.target.value)}
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
                                    onChange={(e) => setImg(e.target.files[0])}
                                    className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1C74BB] sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="mt-6 flex w-full justify-center rounded-md bg-[#1C74BB] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#4798db] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C74BB]"
                            >
                                Done
                            </button>
                        </div>
                    </form>


                </div>
            </div>
            </div>
        </>
    )
}

export default EditStd
