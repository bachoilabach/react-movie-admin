import React from 'react'
import SideBar from '../components/SideBar'

export default function InboxPage() {
  return (
    <div className="flex">
      <SideBar />
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Inbox Page</h1>
      </div>
    </div>
  )
}
