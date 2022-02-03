import React, {useState, useEffect} from "react";
import { Questionaire, StartingGame } from "./components";

function App() {

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false)
  const [gameEnded, setGameEnded] = useState(false);

  const [gameStarted,setGameStarted] = useState(false);
  const [categoryValue, setCategoryValue] = useState("")
  const [difficultyValue, setDifficultyValue] = useState("")


  const handleStartGame = () => {
    setCategoryValue(categoryValue);
    setDifficultyValue(difficultyValue);
    return setGameStarted(true)
  }
  
  let API_URL = `https://opentdb.com/api.php?amount=6&type=multiple&category=${categoryValue}&difficulty=${difficultyValue}`
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then ((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort( () => Math.random() - 0.5),
        }))
        setQuestions(questions)
      })
  }, [API_URL])


  const handleAnswer = (answer) => {
    // 
    if(!showAnswers){
      if(answer === questions[currentIndex].correct_answer){
        setScore(score + 1)
      }
    }


    if(currentIndex >= questions.length-1){
      setGameEnded(true)
    }
    setShowAnswers(true)
    //My resolution 
      //   if(answer === questions[currentIndex].correct_answer){
      //     setScore(score + 1)}
      // setShowAnswers(true)
      // setTimeout(()=> {
      //   setCurrentIndex(currentIndex + 1)
      //   setShowAnswers(false)
      // }, 2000)
      // if(currentIndex >= questions.length-1){
      //   setGameEnded(true)
      // }
    }
    const handleNextQuestion = () => {
      setShowAnswers(false)
      setCurrentIndex(currentIndex + 1);
    }



  return !gameStarted ? <StartingGame handleStartGame={handleStartGame} setCategoryvalue={setCategoryValue} setDifficultyvalue={setDifficultyValue}/> : (gameEnded ? (
    <div className="text-4xl font-bold">
      <h2 className={`${score >= 4 ? 'text-green-500' : 'text-yellow-500'}`}>Your score: {score}</h2>
      </div>
  ) : (questions.length > 0 ? (
    <div className="container w-full">
      <Questionaire data={questions[currentIndex]} showAnswers={showAnswers} handleAnswer={handleAnswer} currentIndex={currentIndex} handleNextQuestion={handleNextQuestion}/>
    </div>
  ) : (<h2 className='text-2xl text-white font-bold'>Hey... We're loading questions</h2>)));
}

export default App;
