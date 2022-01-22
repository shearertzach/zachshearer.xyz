import React from 'react';

export default function ProjectsContainer({ children }) {
  return (
    <div className='grid grid-cols-7 gap-4'>
      <div className='col-span-1 text-slate-500 pt-4'>
        <div className='border-l border-slate-500 pl-3'>2022</div>
        <div className='border-l border-slate-500 pl-3 sm:h-[475px] h-[575px]' />
        <div className='border-l border-slate-500 pl-3'>2021</div>
        <div className='border-l border-slate-500 pl-3 h-[400px]' />
      </div>
      <div className='col-span-6'>
        {children}
      </div>
    </div>
  )
}
