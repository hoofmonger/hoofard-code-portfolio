import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] '>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4 '>
                    <p className='text-4xl inline font-bold border-b-4 border-[#7b81f2] text-[#f2ec7b]'>
                        About
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-3xl font-bold text-[#7b81f2]'>
                        <p>Hi. I'm James, nice to meet you.</p>
                        
                    </div>
                    <div>
                        <p className='text-[#f2ec7b] text-xl font-bold'>I'm passionate about building software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small businesses all the way up to large corperations. What would you do if you had an enthusiastic software engineer at your fingertips?</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About