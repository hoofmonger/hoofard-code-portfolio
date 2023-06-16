import React from 'react'
import dayPlanner from '../assets/DayPlanner.JPG'
import Homepage from '../assets/Homepage-Project.JPG'
import mathQuiz from '../assets/Math-Quiz.JPG'
const Work = () => {
  return (
    <div className='w-full md:h-screen text-[#7b81f2] bg-[#0a192f]'>
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
          <div className='shadow-lg shadow-[#f2ec7b] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/*hover effects*/}
            <div>
              <span>

              </span>
              <div>
                <a href="/">
                  <button></button>
                </a>
                <a href="/">
                  <button></button>
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