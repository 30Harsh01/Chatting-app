import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import useLogout from '../Hooks/useLogout'

export default function LogoutButton() {

  const { logout } = useLogout()
  const handleOnClick = (e) => {
    // e.preventDefault()
    logout()
  }

  return (
    <div className='mt-auto'>
      <BiLogOut className='w-6 h-6 text-white cursor-pointer'
        onClick={handleOnClick}
      />
    </div>
  )
}
