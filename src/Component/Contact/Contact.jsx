import "./Contact.css"
const Contact = () => {
  return (
    <div className='contact-from'>

       <div className='c-left'>
          <div className='awesome' >
            <span>Get in touch</span>
            <span>Contact me</span>

            <div className='blur con-blur1' style={{ background:'skyblue' }}>
            
            </div>   
          </div>
       </div>

        <div className='c-right'>
          <form>
             <input type='text' name='user_name' className='user' placeholder='Name' />
             <input type='email' name='user_email' className='user' placeholder='Email' />
             <textarea name='message' className='user' placeholder='Message' />
             
             <button className='button contact-button'>Send</button>
          </form>
          <div className='blur con-blur2' style={{ background: 'var(--purple)' }}></div>
        </div>
    </div>
  )
}

export default Contact
