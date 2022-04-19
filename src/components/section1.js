import React from 'react'
import background from './images/study_in_usa.jpg'
import './section1.css'

function Studyusa() {
  return (

    <div id='nav1' className='flex flex-col justify-around p-12 mt-5' style={{backgroundImage:`url(${background})`,height:354}}>
     <h1 className='text-center text-white font-semibold font-sans text-4xl'>Why Study in the USA?</h1>
     <p className='text-white text-center font-semibold  tracking-wide text-xl '>The USA hosts 1.1+ million international students in its' world-class universities including 200,000+ Indian 
    <br></br> students</p>
     <div className='flex justify-center'>
      <button style={{backgroundColor:'rgb(243, 102, 56)'}} class="flex  items-center flex text-md text-white font-sans py-2 px-4 rounded-full text-center">Top universities in the USA</button>
      </div>   
       </div>
  )
}

export default Studyusa