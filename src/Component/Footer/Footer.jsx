import "./Footer.css"
import Wave from '../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'


const Footer = () => {
  return (
    <div className='footer' style={{  }}>
        <img src={Wave} style={{ width:'100%', }} alt=''/>

        <div className='f-content'>
            <span>jmaongkon733@gmail.com</span>
            <div className='f-icons'>
                <Insta color='white' size='3rem'/>
                <Facebook color='white' size='3rem'/>
                <Github color='white' size='3rem'/>
                
            </div>
        </div>
    </div>
  )
}

export default Footer
