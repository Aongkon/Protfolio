
import './Intro.css'
import Github from '../img/github.png'
import Linkedin from '../img/linkedin.png'
import Instagram from '../img/instagram.png'
import Vector1 from '../img/Vector1.png'
import Vector2 from '../img/Vector2.png'
import boy from '../img/boy.png'
import Thumbup from '../img/thumbup.png'
import Crown from '../img/crown.png'
import Glassesimoji from '../img/glassesimoji.png'
import Floating from '../FloatingDiv/Floating'
import {motion} from 'framer-motion'

const Intro = () => {

    const transition = {duration:2, type:'spring'};



    return (
        <div className='intro'>
            <div className='i-left'>
                <div className='i-name'>
                    <span>Hi! I Am</span>
                    <span>Andrew Thomas</span>
                    <span>Frontend Developer with high level experience web designing and development, producting and Quality work.</span>
                    <button className='button i-button'>Hire me</button>
                    <div className='i-icons'>
                        <img src={Github} alt='' />
                        <img src={Linkedin} alt='' />
                        <img src={Instagram} alt='' />
                    </div>
                </div>
            </div>


            <div className='i-right'>
                <img src={Vector1} alt='' />
                <img src={Vector2} alt='' />
                <img src={boy} alt='' />
                <motion.img
                initial = {{ left: '-36%'}}
                whileInView = {{  left: '-24%' }}
                transition = {transition}

                 src={Glassesimoji} alt=''/>
                

                <motion.div
                initial={{ top:'-4%', left: '74%'}}
                whileInView={{ left: '68%' }}
                transition={transition}
                 style={{ top:'-4%', left:'68%' }}>

                    <Floating image={Crown} text1='Web' text2='Developer'/>
                </motion.div>


                <motion.div
                initial={{ top: '23rem', left:'9rem' }}
                whileInView={{ left: '0rem' }}
                transition={transition}
                 style={{ top:'23rem', left:'0rem' }}>

                    <Floating image={Thumbup} text1='Best Design' text2='Award'/>
                </motion.div>

                {/* Blur divs */}
                <div className='blur' style={{ background:'rgb(236, 210, 255)' }}></div>
                <div className='blur'
                 style={{ 
                    background:'#C1F5FF', 
                    top:'17rem', 
                    left:'-9rem',
                    width:'21rem',
                    height:'11rem'
                     }}></div>

            </div>
        </div>
    )
}

export default Intro

