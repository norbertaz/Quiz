import React from "react";

const Questionaire = ({handleAnswer, currentIndex,
    data : {question, correct_answer, incorrect_answers, category},
}) =>{
    const shuffledAnswer = [correct_answer, ...incorrect_answers].sort( ()=> Math.random() - 0.5);
    return (
        <div className="text-center">
            <div className="mb-4 text-2xl">Question: {currentIndex + 1}/6</div>
            <div className='bg-blue-600 p-20 shadow-md rounded-lg text-center'>
                
                <div>Category: {category}</div>
                <h2 className='text-3xl' dangerouslySetInnerHTML={{__html: question}}/>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6">
                {shuffledAnswer.map(answer => (
                    
                
                <button 
                    className={`${correct_answer === answer ? 'bg-green-400' : 'bg-red-400'} bg-blue-600  p-6 rounded-lg shadow-md font-semibold text-center `}
                    onClick={() => handleAnswer(answer)}
                    dangerouslySetInnerHTML={{__html: answer}}/>
                ))}
            </div>
        </div>
    );
};


export default Questionaire