import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

export default function Sidebar() {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      {/* Searchinput */}
      <SearchInput/>
      <div className='divider px-3'></div>
      {/* conversations */}
      <Conversations/>
      {/* Logout button */}
      <LogoutButton/>
    </div>
  )
}