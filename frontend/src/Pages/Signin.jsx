import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useSignin from '../Hooks/useSignin';

export default function Signin() {
  const [input, setInput] = useState({
    username: "",
    password: ""
  });
  const { loading, signin } = useSignin();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await signin(input);
  }

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setInput(prevState => ({ ...prevState, [id]: value.trim() }));
  }

  return (
    <div className='flex dlex-col items-center justify-center min-w-96 mx-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className='text-blue-900'> chatAPP</span>
        </h1>
        <form onSubmit={handleOnSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input onChange={handleOnChange} id='username' type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input id='password' onChange={handleOnChange} type="password" placeholder='**********' className='w-full input input-bordered h-10' />
          </div>
          <Link to="/signup" className='text-sm hover:underline  mt-2 inline-block' > {"Don't"} have an account?</Link>
          <div>
            <button disabled={loading} className={`btn btn-block text-white bg-gradient-to-r from-pink-500 via-purple-600 to-red-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-3 py-2.5 text-center me-1 mb-1 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}
