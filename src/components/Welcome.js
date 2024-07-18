import React from 'react'

export default function Welcome({numQuestion}) {
  return (
    <div className='text-center my-4'>
            <h3><strong className='badge bg-dark'>{numQuestion}</strong> questions are waiting for you.</h3>
    </div>
  )
}
