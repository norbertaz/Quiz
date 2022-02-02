import React from "react";

const Button = ({answer, className}) => (
    <div className={`bg-blue-600  p-6 rounded-lg shadow-md font-semibold text-center ${className}`}>{answer}</div>
)

const Questionaire = ({handleAnswer,
    data : {question, correct_answer, incorrect_answers, category},
}) =>{
    const shuffledAnswer = [correct_answer, ...incorrect_answers].sort(()=> Math.random() - 0.5)
    return (
        <div>
            <div className='bg-blue-600 p-20 shadow-md rounded-lg text-center'>
                <div>Question: 1/6</div>
                <div>Category: {category}</div>
                <h2 className='text-3xl' dangerouslySetInnerHTML={{__html: question}}/>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6">
                <Button className={correct_answer === shuffledAnswer[0] ? 'bg-green-400' : ''} onClick={() => handleAnswer(shuffledAnswer[0])} answer={shuffledAnswer[0]}/>
                <Button className={correct_answer === shuffledAnswer[1] ? 'bg-green-400' : ''} onClick={() => handleAnswer(shuffledAnswer[1])} answer={shuffledAnswer[1]}/>
                <Button className={correct_answer === shuffledAnswer[2] ? 'bg-green-400' : ''} onClick={() => handleAnswer(shuffledAnswer[2])} answer={shuffledAnswer[2]}/>
                <Button className={correct_answer === shuffledAnswer[3] ? 'bg-green-400' : ''} onClick={() => handleAnswer(shuffledAnswer[3])} answer={shuffledAnswer[3]}/>
                {/* <div className='bg-blue-600  p-6 rounded-lg shadow-md font-semibold'>{incorrect_answers[0]}</div>
                <div className='bg-blue-600  p-6 rounded-lg shadow-md font-semibold'>{incorrect_answers[1]}</div>
                <div className='bg-blue-600  p-6 rounded-lg shadow-md font-semibold'>{incorrect_answers[2]}</div> */}
            </div>
        </div>
    )
}


export default Questionaire