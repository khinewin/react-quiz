import React, { useEffect } from 'react'

export default function Timer({timeRemaining, dispatch}) {
    useEffect(()=>{
       let id= setInterval(() => {
            dispatch({type: "setTimeout"})
        }, 1000);
        return ()=>clearInterval(id)
    },[dispatch])
  return (
    <div>
            <button className='btn btn-outline-danger float-start'>00:{timeRemaining}</button>
    </div>
  )
}
