import { useContext, useState, createContext } from "react";
import axios from 'axios';

const table = {
    sports: 21,
    history: 23,
    politics: 24
};

const AppContext = createContext();

const AppProvider = ({children}) => {
    //States: waiting, loading, questions, index, correct answers, error, 
    //quiz and modal to see if it's open or closed


    //waiting
    const [waiting, setWaiting] = useState(true);
    //loading
    const [loading, setLoading] = useState(false);
    //questions
    const [questions, setQuestions] = useState([])
    //index
    const [index, setIndex] = useState(0)
    //correct answers
    const [correct, setCorrect] = useState(0)
    //error
    const [error, setError] = useState(false)
    //quiz
    const [quiz, setQuiz] = useState({
        amount: 10,
        category: 'sports',
        difficulty: 'easy'
    })
    //modal
    const [modal, setModal] = useState(false)

    //create a method to get the data from API
    const fetchQuestions = async(url) => {
        setLoading(true);
        setWaiting(false);
        const response = await axios(url).catch((err) => console.log(err))
        if (response){
            const data = response.data.results;
            if(data.length > 0) {
                setQuestions(data);
                setLoading(false);
                setWaiting(false);
                setError(false);
            } else{
                setWaiting(true);
                setLoading(true);
            }
        } else{
            setWaiting(true);
        }
    };
//handle modal 
    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
        setWaiting(true);
        setCorrect(0);
    };

//handle data

    const nextQuestion = () => {
        setIndex((oldIndex) =>{
            const index = oldIndex +1;
            if (index > questions.length -1){
                openModal()
                return 0;
            } else {
                return index;
            }
        });
    };


    //check the answers

const checkAnswers = (value) => {
    if(value) {
        setCorrect((oldState) => oldState +1);
    }
    nextQuestion();
};

const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

const handleSubmit = (e) => {
        e.preventDefault();
        //detructure amount, difficulty and category
        const {amount, difficulty, category} = quiz;
        const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`
        fetchQuestions(url)
    }
//Using Trivial API to get the data - generate url on website to fetch the data
//pass on all the data we created
    return (
        <AppContext.Provider value={{
            waiting, loading, questions, index, correct, error, modal, nextQuestion, checkAnswers, closeModal, quiz, handleChange, handleSubmit
        }}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };