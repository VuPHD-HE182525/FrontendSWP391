import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { IoMenu } from "react-icons/io5";
import { LiaAngleRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { LiaShippingFastSolid } from "react-icons/lia";
import CategoryPanel from "./CategoryPanel";
import "../Navigation/StyleNavigation.css";
import { fetchDataFromApi } from "../../../utils/api";

export default function Navigation() {
    const [isOpenCategoryPanel, setOpenCategoryPanel] = useState(false);
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        const fullUrl = `${import.meta.env.VITE_API_URL}/api/category/`;

        fetchDataFromApi("/api/category/").then((res) => {
            if (res?.error === false) {
                setCategoryData(res?.data)
            }
        })
    }, []);


    const openCategoryPanel = () => {
        setOpenCategoryPanel(true);
    };

    return (
        <>
            <nav className="py-2">
                <div className="container flex items-center justify-end gap-8">
                    <div className="col_1 w-[20%]">
                        <Button className="!text-black gap-2 w-full !font-[700]" onClick={ openCategoryPanel }>
                            <IoMenu className="text-[18px]" />
                            DANH MỤC
                            <LiaAngleRightSolid className="text-[16px] ml-auto !font-bold" />
                        </Button>
                    </div>

                    <div className="col_2 w-[60%]">
                        <ul className="flex items-center gap-3 nav">
                            {/* Home */ }
                            <li className="list-none">
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-black hover:!text-[#0066ff]">
                                        Home
                                    </Button>
                                </Link>
                            </li>


                            {
                                categoryData?.length !== 0 && categoryData?.map((cat, index) => {
                                    return (
                                        <li className="list-none relative" key={ index }>
                                            <Link to="/" className="link transition text-[14px] font-[500]">
                                                <Button className="link transition !font-[500] !text-black hover:!text-[#0066ff] ">
                                                    { cat?.name }
                                                </Button>
                                            </Link>

                                            {
                                                cat?.children?.length !== 0 &&
                                                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                                    <ul>
                                                        {
                                                            cat?.children?.map((subCat, index_) => {
                                                                return (
                                                                    <li className="list-none w-full relative" key={ index }>
                                                                        <Link to="/" className="w-full">
                                                                            <Button className="!text-black w-full !text-left !justify-start !rounded-none">
                                                                                { subCat?.name }
                                                                            </Button>

                                                                            {
                                                                                subCat?.children?.length !== 0 &&
                                                                                <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                                                                    <ul>
                                                                                        {
                                                                                            subCat?.children?.map((thirdLavelCat, index_) => {
                                                                                                return (
                                                                                                    <li className="list-none w-full" key={ index }>
                                                                                                        <Link to="/" className="w-full">
                                                                                                            <Button className="!text-black w-full !text-left !justify-start !rounded-none">
                                                                                                                { thirdLavelCat?.name }
                                                                                                            </Button>
                                                                                                        </Link>
                                                                                                    </li>
                                                                                                )
                                                                                            })
                                                                                        }


                                                                                    </ul>
                                                                                </div>
                                                                            }
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            })
                                                        }

                                                    </ul>
                                                </div>
                                            }


                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>

                    {/* Multiple delivery methods */ }
                    <div className="col_3 w-[20%]">
                        <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
                            <LiaShippingFastSolid className="text-[18px]" />
                            Multiple delivery methods
                        </p>
                    </div>
                </div>
            </nav >

            {/* Sidebar Categories Panel */ }
            {
                categoryData?.length !== 0 &&
                < CategoryPanel
                    openCategoryPanel={ openCategoryPanel }
                    isOpenCategoryPanel={ isOpenCategoryPanel }
                    setOpenCategoryPanel={ setOpenCategoryPanel }
                    data={ categoryData }
                />
            }
        </>
    );
}
