import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import BannerBox from "./BannerBox";

export default function AdsBannerSlider(props) {
    return (
        <div className="py-5 w-full">
            <Swiper
                slidesPerView={ props.items }
                spaceBetween={ 10 }
                navigation={ true }
                modules={ [Navigation] }
                className="sliderAdsBanner"
            >
                <SwiperSlide>
                    <BannerBox
                        img={ "https://cdn2.fptshop.com.vn/unsafe/480x0/filters:quality(100)/H3_405x175_7142ce9204.png" }
                        link={ "/" }
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <BannerBox
                        img={ "https://cdn2.fptshop.com.vn/unsafe/480x0/filters:quality(100)/H3_405x175_7142ce9204.png" }
                        link={ "/" }
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <BannerBox
                        img={ "https://cdn2.fptshop.com.vn/unsafe/480x0/filters:quality(100)/H3_405x175_7142ce9204.png" }
                        link={ "/" }
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <BannerBox
                        img={ "https://cdn2.fptshop.com.vn/unsafe/480x0/filters:quality(100)/H3_405x175_7142ce9204.png" }
                        link={ "/" }
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <BannerBox
                        img={ "https://cdn2.fptshop.com.vn/unsafe/480x0/filters:quality(100)/H3_405x175_7142ce9204.png" }
                        link={ "/" }
                    />
                </SwiperSlide>

            </Swiper>
        </div>
    );
}