import React from 'react'
import GenderCheckBox from '../Components/GenderCheckBox'

export default function Signup() {
  return (
    <div className='flex dlex-col items-center justify-center min-w-96 mx-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signupp
          <span className='text-blue-900'> chatAPP</span>
        </h1>
        <form action="">
          <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Name</span>
          </label>
          <input type="text" placeholder='Enter Name' className='w-full input input-bordered h-10' />
          <label className='label p-2'>
            <span className='text-base label-text'>Username</span>
          </label>
          <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />
          <label className='label p-2'>
            <span className='text-base label-text'>Password</span>
          </label>
          <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10' />
          <label className='label p-2'>
            <span className='text-base label-text'>Confirm Password</span>
          </label>
          <input type="text" placeholder='Confirm Password' className='w-full input input-bordered h-10' />
          </div>

          {/* Gender checkbox goes here */}
          <GenderCheckBox/>

          <div>
            <button className=" btn btn-block mt-1 text-white bg-gradient-to-r from-pink-500 via-purple-600 to-red-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-3 py-2.5 text-center me-1 mb-1">Login</button>
          </div>
          <a href="#" className='text-sm hover:underline  mt-1 inline-block' > Already have an account?</a>
        </form>
      </div>
      
    </div>
  )
}
