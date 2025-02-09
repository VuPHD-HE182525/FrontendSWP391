import React, { useState } from "react";
import { Box, Drawer, Button } from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { useNavigate } from "react-router-dom";

export default function CategoryPanel(props) {
    const [submenuIndex, setSubmenuIndex] = useState(null);
    const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);
    const navigate = useNavigate();

    const toggleDrawer = (newOpen) => () => {
        props.setOpenCategoryPanel(newOpen);
    };

    const openSubmenu = (index) => {
        setSubmenuIndex(submenuIndex === index ? null : index);
    };

    const openInnerSubmenu = (index) => {
        setInnerSubmenuIndex(innerSubmenuIndex === index ? null : index);
    };

    // Điều hướng đến trang category
    const handleNavigateToCategory = (category) => {
        navigate(`/products?category=${category}`);
        props.setOpenCategoryPanel(false);
    };

    // Điều hướng đến trang brand
    const handleNavigateToBrand = (brand) => {
        navigate(`/products?brand=${brand}`);
        props.setOpenCategoryPanel(false);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
            <h3 className="p-3 text-[20px] font-[500] flex items-center justify-between">
                Categories
                <IoCloseSharp onClick={toggleDrawer(false)} className="cursor-pointer text-[20px]" />
            </h3>

            <div className="scroll">
                <ul className="w-full">
                    {/* Laptop */}
                    <li className="list-none flex items-center relative flex-col">
                        <Button className="w-full !text-left !justify-start !px-3 !text-black" onClick={() => handleNavigateToCategory("Laptop")}>
                            Laptop
                        </Button>
                        {submenuIndex === 0 ? (
                            <GoTriangleUp className="absolute top-[10px] right-[15px] cursor-pointer text-[23px]" onClick={() => openSubmenu(0)} />
                        ) : (
                            <GoTriangleDown className="absolute top-[10px] right-[15px] cursor-pointer text-[23px]" onClick={() => openSubmenu(0)} />
                        )}
                        {submenuIndex === 0 && (
                            <ul className="submenu w-full pl-3">
                                {["ASUS", "ACER", "MSI", "LENOVO", "DELL", "HP"].map((brand, index) => (
                                    <li key={index} className="list-none relative mb-1">
                                        <Button className="w-full !text-left !justify-start !px-3 !text-black" onClick={() => handleNavigateToBrand(brand)}>
                                            {brand}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    {/* Smartphone */}
                    <li className="list-none flex items-center relative flex-col">
                        <Button className="w-full !text-left !justify-start !px-3 !text-black" onClick={() => handleNavigateToCategory("Smartphone")}>
                            Điện thoại
                        </Button>
                        {submenuIndex === 1 ? (
                            <GoTriangleUp className="absolute top-[10px] right-[15px] cursor-pointer text-[23px]" onClick={() => openSubmenu(1)} />
                        ) : (
                            <GoTriangleDown className="absolute top-[10px] right-[15px] cursor-pointer text-[23px]" onClick={() => openSubmenu(1)} />
                        )}
                        {submenuIndex === 1 && (
                            <ul className="submenu w-full pl-3">
                                {["Apple", "Samsung", "Xiaomi", "Google", "OnePlus"].map((brand, index) => (
                                    <li key={index} className="list-none relative mb-1">
                                        <Button className="w-full !text-left !justify-start !px-3 !text-black" onClick={() => handleNavigateToBrand(brand)}>
                                            {brand}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    {/* Headphone */}
                    <li className="list-none flex items-center relative flex-col">
                        <Button className="w-full !text-left !justify-start !px-3 !text-black" onClick={() => handleNavigateToCategory("Headphone")}>
                            Tai nghe
                        </Button>
                        {submenuIndex === 2 ? (
                            <GoTriangleUp className="absolute top-[10px] right-[15px] cursor-pointer text-[23px]" onClick={() => openSubmenu(2)} />
                        ) : (
                            <GoTriangleDown className="absolute top-[10px] right-[15px] cursor-pointer text-[23px]" onClick={() => openSubmenu(2)} />
                        )}
                        {submenuIndex === 2 && (
                            <ul className="submenu w-full pl-3">
                                {["Apple", "Sony", "JBL", "Bose"].map((brand, index) => (
                                    <li key={index} className="list-none relative mb-1">
                                        <Button className="w-full !text-left !justify-start !px-3 !text-black" onClick={() => handleNavigateToBrand(brand)}>
                                            {brand}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
        </Box>
    );

    return (
        <Drawer open={props.isOpenCategoryPanel} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
    );
}
