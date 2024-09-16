import "./Services.css"
import Glasses from '../img/glasses.png'
import Heartemoji from '../img/heartemoji.png'
import Humble from '../img/humble.png'
import Card from "../Card/Card"
import {motion} from 'framer-motion'
// import Resume from './resume.pdf'


const Services = () => {

  const transition = {duration: 2, type: 'spring'}

  return (
    <div className='services'>
    {/* services left */}
      <div className='awesome'>
        <span>My awesome</span>
        <span>services</span>
        <span>
          Mobile phones are always within arms reach. In fact, if we leave
           <br/>
          home without it, we will return to get it.
         </span>

         {/* <a href={Resume} download></a> */}
         <button className='button s-button'>Download CV</button>
         

          <div className='blur s-blur1' style={{ background:'#ABF1FF94' }}></div>          
      </div>

       {/* services right */}
      <div className='cards'>

          <motion.div
          initial={{ left: '25rem' }}
          whileInView={{ left: '18rem' }}
          transition={transition}

           style={{left:'12rem'}}>
            <Card
              emoji={Heartemoji}
              heading={'Design'}
              detail={"Figma, Sketch, Photoshop, Adobe Xd"}
            />
          </motion.div>

          {/* second card */}

          <motion.div
          initial = {{ left: '-7rem'}}
          whileInView = {{  left: '2rem' }}
          transition={transition}
           style={{ top:'12rem', left:'-4rem' }}>
            <Card
              emoji={Glasses}
              heading={"Developer"}
              detail={'Html, Css, JavaScript, React'}
              />
          </motion.div>

          {/* Third card */}

          <motion.div
           initial={{ left: '25rem' }}
           whileInView={{ left: '18rem' }}
           transition={transition}
           style={{ top:'19rem', left:'12rem' }}>
            <Card 
              emoji={Humble}
              heading={'UI/UX'}
              detail={"Mobile phones are always within arm's reach."}
            />
          </motion.div>
          <div className='blur s-blur2' style={{ background:'var(--purple)' }}></div>
      </div>
    </div>
  )
}

export default Services
