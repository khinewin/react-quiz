import React from 'react'
import OptionsPage from './OptionsPage';

export default function Question({questions, index, dispatch, answer, points, maxPoints}) {
    const q=questions[index];
  return (
    <div className='my-5 text-center'>
            <div className='row mb-2'>
                    <div className='col-12'>
                            <progress style={{width: "100%"}} value={index + 1} max={questions.length} />
                    </div>
                    <div className='col-6'>
                            Questions <strong>{index +1} / {questions.length}</strong>
                    </div>
                    <div className='col-6'>
                            Points <strong> {points} / {maxPoints}</strong>
                    </div>
            </div>
            <h5>{q.question}</h5>
            <OptionsPage question={q} dispatch={dispatch} answer={answer}/>
    </div>
  )
}
