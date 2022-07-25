import React from 'react';

export default function IconContainer({ icon, text = 'Tooltip', link }) {
  return (
    <a className={`h-10 w-10 flex items-center justify-center hover:bg-slate-200 hover:text-indigo-700 rounded-full transition-all duration-500 group cursor-pointer relative mx-1`} href={link} target={"_blank"}>
      {icon}
      <span className='icon-tooltip'>
        {text}
      </span>
    </a>
  )
}
