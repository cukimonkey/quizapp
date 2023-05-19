import { useContext, useState, createContext } from "react";
import axios from axios;

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
    const fetchQuestions = async() => {
        setLoading(true);
        setWaiting(false);
        const response = await axios('https://opentdb.com/api.php?amount=10').catch((err) => console.log(err))
        if (response){
            const data = response.data.results;
            if(data.length) {
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