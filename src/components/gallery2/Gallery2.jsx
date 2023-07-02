import React, { useEffect } from "react";
import "./gallery_2.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import $ from "jquery";

$(window).ready(function () {
  $(".boton").wrapInner("<div class=botontext></div>");

  $(".botontext").clone().appendTo($(".boton"));

  $(".boton").append(
    '<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>'
  );

  $(".twist").css("width", "25%").css("width", "+=3px");
});

const Gallery_2 = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 200,
      easing: "ease-in-sine",
      delay: 10,
    });
  }, []);
  return (
    <section data-aos="fade-down-right" className="Web_Portfolio">
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h2>Portfolio</h2>
      <h5>Scroll the images to the left</h5>
      <p>&nbsp;</p>
      <div className="container_box">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={"/web/1.png"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"/web/2.png"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"/web/3.png"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"/web/4.png"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"/web/5.png"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"/web/6.png"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"/web/7.png"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"/web/8.png"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"/web/9.png"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"/web/10.png"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"/web/11.png"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"/web/12.png"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"/web/13.png"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"/web/14.png"} alt="" />
          </SwiperSlide>
        </Swiper>
        <p>&nbsp;</p>
        <p>&nbsp;</p>

        <a
          className="boton"
          href="https://ferdinandestoque.netlify.app/"
          target="_blank"
          style={{ color: "#000000" }}
          rel="noreferrer"
        >
          my old portfolio
        </a>

        {/* <button className="button1">
          <span>
            <a
              href="https://ferdinandestoque.netlify.app/"
              target="_blank"
              style={{ color: "#000000" }}
              rel="noreferrer"
            >
              my old portfolio
            </a>
          </span>
        </button> */}
      </div>
    </section>
  );
};

export default Gallery_2;
