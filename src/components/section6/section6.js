import React from 'react'
import "./section6.css"

export default function ExpertsDoWhat() {
  return (
    <div className='p-9'>
      <hr className='hr-style'/>
      <h1 className='text-4xl text-center'>For all those SMART Ubergrads who would let the <span style={{color:'rgb(243, 102, 56)'}}> EXPERTS </span>do what they<br></br> do BEST!</h1>
      <div className=' flex flex-col space-y-5 p-10 ml-12 font-semibold text-lg tracking-tight'>
      <div>
      <p>Having questions? No issues. Our expert Counsellors are specially equipped and trained to answer all your questions / doubts<br></br> patiently and to your complete satisfaction.</p>
       </div>
       <div>
      <p>Your<span style={{color:'rgb(243, 102, 56)'}}> ‘Dedicated Counsellor‘ </span> would help you in the entire process – from ‘shortlisting’ universities to finally ‘enrolling’ at your dream <br></br> university (just a Phone call / WhatsApp / Email / SMS away).
      </p>
      </div>
      <div>
      <ul className='list-disc leading-10'>
        <li> <span style={{color:'rgb(243, 102, 56)'}}>Profile Evaluation </span>- suggest a customised & personalised “Best-Fit” University shortlist matching your profile (considering more than <br></br> 42 parameters).</li>
        <li>
       <span style={{color:'rgb(243, 102, 56)'}}> SoPs, LoRs, Resumes </span> - proofreading, sharing samples, etc.
        </li>
        <li>
       <span style={{color:'rgb(243, 102, 56)'}}> Information </span> on Application Fee waivers, GRE / IELTS waivers, deadlines, etc.
        </li>
        <li><span style={{color:'rgb(243, 102, 56)'}}>University Applications</span>- help with documentation, application form filling, special requirements, etc.</li>
        <li><span style={{color:'rgb(243, 102, 56)'}}>Tracking</span> and follow-up with University Partners for Offer/Admit, I-20, CAS, COE, etc.</li>
        <li> <span style={{color:'rgb(243, 102, 56)'}}>Visa Process</span> - help with documentation, application form filling, mock one-on-one sessions, etc.</li>
      </ul>
      </div>
      <div className='flex justify-center'>
      <button style={{backgroundColor:'rgb(243, 102, 56)'}} className="flex  items-center text-md bg-orange-500  text-white font-400 py-2 px-4 rounded-full text-center">TALK TO THE UBERGRAD COUNSELLOR</button>
      </div>
      </div>
    </div>

  )
}
