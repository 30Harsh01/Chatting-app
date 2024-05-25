import React, { useState } from 'react'
import GenderCheckBox from '../Components/GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../Hooks/useSignup'

export default function Signup() {
  const [input,setInput]=useState({
    fullname:"",
    username:"",
    password:"",
    cpassword:"",
    gender:""
  })

  const {loading,signup}=useSignup()

  const handleOnSubmit=async(e)=>{
    e.preventDefault();
    // console.log(input)
    await signup(input)

  }
  const handleCheckBoxChange=(gender)=>{
    setInput({...input,gender})
  }
  const handleOnChange=(e)=>{
    // console.log(e.target.value)
    setInput({...input,[e.target.id]:e.target.value.trim()})
  }
  return (
    <div className='flex dlex-col items-center justify-center min-w-96 mx-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className='text-blue-900'> chatAPP</span>
        </h1>
        <form onSubmit={handleOnSubmit}>
          <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Name</span>
          </label>
          <input id='fullname'type="text" placeholder='Enter Name' className='w-full input input-bordered h-10' onChange={handleOnChange} />
          <label className='label p-2'>
            <span className='text-base label-text'>Username</span>
          </label>
          <input   id='username'   type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' onChange={handleOnChange} />
          <label className='label p-2'>
            <span className='text-base label-text'>Password</span>
          </label>
          <input    type="password"   id='password' placeholder='**********' className='w-full input input-bordered h-10' onChange={handleOnChange} />
          <label className='label p-2'>
            <span className='text-base label-text'>Confirm Password</span>
          </label>
          <input   type="password" id='cpassword' placeholder='**********' className='w-full input input-bordered h-10' onChange={handleOnChange} />
          </div>

          {/* Gender checkbox goes here */}
          <GenderCheckBox handleCheckBoxChange={handleCheckBoxChange} selectedGender={input.gender} />

          <div>
            <button className=" btn btn-block mt-1 text-white bg-gradient-to-r from-pink-500 via-purple-600 to-red-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-3 py-2.5 text-center me-1 mb-1">Login</button>
          </div>
          <Link to="/signin" className='text-sm hover:underline  mt-1 inline-block' > Already have an account?</Link>
        </form>
      </div>
      
    </div>
  )
}
