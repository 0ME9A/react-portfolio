import React from 'react'
import './testimonials.css'

import Img1 from '../../assests/f1.jpg'
import Img2 from '../../assests/f2.jpg'
import Img3 from '../../assests/f3.jpg'
import Img4 from '../../assests/f4.jpg'
import Img5 from '../../assests/f5.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: Img1,
    name: 'MadStar',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi reprehenderit maiores fugiat in voluptatem necessitatibus deleniti. Voluptatem, eius id animi, quos aspernatur velit eligendi fuga dolor, asperiores totam ducimus atque.'
  },
  {
    avatar: Img2,
    name: 'Dethshot',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi reprehenderit maiores fugiat in voluptatem necessitatibus deleniti. Voluptatem, eius id animi, quos aspernatur velit eligendi fuga dolor, asperiores totam ducimus atque.'
  },
  {
    avatar: Img5,
    name: 'Wanda Maximoff',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi reprehenderit maiores fugiat in voluptatem necessitatibus deleniti. Voluptatem, eius id animi, quos aspernatur velit eligendi fuga dolor, asperiores totam ducimus atque.'
  },
  {
    avatar: Img3,
    name: 'Albert Parker',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi reprehenderit maiores fugiat in voluptatem necessitatibus deleniti. Voluptatem, eius id animi, quos aspernatur velit eligendi fuga dolor, asperiores totam ducimus atque.'
  },
  {
    avatar: Img4,
    name: 'Glaxy Buster',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi reprehenderit maiores fugiat in voluptatem necessitatibus deleniti. Voluptatem, eius id animi, quos aspernatur velit eligendi fuga dolor, asperiores totam ducimus atque.'
  },
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review}, index)=>{
            return (
              <SwiperSlide className='testimonial'>
                <div className="client_avtar">
                  <img src={avatar} alt={name}/>
                </div>
                  <h5 className='client_name'>{name}</h5>
                  <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default testimonials