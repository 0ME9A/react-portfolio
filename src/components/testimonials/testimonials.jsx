import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Img1 from "../../assets/f1.jpg";
import Img2 from "../../assets/f2.jpg";
import Img3 from "../../assets/f3.jpg";
import Img4 from "../../assets/f4.jpg";
import Img5 from "../../assets/f5.jpg";
import React from "react";
import "swiper/css/pagination";
import "./testimonials.css";
import "swiper/css";

const data = [
  {
    avatar: Img1,
    name: "MadStar",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi reprehenderit maiores fugiat in voluptatem necessitatibus deleniti. Voluptatem, eius id animi, quos aspernatur velit eligendi fuga dolor, asperiores totam ducimus atque.",
  },
  {
    avatar: Img2,
    name: "Dethshot",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi reprehenderit maiores fugiat in voluptatem necessitatibus deleniti. Voluptatem, eius id animi, quos aspernatur velit eligendi fuga dolor, asperiores totam ducimus atque.",
  },
  {
    avatar: Img5,
    name: "Wanda Maximoff",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi reprehenderit maiores fugiat in voluptatem necessitatibus deleniti. Voluptatem, eius id animi, quos aspernatur velit eligendi fuga dolor, asperiores totam ducimus atque.",
  },
  {
    avatar: Img3,
    name: "Albert Parker",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi reprehenderit maiores fugiat in voluptatem necessitatibus deleniti. Voluptatem, eius id animi, quos aspernatur velit eligendi fuga dolor, asperiores totam ducimus atque.",
  },
  {
    avatar: Img4,
    name: "Galaxy Buster",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi reprehenderit maiores fugiat in voluptatem necessitatibus deleniti. Voluptatem, eius id animi, quos aspernatur velit eligendi fuga dolor, asperiores totam ducimus atque.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={name} className="testimonial">
              <div className="client_avtar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
