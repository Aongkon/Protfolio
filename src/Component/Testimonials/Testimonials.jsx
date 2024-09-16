import "./Testimonial.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import profilePic1 from '../img/profile1.jpg'
import profilePic2 from '../img/profile2.jpg'
import profilePic3 from '../img/profile3.jpg'
import profilePic4 from '../img/profile4.jpg'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css'
// import 'swiper/css'

const Testimonials = () => {

  const clients = [
    {
      img: profilePic1,
      review:
        " Musks friends expressed scepticism about the naming of the online bank, fearing it might have been mistaken for a pornographic site. Musk brushed off their concerns, emphasizing that the name was meant to be straightforward, memorable, and easy to type."
    },

    {
      img: profilePic2,
      review:
        " Musks friends expressed scepticism about the naming of the online bank, fearing it might have been mistaken for a pornographic site. Musk brushed off their concerns, emphasizing that the name was meant to be straightforward, memorable, and easy to type."
    },

    {
      img: profilePic3,
      review:
        " Musks friends expressed scepticism about the naming of the online bank, fearing it might have been mistaken for a pornographic site. Musk brushed off their concerns, emphasizing that the name was meant to be straightforward, memorable, and easy to type."
    },

    {
      img: profilePic4,
      review:
        " Musks friends expressed scepticism about the naming of the online bank, fearing it might have been mistaken for a pornographic site. Musk brushed off their concerns, emphasizing that the name was meant to be straightforward, memorable, and easy to type.",
    }
  ]


  return (
    <div className='t-wrapper'>
      <div className='t-heading'>
        <span>Clients always get </span>
        <span>Exceptional Works</span>
        <span> from me...</span>

        <div className='blur t-blur2' style={{ background: 'var(--purple)' }}></div>
        <div className='blur t-blur1' style={{ background: 'skyblue' }}></div>
      </div>

      {/* slider part */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((clients, index) => {
          return (
            <SwiperSlide key={index}>

              <div className='testimonial'>
                <img src={clients.img} alt='' />
                <span>{clients.review}</span>
              </div>

            </SwiperSlide>
          );
        })}
      </Swiper>

    </div>
  )
}

export default Testimonials
