import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import GraphQL from '../assets/GraphQL_Logo.svg.png'
import Github from '../assets/github.png'
import MongoDB from '../assets/mongo.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-[#707525]'>
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-[#7b81f2]  py-4'>
                    Skills
                </p>
                <p className='py-6'>
                    These are my primary technologies
                </p>
            </div>
            {/* Container for all icons*/}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
                <div className='shadow-md shadow-[#420a73] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML5 logo" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#420a73] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS logo" />
                    <p className='my-4'>Cascading Style Sheet</p>
                </div>
                <div className='shadow-md shadow-[#420a73] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Javascript} alt="Javascript logo" />
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#420a73] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React.js logo" />
                    <p className='my-4'>React.js</p>
                </div>
                <div className='shadow-md shadow-[#420a73] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={MongoDB} alt="MongoDB logo" />
                    <p className='my-4'>MongoDB</p>
                </div>
                <div className='shadow-md shadow-[#420a73] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="Github logo" />
                    <p className='my-4'>Github</p>
                </div>
                <div className='shadow-md shadow-[#420a73] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="Node.js logo" />
                    <p className='my-4'>Node.js</p>
                </div>
                <div className='shadow-md shadow-[#420a73] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GraphQL} alt="GraphQL logo" />
                    <p className='my-4'>GraphQL</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills