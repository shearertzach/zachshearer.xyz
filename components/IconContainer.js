import React from 'react';

export default function IconContainer({ icon, text = 'Tooltip', hoverColor = '#353cc0' }) {
  return (
    <div className={`h-10 w-10 flex items-center justify-center hover:bg-slate-200 rounded-full transition-all duration-500 group cursor-pointer relative hover:text-[${hoverColor}] mx-1.5`}>
      {icon}
      <span className='icon-tooltip'>
        {text}
      </span>
    </div>
  )
}
