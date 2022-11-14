import React from 'react'

// this is a comment
const Header = ({Text}) => {
  return (
    <div className='flex w-full bg-[#CBCBCB] font-Fira border-solid border-b-[1px] border-mbaRed'>
      <div className='basis-1/2'>
        <img className='mr-auto pl-10 py-5' src='\Logo(edited).png'></img>
      </div>
      <div className='basis-1/2 text-right my-auto text-mbaRed'>
        <h1 className='text-[2.3rem] pr-10'>{Text}</h1>
      </div>
    </div>
  )
}

export default Header





// abook mo7taram ya omar
