import { useState } from "react";

const AppProvider = () => {
    //States: waiting, loading, questions, index, correct answers, error, quiz


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


    
    return (

    );
},