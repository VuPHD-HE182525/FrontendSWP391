import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Button } from "@mui/material";

export default function HomeSliderV2() {
    return (
        <Swiper
            loop={ true }
            spaceBetween={ 30 }
            effect={ 'fade' }
            navigation={ true }
            pagination={ {
                clickable: true,
            } }
            autoplay={ {
                delay: 2500,
                disableOnInteraction: false,
            } }
            modules={ [EffectFade, Navigation, Pagination, Autoplay] }
            className="sliderHomeV2"
        >
            <SwiperSlide>
                <div className="item w-full rounded-md overflow-hidden">
                    <img src="https://assetsio.gnwcdn.com/Nvidia-GeForce-RTX-5080-installed.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" />

                    <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-500">
                        <h4 className="text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0">
                            Giảm giá cực shock
                        </h4>
                        <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0">
                            GeForce RTX 5080 Graphics Cards
                        </h2>
                        <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0">
                            Chỉ với giá
                            <span className="text-primary text-[30px] font-[700]">
                                31.665tr ₫
                            </span>
                        </h3>

                        <div className="btn_ w-full relative -right-[100%] opacity-0">
                            <Button className="btn-org">MUA NGAY</Button>
                        </div>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="item w-full rounded-md overflow-hidden">
                    <img src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/3860/innergigabyte/images/kv-bg.jpg" />

                    <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-500">
                        <h4 className="text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0">
                            Giảm giá cực shock
                        </h4>
                        <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0">
                            PC - Siêu Tốc
                        </h2>
                        <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0">
                            Giá chỉ từ
                            <span className="text-primary text-[30px] font-[700] ">
                                6.190tr ₫
                            </span>
                        </h3>

                        <div className="btn_ w-full relative -right-[100%] opacity-0">
                            <Button className="btn-org">MUA NGAY</Button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}