import React from 'react'

export default function Background() {
  return (
    <div className='absolute top-0 left-0 -z-10 w-screen h-full'>
      <div className='w-64 h-64 bg-blue-400 opacity-5 blur-lg rounded-full absolute left-20 top-44' />
      <div className='w-48 h-48 bg-purple-400 opacity-5 blur-lg rounded-full absolute top-20 right-20' />
      <div className='w-48 h-48 bg-fuchsia-400 opacity-5 blur-lg rounded-full absolute bottom-20 right-40' />

    </div>
  )
}
