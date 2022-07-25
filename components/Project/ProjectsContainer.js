import React from 'react';

export default function ProjectsContainer({ children, year }) {
  return (
    <div className='grid grid-cols-8 gap-4 relative'>
      <div className='col-span-1 text-slate-500 pt-4'>
        <div className='pl-2.5'>{year}</div>
        <div className='border-l border-slate-500 pl-3 h-full absolute left-0 top-0' />
      </div>
      <div className='col-span-7'>
        {children}
      </div>
    </div>
  )
}
