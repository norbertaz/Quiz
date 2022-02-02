import React, {useState, useEffect} from "react";
import { Questionaire, StartingGame } from "./components";

function App() {

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
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
        setQuestions(data.results)
      })
  }, [API_URL])


  const handleAnswer = (answer) => {
    setCurrentIndex(currentIndex + 1);
    if(answer === questions[currentIndex].correct_answer){
      setScore(score + 1)
    }

    if(currentIndex >= questions.length-1){
      setGameEnded(true)
    }
    //Check the answer

    //show next question

    //change question number
  }



  return !gameStarted ? <StartingGame handleStartGame={handleStartGame} setCategoryvalue={setCategoryValue} setDifficultyvalue={setDifficultyValue}/> : (gameEnded ? (
    <div className="text-4xl font-bold">
      <h2 className={`${score >= 4 ? 'text-green-500' : 'text-yellow-500'}`}>Your score: {score}</h2>
      </div>
  ) : (questions.length > 0 ? (
    <div className="container">
      <Questionaire data={questions[currentIndex]} handleAnswer={handleAnswer} currentIndex={currentIndex}/>
    </div>
  ) : (<h2 className='text-2xl text-white font-bold'>Hey... We're loading questions</h2>)));
}

export default App;
