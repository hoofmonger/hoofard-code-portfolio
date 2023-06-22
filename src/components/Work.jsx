import React from 'react'
import dayPlanner from '../assets/DayPlanner.JPG'
import Homepage from '../assets/Homepage-Project.JPG'
import mathQuiz from '../assets/Math-Quiz.JPG'
const Work = () => {
  return (
    <div name='work'className='w-full md:h-screen text-[#7b81f2] bg-[#0a192f]'>
      {/*container div*/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 '>
          <p className='text-4xl font-bold inline border-b-4 border-[#f2ec7b]'>
            Work
          </p>
          <p className='py-6 text-xl'>
            Check out my recent work!!
          </p>
        </div>
        {/* grid container*/}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/*card container*/}
          <div style={{backgroundImage:`url(${mathQuiz})`}} 
          className='shadow-lg shadow-[#f2ec7b] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/*hover effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider'>
                Math Quiz Application
              </span>
              <div className='pt-8 text-center'>
                <a href="https://hoofmonger.github.io/coding-quiz/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/hoofmonger/coding-quiz">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/*card container*/}
          <div style={{backgroundImage:`url(${Homepage})`}} 
          className='shadow-lg shadow-[#f2ec7b] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/*hover effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider'>
                Math Quiz Application
              </span>
              <div className='pt-8 text-center'>
                <a href="https://hoofmonger.github.io/coding-quiz/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/jpolmon/NewTabHomepage">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/*card container*/}
          <div style={{backgroundImage:`url(${dayPlanner})`}} 
          className='shadow-lg shadow-[#f2ec7b] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/*hover effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold tracking-wider'>
                Math Quiz Application
              </span>
              <div className='pt-8 text-center'>
                <a href="https://hoofmonger.github.io/day-planner/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/hoofmonger/day-planner">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Work