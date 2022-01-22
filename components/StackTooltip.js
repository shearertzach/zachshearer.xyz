import React from 'react';

export default function StackTooltip({ tech }) {
  return (
    <div className={`rounded-md py-1 text-slate-500 hover:text-slate-200 w-24 transition-all duration-500 group cursor-pointer relative ml-2 my-3`}>
      <p>View Stack</p>
      <span className='tech-tooltip'>
        {tech.map(x => <p className=''>{x}</p>)}
      </span>
    </div>
  )
}
