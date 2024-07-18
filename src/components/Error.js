import React from 'react'

export default function Error({error}) {
  return (
    <div className='alert alert-danger text-center mx-5 my-5'>
            <div>{error}</div>
    </div>
  )
}
