import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='bg-[#0a192f] w-full h-screen text-[#7b81f2]'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#f2ec7b]'> 
                Contact 
                </p>
                <p className='py-4'>
                    Submit the form below or shoot me an email - hoofardcode@gmail.com
                </p>
                <input className='my-4 p-2 bg-slate-100'type="text" name="name" placeholder='Name' />
                <input className='my-4 p-2 bg-slate-100' type="text" name="email" placeholder='Email' />
                <textarea className='bg-slate-100 p-2' name="message" rows="10" placeholder='Message'></textarea>
            </div>
        </form>
    </div>
  )
}

export default Contact