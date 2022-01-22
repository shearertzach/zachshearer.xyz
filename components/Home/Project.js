import React from 'react';

export default function Project({ title = 'Title Placeholder', description = 'Description Placeholder', stack = 'MERN', }) {
  return (
    <div className='text-slate-300 p-4 mb-5 rounded-lg hover:bg-slate-200 hover:bg-opacity-20 transition-all'>
      <p className='text-xl'>{title}</p>
      <p className='text-slate-400 ml-2'>{description}</p>
      <p className='mt-5 text-sm ml-2'>Tech Stack: {stack}</p>
    </div>
  )
}
