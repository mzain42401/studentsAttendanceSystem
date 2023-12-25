import React from 'react'

const Login = () => {
  return (
    <>
    <section className='m-auto  relative top-[50px] w-[40%] h-max pt-10 pb-10 pr-5 pl-5 bg-white shadow-lg'>

<form >

    <div className=
    'w-[100%]'>
        <input className='border-2 rounded-md outline-none border-[#DBDADA] w-full p-3' type="email" name="" id="" placeholder='your email' />
    </div>
    <div className='mt-5 w-[100%]'>
        <input className='border-2 rounded-md outline-none border-[#DBDADA] w-full p-3' type="email" name="" id="" placeholder='your email' />
    </div>
    <div className=' w-[100%] mt-10'>
        <button className='w-full p-3 bg-[#5C93FA] rounded-md text-white'>Login</button>
        
    </div>
</form>
    </section>
    </>
  )
}

export default Login
