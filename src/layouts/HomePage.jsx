import React, { useContext, useEffect, useState } from "react";
import HomeSlider from "../components/HomePage/HomeSlider";
import HomeCatergorySlider from "../components/HomePage/HomeCatergorySlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from "../components/HomePage/AdsBannerSlider";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductSlider from "../components/HomePage/ProductSlider";
import HomeSliderV2 from "../components/HomePage/HomeSliderV2";
import BannerBoxV2 from "../components/HomePage/BannerBoxV2/BannerBoxV2";
import { MyContext } from "../layouts/Layout"
import { fetchDataFromApi } from "../utils/api";

export default function HomePage() {
    const [value, setValue] = useState(0);
    const [popularProductsData, setPopularProductsData] = useState([])
    const context = useContext(MyContext);

    useEffect(() => {
        fetchDataFromApi(`/api/product/getAllProductsByCatId/${context?.categoryData[0]?._id}`).then((res) => {
            if (res?.error === false) {
                setPopularProductsData(res?.products)
            }
        })

    }, [context?.categoryData])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const filterByCatId = (id) => {
        fetchDataFromApi(`/api/product/getAllProductsByCatId/${id}`).then((res) => {
            if (res?.error === false) {
                setPopularProductsData(res?.products)
            }
        })
    }

    return (
        <>
            <HomeSlider />

            <section className="py-6">
                <div className="container flex gap-5">
                    <div className="part1 w-[70%]">
                        <HomeSliderV2 />
                    </div>
                    <div className="part2 w-[30%] flex items-center gap-5 justify-between flex-col">
                        <BannerBoxV2 info="left" image={ "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg" } />
                        <BannerBoxV2 info="right" image={ "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg" } />
                    </div>
                </div>
            </section>

            {
                context?.data?.length !== 0 && <HomeCatergorySlider data={ context?.categoryData } />
            }



            <section className="bg-white py-5">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="leftSection">
                            <h2 className="text-[20px] font-[600]">Sản phẩm thịnh hành</h2>
                            <p className="text-[14px] font-[400] mt-0 mb-0">
                                Đừng bỏ lỡ các ưu đãi của tháng 2 này
                            </p>
                        </div>

                        <div className="rightSection w-[60%]">
                            <Tabs
                                value={ value }
                                onChange={ handleChange }
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
                            >
                                {
                                    context?.categoryData?.length !== 0 && context?.categoryData?.map((cat, index) => {
                                        return (
                                            <Tab label={ cat?.name } key={ index } onClick={ () => filterByCatId(cat?._id) } />
                                        )
                                    })
                                }

                            </Tabs>
                        </div>
                    </div>

                    {
                        popularProductsData?.length !== 0 && <ProductSlider items={ 6 } data={ popularProductsData } />
                    }


                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container">
                    <div className="freeShipping w-full py-4 p-4 border-2 border-[#0066ff] flex items-center justify-between rounded-md mb-7">
                        <div className="col1 flex items-center gap-4">
                            <LiaShippingFastSolid className="text-[50px]" />
                            <span className="text-[20px] font-[600] uppercase">
                                Free Shipping
                            </span>
                        </div>

                        <div className="col2">
                            <p className="mb-0 font-[500]">
                                Miễn phí giao hàng với đơn hàng đầu tiên và các đơn hàng từ 500k trở lên
                            </p>
                        </div>

                        <p className="font-bold text-[25px]">- Chỉ 500k*</p>
                    </div>

                    <AdsBannerSlider items={ 4 } />

                </div>
            </section>
        </>
    );
};
