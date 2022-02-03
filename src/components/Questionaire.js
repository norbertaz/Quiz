import React from "react";

const Questionaire = ({handleAnswer, currentIndex, showAnswers,handleNextQuestion,
    data : {question, correct_answer, answers, category},
}) => (
        <div className="text-center">
            <div className="mb-4 text-2xl">Question: {currentIndex + 1}/6</div>
            <div className='bg-blue-600 p-20 shadow-md rounded-lg text-center'>
                
                <div> <p className="font-bold inline-block">Category -</p> {category}</div>
                <h2 className='text-3xl' dangerouslySetInnerHTML={{__html: question}}/>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6 ">
                {answers.map((answer, idx) => {
                    const bgColor = showAnswers ? answer === correct_answer ? 'bg-green-500' : 'bg-red-500' : 'bg-blue-600'
                return(
                    <button 
                        key={idx}
                        className={` ${bgColor} duration-300 p-6 rounded-lg shadow-md font-semibold text-center `}
                        onClick={() => handleAnswer(answer)}
                        dangerouslySetInnerHTML={{__html: answer}}/>
                )})}
            </div>
                <button onClick={handleNextQuestion} className={`bg-green-500 opacity-0 rounded-lg py-5 shadow text-xl font-bold mt-10 duration-500 ${showAnswers ? "px-20 inline-block opacity-100" : ""}`}>Next</button>
        </div>
    );


export default Questionaire