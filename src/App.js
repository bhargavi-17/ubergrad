import React from 'react'
import './App.css';
import Nav from './components/navbar/Navbar'
import Study from './components/section1'
import Why from './components/section2/section2'
import Eligible from './components/section4/EligibilityRequirements'
import Experts from './components/section6/section6'
import University from './components/section5/section5'
import More from './components/section3/section3'
import Footer from './components/footer/Footer'
import Foot from './components/Footerresponsive'
import MediaQuery from 'react-responsive'
import Testp from './components/Test'


function App() {
  return (
    <div className="App">
      {/* folder are created for respective sections along with js and css files 
        write the code in js files 
        call your component according to the below comments */}
       
      
      {/* call your navbar component here */}
      <Nav />

      {/* call 'Why Study in the USA?' section here...! */}
      <Study />

      {/* call Why choose the USA to accomplish your education goals? section here...! */}
      <Why />

      {/* call More stats on the USA and its education section here ....! */}
      <More />
      
      {/* call Eligibility Requirements here ....! */}
      <Eligible />

      {/* call  Ubergrads admitted into universities of USA section here....! */}
      <University />

      {/* call For all those SMART Ubergrads who would let the EXPERTS do what they do BEST! section here...! */}
      <Experts />

      {/* call footer section here....! */}
      <MediaQuery query="(max-width: 993px)">
      <Foot />
      </MediaQuery>
       <Footer /> 
       

    </div>
  );
}

export default App;
