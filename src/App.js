import './App.css';
// import SetupForm from './Form/SetupForm';
// import Modal from './Modal/Modal';
// import Loading from './Loading/LoadingScreen';

function App() {
  return (
    //conditionally render components
    <main className="App">
        <section className='quiz'>
          <p className='correct-answers'>Correct answers: 3</p>
          <article className='container'>
            <h2>Text</h2>
            <div className='btn-container'></div>
          </article>
          <button className='next-question'>Next Question</button>
        </section>
    </main>
  );
}

export default App;
