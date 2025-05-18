import { useState } from 'react'

export const About = () => {
    const [showModal, setShowModal] = useState(false)
  return (
    <div className='fixed top-2 right-2 border rounded'>
        <button onClick={() => setShowModal(!showModal)} className='hover:drop-shadow-[0_0_4px_rgba(250,250,250,1)]'>about</button>
        {
            showModal && (
                <div className='flex justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-screen w-full  backdrop-blur-lg'>
                    <div className='relative rounded-2xl border aspect-square h-1/2 p-10'> 
                        <button className='absolute top-2 right-4  border rounded px-2 hover:drop-shadow-[0_0_4px_rgba(250,250,250,1)]' onClick={() => setShowModal(!showModal)}>x</button>
                        <h1 className='text-center font-bold mb-4 text-xl'>About</h1>
                        <p className='mb-2'>
                            This Accordion component page was built as part of the <a href="https://reactpractice.dev/exercise/build-an-accordion-component/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">React Practice</a> challenges.
                        </p>
                        <p className='mb-2'>
                            The app demonstrates a simple, interactive accordion UI built with React and Tailwind CSS. It showcases the use of React hooks for state management and dynamic rendering of content, providing a clean and accessible way to display FAQs or grouped information.
                        </p>
                        <p className='text-xs text-gray-400 mt-4 text-center'>
                        &copy; {new Date().getFullYear()} Adithya Venkatesh Pithani
                        </p>
                    </div>
                </div>
            )
        }
    </div>
  )
}
