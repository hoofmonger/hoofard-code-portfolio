import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-[#0a192f] w-full h-screen text-[#7b81f2] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/18a11af0-8201-40c4-ae5e-de2fcd41de21" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#f2ec7b]'> 
                Contact 
                </p>
                <p className='py-4 text-lg font-semibold'>
                    Submit the form below or shoot me an email - hoofardcode@gmail.com, or call/text me at 2149572404
                </p>
                <a className='text-lg py-2 font-semibold sm:hidden' href="https://drive.google.com/file/d/1xuKqkrkP0lworyFprc9FHr1dlbApcWx7/view?usp=drive_link"> click here for my resume</a>
                </div>
                <input className='my-4 p-2 bg-slate-100'type="text" name="name" placeholder='Name' />
                <input className='my-4 p-2 bg-slate-100' type="text" name="email" placeholder='Email' />
                <textarea className='bg-slate-100 p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-[#7b81f2] border-2 hover:bg-[#f2ec7b] hover:border-[#f2ec7b] hover:font-bold px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            
        </form>
    </div>
  )
}

export default Contact