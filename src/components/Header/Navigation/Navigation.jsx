import React, { useState } from "react";
import { Button } from "@mui/material";
import { IoMenu } from "react-icons/io5";
import { LiaAngleRightSolid } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";
import { LiaShippingFastSolid } from "react-icons/lia";
import CategoryPanel from "./CategoryPanel";
import "../Navigation/StyleNavigation.css";

export default function Navigation() {
    const [isOpenCategoryPanel, setOpenCategoryPanel] = useState(false);
    const navigate = useNavigate(); // Hook điều hướng

    const openCategoryPanel = () => {
        setOpenCategoryPanel(true);
    };

    const handleNavigateToCategory = (category) => {
        navigate(`/products?category=${category}`);
    };

    const handleNavigateToBrand = (brand) => {
        navigate(`/products?brand=${brand}`);
    };

    return (
        <>
            <nav className="py-2">
                <div className="container flex items-center justify-end gap-8">
                    <div className="col_1 w-[20%]">
                        <Button className="!text-black gap-2 w-full !font-[700]" onClick={openCategoryPanel}>
                            <IoMenu className="text-[18px]" />
                            DANH MỤC
                            <LiaAngleRightSolid className="text-[16px] ml-auto !font-bold" />
                        </Button>
                    </div>

                    <div className="col_2 w-[60%]">
                        <ul className="flex items-center gap-3 nav">
                            {/* Home */}
                            <li className="list-none">
                                <Button className="link transition !font-[500] !text-black hover:!text-[#0066ff]" onClick={() => navigate("/")}>
                                    Trang chủ
                                </Button>
                            </li>

                            {/* Laptop */}
                            <li className="list-none relative group">
                                <Button className="link transition !font-[500] !text-black hover:!text-[#0066ff]" onClick={() => handleNavigateToCategory("Laptop")}>
                                    Laptop
                                </Button>

                                {/* Dropdown Menu Laptop */}
                                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all group-hover:opacity-100">
                                    <ul>
                                        {["ASUS", "DELL", "HP", "LENOVO", "MSI", "ACER"].map((brand) => (
                                            <li key={brand} className="list-none w-full">
                                                <Button className="!text-black w-full !text-left !justify-start !rounded-none" onClick={() => handleNavigateToBrand(brand)}>
                                                    {brand}
                                                </Button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>

                            {/* Smartphone */}
                            <li className="list-none relative group">
                                <Button className="link transition !font-[500] !text-black hover:!text-[#0066ff]" onClick={() => handleNavigateToCategory("Smartphone")}>
                                    Điện thoại
                                </Button>

                                {/* Dropdown Menu Smartphone */}
                                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all group-hover:opacity-100">
                                    <ul>
                                        {["Apple", "Samsung", "Xiaomi", "Google", "OnePlus"].map((brand) => (
                                            <li key={brand} className="list-none w-full">
                                                <Button className="!text-black w-full !text-left !justify-start !rounded-none" onClick={() => handleNavigateToBrand(brand)}>
                                                    {brand}
                                                </Button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>

                            {/* Headphone */}
                            <li className="list-none relative group">
                                <Button className="link transition !font-[500] !text-black hover:!text-[#0066ff]" onClick={() => handleNavigateToCategory("Headphone")}>
                                    Tai nghe
                                </Button>

                                {/* Dropdown Menu Headphone */}
                                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all group-hover:opacity-100">
                                    <ul>
                                        {["Apple", "Sony", "JBL", "Bose"].map((brand) => (
                                            <li key={brand} className="list-none w-full">
                                                <Button className="!text-black w-full !text-left !justify-start !rounded-none" onClick={() => handleNavigateToBrand(brand)}>
                                                    {brand}
                                                </Button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>

                            {/* New Arrivals */}
                            <li className="list-none">
                                <Button className="link transition !font-[500] !text-black hover:!text-[#0066ff]" onClick={() => navigate("/products")}>
                                    Hàng mới về
                                </Button>
                            </li>

                            {/* All Brands */}
                            <li className="list-none">
                                <Button className="link transition !font-[500] !text-black hover:!text-[#0066ff]" onClick={() => navigate("/products")}>
                                    Tất cả các thương hiệu
                                </Button>
                            </li>
                        </ul>
                    </div>

                    {/* Multiple delivery methods */}
                    <div className="col_3 w-[20%]">
                        <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
                            <LiaShippingFastSolid className="text-[18px]" />
                                Phương thức giao hàng đa dạng
                        </p>
                    </div>
                </div>
            </nav>

            {/* Sidebar Categories Panel */}
            <CategoryPanel
                openCategoryPanel={openCategoryPanel}
                isOpenCategoryPanel={isOpenCategoryPanel}
                setOpenCategoryPanel={setOpenCategoryPanel}
            />
        </>
    );
}
