import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";

export default function HomeCatergorySlider(props) {
    return (
        <div className="homeCatergorySlider pt-4 py-8">
            <div className="container">
                <Swiper
                    slidesPerView={ 8 }
                    spaceBetween={ 10 }
                    navigation={ true }
                    modules={ [Navigation] }
                    className="sliderHomeCategory"
                >
                    {
                        props?.data?.map((cat, index) => {
                            return (
                                <SwiperSlide key={ index }>
                                    <Link to={ cat?._id }>
                                        <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                                            <img
                                                src="https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/laptop_thumb_2_4df0fab60f.png"
                                                // {cat?.images[0]}
                                                className="w-[60px] transition-all"
                                            />
                                            <h3 className=" text-[15px] font-[500] mt-3">
                                                { cat?.name }
                                            </h3>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div >
    );
};
