import React from 'react'

export default function OptionsPage({question, dispatch, answer}) {
    const hasAnswer=answer !==null;
  return (
    <div className='mt-4 row justify-content-center'>
            <div className='col-8'>
                    <table className='table table-borderless'>
                        <tbody>
                        {
                            question.options.map((op,i)=>(
                                    <tr key={op}>
                                        <td className={`d-grid my-tran ${hasAnswer && i===answer ? "ps-5" : "px-5"}`}>
                                            <button disabled={hasAnswer} 
                                            className={
                                                    `btn btn-secondary my-tran
                                                    ${hasAnswer && i===answer ? "ms-5" : ""}
                                                    ${hasAnswer && i===answer && i===question.correctOption ? "btn-success" : ""}
                                                    ${hasAnswer && i !==answer && i===question.correctOption ? "btn-success" : ""}
                                                    ${hasAnswer && i ===answer && i !== question.correctOption ? "btn-danger" : ""}
                                                    `
                                                }                                          
                
                                             onClick={()=>dispatch({type:"newAnswer", payload: i})}>{op}</button>
                                        </td>
                                    </tr>
                            ))
                        }
                        </tbody>
                    </table>
            </div>
    </div>

  )
}
