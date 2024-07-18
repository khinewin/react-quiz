import React from 'react'

export default function FinishPage({points, maxPoints, index, numQuestion, dispatch}) {
    const percentage=Math.ceil((points / maxPoints) * 100);
  return (
    <div className='my-5'>
            <h5 className='text-center text-success'>You score <strong>{points}</strong> out of <strong>{maxPoints}</strong>/({percentage}%)</h5>
            <button className='btn btn-outline-primary float-end' onClick={()=>dispatch({type: "restartQuiz"})}>Restart quiz</button>
    </div>
  )
}
