import './App.css';
import SetupForm from './Form/SetupForm';
import Modal from './Modal/Modal';
import Loading from './Loading/LoadingScreen';

function App() {
  return (
    <div className="App">
      <SetupForm />
      <Modal />
      <Loading />
    </div>
  );
}

export default App;
