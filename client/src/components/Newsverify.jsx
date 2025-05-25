import React from 'react'
import { Link } from 'react-router-dom'

const Newsverify = () => {
  return (
   <>
   <Link to='/verify' className='bg-red-500 fixed z-10 right-10 bottom-10 text-white border rounded-[100%] h-[100px] w-[100px] p-4 font-bold flex items-center justify-center'>Verify</Link>
   </>
  )
}

export default Newsverify
