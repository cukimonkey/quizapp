import './App.css';
 import SetupForm from './Form/SetupForm';
import Modal from './Modal/Modal';
import Loading from './Loading/LoadingScreen';
import { useGlobalContext } from './Context/Context';
import SetupForm from './Form/SetupForm';

function App() {
const {waiting, loading, questions, index, correct, nextQuestion, checkAnswer} = useGlobalContext;

if(waiting){
  return (<SetupForm />)
}
if(loading){
  return (<Loading />)
}
//now refactor our answers we receiving

const {incorrect_answers, correct_answer, question} = question[index];
let answers = [...incorrect_answers];
const tempIndex = Math.floor(Math.random()*4);
if (tempIndex === 3) {
  answers.push(correct_answer);
} else {
  answers.push(answers[tempIndex]);
  answers[tempIndex] = correct_answer;
}


  return (
    //conditionally render components
    <main className="App">
        <section className='quiz'>
          <p className='correct-answers'>Correct answers: {correct}/{index}</p>
          <article className='container'>
            <h2 dangerouslySetInnerHTML={{__html:question}}/>
            <div className='btn-container'>
              {answers.map((answer, index) => {
                retunr (
                  <button 
                  key={index} 
                  className='answer-btn' 
                  onClick={()=> checkAnswer(correct_answer === answer)}
                  dangerouslySetInnerHTML={{__html:answer}} 
                  />
                )
              })}
            </div>
          </article>
          <button className='next-question'>Next Question</button>
        </section>
    </main>
  );
}

export default App;
