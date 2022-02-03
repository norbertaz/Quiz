import React from "react";

const StartingGame = ({handleStartGame, setCategoryvalue, setDifficultyvalue}) => (
    
    <div className="start-game-container bg-blue-600 p-20 shadow-md rounded-lg text-center flex flex-wrap justify-around">
        <h1 className="mb-8 text-8xl w-full">Quiz Game</h1>
        <div className="category-wrapper flex flex-col items-center w-1/2">
            <label htmlFor="category">Category:</label>
            <select name="category" id="category" className="text-white text-center w-1/2 bg-blue-700 rounded outline-none appearance-none" onChange={(e) => setCategoryvalue(e.target.value)}>
                <option categoryvalue="9" value="9">General knowledge</option>
                <option categoryvalue="18" value="18">Science - Computers</option>
                <option categoryvalue="17" value="17">Science & Nature</option>
                <option categoryvalue="21" value="21">Sport</option>
                <option categoryvalue="23" value="23">History</option>
                <option categoryvalue="25" value="25">Art</option>
                <option categoryvalue="20" value="20">Mythology</option>
                <option categoryvalue="28" value="28">Vehicles</option>
            </select>
        </div>
        <div className="difficulty-wrapper flex flex-col items-center w-1/2">
            <label htmlFor="difficulty">Difficulty:</label>
            <select name="difficulty" id="difficulty" className="text-white text-center w-1/2 bg-blue-700 rounded outline-none appearance-none" onChange={(e) => setDifficultyvalue(e.target.value)} >
                <option difficultyvalue="easy" value="easy">Easy</option>
                <option difficultyvalue="medium" value="medium">Medium</option>
                <option difficultyvalue="hard" value="hard">Hard</option>
            </select>
        </div>
        
        <button onClick={handleStartGame} className="start bg-green-500 rounded-lg px-20 py-5 text-xl font-bold mt-10">START</button>
    </div>
)

export default StartingGame