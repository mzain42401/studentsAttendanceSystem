import Image from 'next/image'
import React, { useContext, useState } from 'react'
import Logo from '../../images/logo.png'
import { AuthContext } from '@/firebase/authContext'
import { useRouter } from 'next/router'
const Login = () => {
    const { addStudent } = useContext(AuthContext)

    const route = useRouter()
    const [userMail, setuserMail] = useState()
    const [userPassword, setuserPassword] = useState()



    const LogIn = (e) => {
        e.preventDefault()
        if (userMail == "admin123@gmail.com" && userPassword == "admin789") {
            console.log("good");
            addStudent(userMail, userPassword).then(() =>
                route.push("/AdminDashboard")
            ).catch((error) => {
                console.log(error);
            })
        }
        else{
            addStudent(userMail, userPassword)

        }
    }

    return (
        <>
            <section className='m-auto  relative top-[70px] w-[40%] h-max pt-2 pb-10 pr-8 pl-8 rounded-lg bg-white shadow-lg'>
                <div className=' mt-1 mb-7 flex justify-center'><Image className='h-[150px] w-32' src={Logo} /></div>

                <form onSubmit={(e) => LogIn(e)} >
                    <div className=
                        'w-[100%]'>
                        <input onChange={(e) => setuserMail(e.target.value)} required className=' border-2 focus:border-black rounded-md outline-none border-[#DBDADA] w-full p-3' type="email" name="" id="" placeholder='your email' />
                    </div>
                    <div className='mt-5 w-[100%]'>
                        <input onChange={(e) => setuserPassword(e.target.value)} required className='border-2 focus:border-black rounded-md outline-none border-[#DBDADA] w-full p-3' type="password" name="" id="" placeholder='your password' />
                    </div>
                    <div className=' w-[100%] mt-10'>
                        <button type='submit' className='w-full p-3 bg-[#1C74BB] rounded-md text-white'>Login</button>

                    </div>
                </form>
            </section>
        </>
    )
}

export default Login
