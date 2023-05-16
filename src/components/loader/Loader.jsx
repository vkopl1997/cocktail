import React from 'react';
import './loader.css'

export const Loader = () => {
  return (
    <div className='loader-main'>
        <div className='center'>
               <div className="ring"></div>
               <span className='text'>loading...</span>

        </div>
    </div>
  )
}
