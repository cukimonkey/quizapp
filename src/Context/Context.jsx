import { useContext, useState, createContext } from "react";


const AppContext = createContext();

const AppProvider = () => {
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

//Using Trivial API to get the data - generate url on website to fetch the data
    
    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export default {AppContext, AppProvider};