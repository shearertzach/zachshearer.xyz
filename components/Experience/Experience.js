import React from 'react';
import DataTooltip from '../DataTooltip';

export default function Experience({ title = 'Title Placeholder', description = 'Description Placeholder', takeaways = ['Good'] }) {
  return (
    <div className='text-slate-300 p-4 mb-5 rounded-lg hover:bg-slate-200 hover:bg-opacity-20 transition-all cursor-pointer'>
      <p className='text-xl'>{title}</p>
      <p className='text-slate-400 ml-2'>{description}</p>
      <DataTooltip data={takeaways} name={"Takeaways"} />
    </div>
  )
}
