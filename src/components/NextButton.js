import React from 'react'

export default function NextButton({answer, dispatch, index, numQuestion}) {
    if(answer === null) return null;
    if((index + 1) < numQuestion){
        return (
            <div>
                <button className='btn btn-outline-primary float-end' onClick={()=>dispatch({type:"nextQuestion"})}>Next</button>
            </div>
        )
    }
    if((index + 1) === numQuestion){
        return (
            <div>
                <button className='btn btn-outline-primary float-end' onClick={()=>dispatch({type: "finishQuestion"})}>Finish</button>
            </div>
        )
    }
    
}
