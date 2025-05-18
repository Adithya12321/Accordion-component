import  { useState } from 'react'

export const Accoridan = ({ title, content } : {title:string, content:string}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className=''>
      <div className='px-10 text-left'>
        <button className='flex justify-between w-full' onClick={() => setOpen(!open)}>
          <button ><h1 className='font-bold '>{title}</h1></button>
          <div>{ open ? '-' : '+'}</div>
        </button>
        {
          open && 
          <p className='py-3'>{content}</p>
        }
        <div className='border mx-5'></div>
      </div>
    </div>
  )
}
