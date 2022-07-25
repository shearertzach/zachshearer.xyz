export default function DataTooltip({ data, name }) {
  return (
    <div className={`rounded-md py-1 text-slate-500 hover:text-slate-200 w-24 transition-all duration-500 group cursor-pointer relative ml-2 mt-3`}>
      <p>{name}</p>
      <span className='tech-tooltip'>
        {data.map(x => <p key={x}>{x}</p>)}
      </span>
    </div>
  )
}
