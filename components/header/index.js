import React from "react";
import HeaderCategories from "./header-categories";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import SwiperItem from "./swiper-item";
import { FEATURED_ITEMS } from "../../constants";
import { HeaderContainer } from "../../elements";

const Header = () => {
  SwiperCore.use([Autoplay]);

  return (
    <HeaderContainer>
      <HeaderCategories />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="swiper"
        direction="horizontal"
      >
        {FEATURED_ITEMS.map((item) => (
          <SwiperSlide key={item.id}>
            <SwiperItem
              title={item.title}
              text={item.text}
              img={item.img}
              price={item.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </HeaderContainer>
  );
};

export default Header;
