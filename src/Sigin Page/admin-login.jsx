import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import nnnpcLogo from '../Components/Assets/nnpc-logo.png';
import "./signin.css"; // Import the CSS file with the styles

const LoginForm = () => {
  const [indexValue, setIndexValue] = useState(1);
  const swiperRef = useRef(null);

  const images = [
    {
      title: "Request New Tech",
      text: "Easily request the latest IT devices and systems to enhance your work efficiency.",
    },
    {
      title: "Upgrade Your Equipment",
      text: "Need better tools? Submit a request for upgraded IT equipment today.",
    },
    {
      title: "Boost Your Productivity",
      text: "Get the technology you need to work smarter and faster. Request now!",
    },
    {
      title: "Get the Latest Devices",
      text: "Access the newest IT devices by filling out a quick request form.",
    },
    {
      title: "Simplify Your Work",
      text: "Make your tasks easier with the right IT tools. Request new devices today.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <div className="login-container">
          <img src={nnnpcLogo} className="nnpc-login-logo" alt="NNPC Logo" />
          <div className="form">
            <h2>Welcome Back!</h2>
            <p>Please enter log in details below</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4">
              <label htmlFor="login_username">Username*</label>
              <input
                type="text"
                name="login_username"
                id="login_username"
                placeholder="Enter your username"
                required
              />
              <label htmlFor="login_password">Password*</label>
              <input
                type="password"
                name="login_password"
                id="login_password"
                placeholder="Enter your password"
                required
              />
              <input type="submit" className="button" value="Login" />
            </form>
          </div>
        </div>
      </div>

      <div className="slider">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[Pagination]}
          className="mySwiper"
          onSlideChange={(swiper) => setIndexValue(swiper.activeIndex + 1)}
          ref={swiperRef}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="slide">
                <div className="slide-text">
                  <h2>{img.title}</h2>
                  <p>{img.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LoginForm;