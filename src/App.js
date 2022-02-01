import React from "react";

const API_URL = 'https://opentdb.com/api.php?amount=6'

function App() {
  return (
    <div className="container">
      <div className='bg-blue-600 p-20 shadow-md rounded-lg '>
        <div>Question x/6</div>
        <div>Category</div>
        <h2 className='text-3xl'>
        This is the question box
        </h2>
      </div>
      <div className="flex flex-wrap mt-4 justify-between content-between">
        <div className='bg-blue-600 w-2/5 p-4 rounded-lg shadow-md font-semibold mb-4'>Answer 1</div>
        <div className='bg-blue-600 w-2/5 p-4 rounded-lg shadow-md font-semibold mb-4'>Answer 2</div>
        <div className='bg-blue-600 w-2/5 p-4 rounded-lg shadow-md font-semibold'>Answer 3</div>
        <div className='bg-blue-600 w-2/5 p-4 rounded-lg shadow-md font-semibold'>Answer 4</div>
      </div>
    </div>
  );
}

export default App;
