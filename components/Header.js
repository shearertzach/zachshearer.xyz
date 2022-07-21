import React from 'react'
import { useRouter } from 'next/router'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaInbox, FaGithub, FaTwitter } from 'react-icons/fa'
import IconContainer from './IconContainer'


export default function Header({ }) {
  const router = useRouter()

  return (
    <div className='p-4 text-slate-300 max-w-5xl mx-auto mb-14 flex items-center justify-between backdrop-blur-md'>
      <p className='hidden sm:block relative tracking-widest font-light text-2xl cursor-pointer  transition-all' onClick={() => router.push('/')}>zachshearer.xyz</p>
      <p className='block sm:hidden relative tracking-widest font-light text-2xl cursor-pointer transition-all' onClick={() => router.push('/')}>zach</p>
      <div className='flex items-center'>
        <IconContainer icon={<FaInbox size={24} />} text='Email' />
        <IconContainer icon={<AiFillLinkedin size={24} />} text='LinkedIn' />
        <IconContainer icon={<FaTwitter size={24} />} text='Twitter' />
        <IconContainer icon={<FaGithub size={24} />} text='GitHub' />
      </div>
    </div>
  )
}
