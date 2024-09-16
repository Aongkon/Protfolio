import './Navbar.css'

const Navbar = () => {
    return (
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className='n-name'>Andrew</div>
               
            </div>
            <div className='n-right'>
                <div className='n-list'>
                    <ul>
                       <a className="link_css"><li>Intro</li></a>
                       <a className="link_css"><li>Experience</li></a> 
                       <a className="link_css"><li>Works</li></a>  
                       <a className="link_css"><li>Portfolio</li></a> 
                       <a className="link_css"> <li>Testimonials</li></a>
                    </ul>
                </div>
                <button className='button n-button'>
                        Contact
                    </button>
            </div>
        </div>
    )
}

export default Navbar
