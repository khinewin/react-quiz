import { useEffect, useReducer } from 'react';
import Welcome from './components/Welcome';
import ErrorPage from "./components/Error"
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"
import LetstartButton from './components/LetstartButton';
import QuestionPage from './components/Question';
import NextButton from './components/NextButton';
import FinishPage from './components/FinishPage';
import Timer from './components/Timer';

const initialState={
      status: "loading", //ready, active, error, finished
      questions: [],
      error: null,
      index:0,
      answer: null,
      points: 0,
      maxPoints: 0,
      timeRemaining: 10,
      iniTime: 10
}
const reducer=(state, action)=>{
      switch(action.type){
          case "gettingData":
            return{
              ...state,
              status: "ready",
              questions: action.payload,
              maxPoints : action.payload.reduce((prev, cur)=>prev + cur.points,0)
            }
            case "gettingError":
              return {
                ...state,
                status: "error",
                error: action.payload
              }
              case "newQuestion":
                return{
                  ...state,
                  status: "active"
                }
              case "newAnswer":
                const q=state.questions.at(state.index);
                return {
                  ...state,
                  answer: action.payload,
                  points : action.payload === q.correctOption ? q.points + state.points : state.points
                }  
              case "nextQuestion":
                return{
                  ...state,
                  index: state.index + 1,
                  answer: null,
                  timeRemaining : state.iniTime
                }
                case "finishQuestion":
                return {
                  ...state,
                  status: "finished"
                }
                case "restartQuiz":
                  return{
                    ...state,
                    status: "ready",
                    points: 0,
                    index: 0,
                    answer: null,
                    timeRemaining: state.iniTime
                  }
                case "setTimeout":
                return{
                    ...state,
                    timeRemaining : state.timeRemaining > 0 ? state.timeRemaining - 1 : state.iniTime,                   
                    status :  state.questions.length ===(state.index +1) && state.timeRemaining ===0 ? "finished" : state.status,
                    index : state.timeRemaining === 0 ? state.index + 1 : state.index,
                }
          default:
             throw new Error("Unknown action.");
      }
}

function App() {
  const[{status, questions, error, index, answer, points, maxPoints, timeRemaining}, dispatch]=useReducer(reducer, initialState)
  const numQuestion=questions.length;
  useEffect(()=>{
      fetch("http://localhost:9000/questions")
      .then((res)=>res.json())
      .then((data)=>dispatch({type: "gettingData", payload: data}))
      .catch((err)=>dispatch({type: "gettingError", payload: "Something went wrong while fetching data from server."}))
  },[])
  return (
    <div className="container">
        <div className='row justify-content-center my-5'>
            <div className='col-sm-8'>
                  <div className='card'>
                         <div className='card-body'>
                         <h1 className='text-center'>React Quiz Lesson.</h1>
                          {
                            status==="ready" && 
                            <>
                                 <Welcome numQuestion={numQuestion} />
                                 <LetstartButton dispatch={dispatch} />
                            </>
                          }
                          {status==="error" && <ErrorPage error={error} />}
                          {
                            status==="active" &&
                              <>
                                  <QuestionPage questions={questions} index={index} dispatch={dispatch} answer={answer} points={points} maxPoints={maxPoints} />
                                  <Timer timeRemaining={timeRemaining} dispatch={dispatch} />
                                  <NextButton answer={answer} dispatch={dispatch} index={index} numQuestion={numQuestion}/>
                              </>
                          }
                          {
                            status === "finished" && <FinishPage points={points} maxPoints={maxPoints} index={index} numQuestion={numQuestion} dispatch={dispatch} />
                          }
                         </div>
                  </div>
            </div>
        </div>
    </div>
  );
}

export default App;
