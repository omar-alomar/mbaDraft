import React from 'react'

// this is a comment
const Header = ({Text}) => {
  return (
    <div className='flex w-full bg-[#DBDADA] font-Fira'>
      <div className='basis-2/12'>
        <img className='mx-auto py-5' src='\Logo(edited).png'></img>
      </div>
      <div className='basis-8/12 my-auto'></div>
      <div className='basis-2/12 my-auto mx-auto text-mbaRed'>
        <h1 className='text-[2rem]'>{Text}</h1>
      </div>
    </div>
  )
}

export default Header





// abook mo7taram ya omar
