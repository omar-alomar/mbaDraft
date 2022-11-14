import React from 'react'
import { useState } from 'react';

const Modal = (props) => {
    const [shouldShow, setShouldShow] = useState(false)
    
    return (
        <>
        <button onClick={() => setShouldShow(true)}>{props.buttonName}</button>
        {shouldShow && (
            <div 
             className='fixed flex justify-center items-center top-0 left-0 right-0 inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
             onClick={() => setShouldShow(false)}
            >
                <div className='bg-gray-300 border-solid border-2 border-black text-right static'
                 onClick={e => e.stopPropagation()}
                >
                     <button 
                      className="p-1"
                      onClick={() => setShouldShow(false)}>X</button>
                    {props.children}
                </div>
            </div>
        )}
        </>
    )
}

export default Modal