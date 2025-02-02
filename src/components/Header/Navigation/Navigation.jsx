import React, { useState } from "react";
import { Button } from "@mui/material";
import { IoMenu } from "react-icons/io5";
import { LiaAngleRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { LiaShippingFastSolid } from "react-icons/lia";
import CategoryPanel from "./CategoryPanel";
import "../Navigation/StyleNavigation.css";


export default function Navigation() {

    const [isOpenCategoryPanel, setOpenCategoryPanel] = useState(false);

    const openCategoryPanel = () => {
        setOpenCategoryPanel(true);
    }

    return (
        <>
            <nav className="py-2">
                <div className="container flex items-center justify-end gap-8">
                    <div className="col_1 w-[20%]">
                        <Button className="!text-black gap-2 w-full !font-[700] " onClick={ openCategoryPanel }>
                            <IoMenu className="text-[18px]" />
                            CATEGORIES
                            <LiaAngleRightSolid className="text-[16px] ml-auto !font-bold" />
                        </Button>
                    </div>

                    <div className="col_2 w-[60%]">
                        <ul className="flex items-center gap-3 nav">
                            <li className="list-none">
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-black hover:!text-[#0066ff]">
                                        Home
                                    </Button>
                                </Link>
                            </li>
                            <li className="list-none relative">
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-black hover:!text-[#0066ff]">
                                        Laptop
                                    </Button>
                                </Link>

                                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full relative">
                                            <Link to="/" className="w-full">
                                                <Button className="!text-black w-full !text-left !justify-start !rounded-none">
                                                    Thương hiệu
                                                </Button>

                                                <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                                    <ul>
                                                        <li className="list-none w-full">
                                                            <Link to="/" className="w-full">
                                                                <Button className="!text-black w-full !text-left !justify-start !rounded-none">
                                                                    ASUS
                                                                </Button>
                                                            </Link>
                                                        </li>
                                                        <li className="list-none w-full">
                                                            <Link to="/" className="w-full">
                                                                <Button className="!text-black w-full !text-left !justify-start !rounded-none">
                                                                    ACER
                                                                </Button>
                                                            </Link>
                                                        </li>

                                                        <li className="list-none w-full">
                                                            <Link to="/" className="w-full">
                                                                <Button className="!text-black w-full !text-left !justify-start !rounded-none">
                                                                    MSI
                                                                </Button>
                                                            </Link>
                                                        </li>

                                                        <li className="list-none w-full">
                                                            <Link to="/" className="w-full">
                                                                <Button className="!text-black w-full !text-left !justify-start !rounded-none">
                                                                    LENOVO
                                                                </Button>
                                                            </Link>
                                                        </li>

                                                        <li className="list-none w-full">
                                                            <Link to="/" className="w-full">
                                                                <Button className="!text-black w-full !text-left !justify-start !rounded-none">
                                                                    DELL
                                                                </Button>
                                                            </Link>
                                                        </li>

                                                        <li className="list-none w-full">
                                                            <Link to="/" className="w-full">
                                                                <Button className="!text-black w-full !text-left !justify-start !rounded-none">
                                                                    HP - Pavillion
                                                                </Button>
                                                            </Link>
                                                        </li>

                                                        <li className="list-none w-full">
                                                            <Link to="/" className="w-full">
                                                                <Button className="!text-black w-full !text-left !justify-start !rounded-none">
                                                                    LG - Gram
                                                                </Button>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                                <Button className="!text-black w-full !text-left !justify-start !rounded-none">
                                                    Giá bán
                                                </Button>
                                            </Link>
                                        </li>

                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                                <Button className="!text-black w-full !text-left !justify-start !rounded-none">
                                                    CPU Intel - AMD
                                                </Button>
                                            </Link>
                                        </li>

                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                                <Button className="!text-black w-full !text-left !justify-start !rounded-none">
                                                    Nhu cầu sử dụng
                                                </Button>
                                            </Link>
                                        </li>

                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                                <Button className="!text-black w-full !text-left !justify-start !rounded-none">
                                                    Link kiện laptop
                                                </Button>
                                            </Link>
                                        </li>

                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                                <Button className="!text-black w-full !text-left !justify-start !rounded-none">
                                                    Laptop ASUS
                                                </Button>
                                            </Link>
                                        </li>

                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                                <Button className="!text-black w-full !text-left !justify-start !rounded-none">
                                                    Latop ACER
                                                </Button>
                                            </Link>
                                        </li>

                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                                <Button className="!text-black w-full !text-left !justify-start !rounded-none">
                                                    Latop MSI
                                                </Button>
                                            </Link>
                                        </li>

                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                                <Button className="!text-black w-full !text-left !justify-start !rounded-none">
                                                    Latop LENOVO
                                                </Button>
                                            </Link>
                                        </li>

                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                                <Button className="!text-black w-full !text-left !justify-start !rounded-none">
                                                    Latop DELL
                                                </Button>
                                            </Link>
                                        </li>

                                        <li className="list-none w-full">
                                            <Link to="/" className="w-full">
                                                <Button className="!text-black w-full !text-left !justify-start !rounded-none">
                                                    Latop AI
                                                </Button>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="list-none">
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-black hover:!text-[#0066ff]">
                                        New Arrivals
                                    </Button>
                                </Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-black hover:!text-[#0066ff]">
                                        All Brands
                                    </Button>
                                </Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-black hover:!text-[#0066ff]">
                                        More
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col_3 w-[20%]">
                        <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
                            <LiaShippingFastSolid className="text-[18px]" />
                            Multiple delivery methods
                        </p>
                    </div>
                </div>
            </nav>

            <CategoryPanel
                openCategoryPanel={ openCategoryPanel }
                isOpenCategoryPanel={ isOpenCategoryPanel }
                setOpenCategoryPanel={ setOpenCategoryPanel }
            />
        </>
    );
};
