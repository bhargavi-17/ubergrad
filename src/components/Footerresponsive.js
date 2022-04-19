import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div style={{backgroundColor:'rgba(0, 0, 0, 0.87)'}} className=' p-5'>
      <Accordion className=' border-amber-400 border rounded-md '>
        <AccordionSummary
        sx={{
            backgroundColor:'rgba(0, 0, 0, 0.87)'
        }}
          expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
          aria-controls="panel1a-content"
        >
          <Typography className='text-white' >About Ubergrad</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'rgba(0, 0, 0, 0.87)'}}>
          <Typography >
        <ul className='text-white text-base font-sans'>
        <li>About us</li>
        <li>contact us</li>
        <li>Terms of use</li>
        <li>Disclaimer</li>
        <li>Privacy policy</li>
      </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='bg-black border-amber-400 border'>
        <AccordionSummary
         sx={{
            backgroundColor:'rgba(0, 0, 0, 0.87)'
        }}
          expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='text-white' >Countries</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'rgba(0, 0, 0, 0.87)'}}>
          <Typography>
          <ul className='text-white text-base font-sans'>
          <li>Study in USA</li>
          <li>Study in UK</li>
          <li>Study in Austraila</li>
          <li>Study in Cannada</li>
          <li>Study in New Zealand</li>
          <li>Study in New Ireland</li>
        </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='bg-black border-amber-400 border'>
        <AccordionSummary
         sx={{
            backgroundColor:'rgba(0, 0, 0, 0.87)'
        }}
          expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='text-white' >Universities</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'rgba(0, 0, 0, 0.87)'}}>
          <Typography>
          <ul className='text-white text-base font-sans'>
          <li>Universities in the USA</li>
          <li>Universities in the UK</li>
          <li>Universities in the Cannada</li>
          <li>Universities in Austraila</li>
          <li>Universities in New Zealand</li>
          <li>Universities in Ireland</li>
        </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='bg-black border-amber-400 border rounded-md'>
        <AccordionSummary
         sx={{
            backgroundColor:'rgba(0, 0, 0, 0.87)'
        }}
          expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='text-white' >Exam</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'rgba(0, 0, 0, 0.87)'}}>
          <Typography>
        <ul className='text-white text-md font-sans'>
        <li>GRE</li>
        <li>IELTS</li>
        <li>TOFEL</li>
        <li>GMAT</li>
        <li>Dulingo</li>
        <li>PTE</li>
        </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
