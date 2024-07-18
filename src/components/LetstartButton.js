import React from 'react'

export default function LetstartButton({dispatch}) {
  return (
    <div>
            <button className='btn btn-outline-primary float-end' onClick={()=>dispatch({type: "newQuestion"})}>Let start</button>
    </div>
  )
}
