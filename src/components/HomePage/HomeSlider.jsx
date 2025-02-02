import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

export default function HomeSlider() {
    return (
        <div className="homeSlider py-4">
            <div className="container">
                <Swiper
                    loop={ true }
                    spaceBetween={ 10 }
                    navigation={ true }
                    modules={ [Navigation, Autoplay] }
                    autoplay={ {
                        delay: 2500,
                        disableOnInteraction: false,
                    } }
                    className="sliderHome"
                >
                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img
                                src="https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_98367d336b.png"
                                alt="Slider"
                                className="w-full"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img
                                src="https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_98367d336b.png"
                                alt="Slider"
                                className="w-full"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img
                                src="https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_98367d336b.png"
                                alt="Slider"
                                className="w-full"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img
                                src="https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_98367d336b.png"
                                alt="Slider"
                                className="w-full"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img
                                src="https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_98367d336b.png"
                                alt="Slider"
                                className="w-full"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img
                                src="https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_98367d336b.png"
                                alt="Slider"
                                className="w-full"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img
                                src="https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_98367d336b.png"
                                alt="Slider"
                                className="w-full"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img
                                src="https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_98367d336b.png"
                                alt="Slider"
                                className="w-full"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img
                                src="https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_98367d336b.png"
                                alt="Slider"
                                className="w-full"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img
                                src="https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_98367d336b.png"
                                alt="Slider"
                                className="w-full"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}