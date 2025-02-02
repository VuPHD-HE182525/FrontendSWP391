import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";

export default function HomeCatergorySlider() {
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
                    <SwiperSlide>
                        <Link to="/test">
                            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                                <img
                                    src="https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/laptop_thumb_2_4df0fab60f.png"
                                    className="w-[60px] transition-all"
                                />
                                <h3 className=" text-[15px] font-[500] mt-3">
                                    Laptop
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                                <img
                                    src="https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/tu_lanh_cate_thumb_77da11d0c4.png"
                                    className="w-[60px] transition-all"
                                />
                                <h3 className=" text-[15px] font-[500] mt-3">
                                    Tủ lạnh
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                                <img
                                    src="https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/phu_kien_thum_2_21c419aa09.png"
                                    className="w-[60px] transition-all"
                                />
                                <h3 className=" text-[15px] font-[500] mt-3">
                                    Phụ kiện
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                                <img
                                    src="https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/dien_gia_dung_thumb_2_54c5efa451.png"
                                    className="w-[60px] transition-all"
                                />
                                <h3 className=" text-[15px] font-[500] mt-3">
                                    Điện gia dụng
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                                <img
                                    src="https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/may_loc_nuoc_thumb_2_d28bc1c035.png"
                                    className="w-[60px] transition-all"
                                />
                                <h3 className=" text-[15px] font-[500] mt-3">
                                    Máy lọc nước
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                                <img
                                    src="https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/dong_ho_cate_thumb_fefdd822ba.png"
                                    className="w-[60px] transition-all"
                                />
                                <h3 className=" text-[15px] font-[500] mt-3">
                                    Đồng hồ
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                                <img
                                    src="https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/may_tinh_bang_cate_thumb_00e3b3eefa.png"
                                    className="w-[60px] transition-all"
                                />
                                <h3 className=" text-[15px] font-[500] mt-3">
                                    Máy tính bảng
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                                <img
                                    src="https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/tivi_thumb_2_fc9b0f8bde.png"
                                    className="w-[60px] transition-all"
                                />
                                <h3 className=" text-[15px] font-[500] mt-3">
                                    Tivi
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                                <img
                                    src="https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/mat_giat_thumb_2_4b6d99f832.png"
                                    className="w-[60px] transition-all"
                                />
                                <h3 className=" text-[15px] font-[500] mt-3">
                                    Máy giặt
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    );
};
