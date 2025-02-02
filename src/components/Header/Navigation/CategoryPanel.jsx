import React, { useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoCloseSharp } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";
import { Link } from "react-router-dom";
import { GoTriangleUp } from "react-icons/go";

export default function CategoryPanel(props) {

    const [submenuIndex, setSubmenuIndex] = useState(null);
    const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

    const toggleDrawer = (newOpen) => () => {
        props.setOpenCategoryPanel(newOpen)
    };

    const openSubmenu = (index) => {
        if (submenuIndex === index) {
            setSubmenuIndex(null);
        } else {
            setSubmenuIndex(index);
        }
    }

    const openInnerSubmenu = (index) => {
        if (innerSubmenuIndex === index) {
            setInnerSubmenuIndex(null);
        } else {
            setInnerSubmenuIndex(index);
        }
    }

    const DrawerList = (
        <Box
            sx={ { width: 250 } }
            role="presentation"
            className="categoryPanel"
        >
            <h3 className="p-3 text-[20px] font-[500] flex items-center justify-between">
                Categories
                <IoCloseSharp onClick={ toggleDrawer(false) } className="cursor-pointer text-[20px]" />
            </h3>

            <div className="scroll">
                <ul className="w-full">
                    <li className="list-none flex items-center relative flex-col">
                        <Link to="/" className="w-full">
                            <Button className="w-full !text-left !justify-start !px-3 !text-black">
                                Laptop
                            </Button>
                        </Link>

                        { submenuIndex === 0 ? (
                            <GoTriangleUp className="absolute top-[10px] right-[15px] cursor-pointer text-[23px]"
                                onClick={ () => openSubmenu(0) }
                            />
                        ) : (
                            <GoTriangleDown className="absolute top-[10px] right-[15px] cursor-pointer text-[23px]"
                                onClick={ () => openSubmenu(0) }
                            />
                        ) }

                        { submenuIndex === 0 && (
                            <ul className="submenu w-full pl-3">
                                <li className="list-none relative">
                                    <Link to="/" className="w-full">
                                        <Button className="w-full !text-left !justify-start !px-3 !text-black">
                                            Brands
                                            { innerSubmenuIndex === 0 ? (
                                                <GoTriangleUp className="absolute top-[10px] right-[15px] cursor-pointer text-[23px]"
                                                    onClick={ () => openInnerSubmenu(0) }
                                                />
                                            ) : (
                                                <GoTriangleDown className="absolute top-[10px] right-[15px] cursor-pointer text-[23px]"
                                                    onClick={ () => openInnerSubmenu(0) }
                                                />
                                            ) }
                                        </Button>
                                    </Link>

                                    { innerSubmenuIndex === 0 && (
                                        <ul className="inner_submenu w-full pl-5">
                                            <li className="list-none relative mb-1">
                                                <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[13px]">
                                                    ASUS
                                                </Link>
                                            </li>
                                            <li className="list-none relative mb-1">
                                                <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[13px]">
                                                    ACER
                                                </Link>
                                            </li>
                                            <li className="list-none relative mb-1">
                                                <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[13px]">
                                                    MSI
                                                </Link>
                                            </li>
                                            <li className="list-none relative mb-1">
                                                <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[13px]">
                                                    LENOVO
                                                </Link>
                                            </li>
                                            <li className="list-none relative mb-1">
                                                <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[13px]">
                                                    DELL
                                                </Link>
                                            </li>
                                            <li className="list-none relative mb-1">
                                                <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[13px]">
                                                    HP - Padvillon
                                                </Link>
                                            </li>
                                            <li className="list-none relative mb-1">
                                                <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[13px]">
                                                    LG - Gram
                                                </Link>
                                            </li>
                                        </ul>
                                    ) }
                                </li>
                            </ul>
                        ) }
                    </li>






                    <li className="list-none flex items-center relative flex-col">
                        <Link to="/" className="w-full">
                            <Button className="w-full !text-left !justify-start !px-3 !text-black">
                                Laptop Gaming
                            </Button>
                        </Link>

                        { submenuIndex === 1 ? (
                            <GoTriangleUp className="absolute top-[10px] right-[15px] cursor-pointer text-[23px]"
                                onClick={ () => openSubmenu(1) }
                            />
                        ) : (
                            <GoTriangleDown className="absolute top-[10px] right-[15px] cursor-pointer text-[23px]"
                                onClick={ () => openSubmenu(1) }
                            />
                        ) }

                        { submenuIndex === 1 && (
                            <ul className="submenu w-full pl-3">
                                <li className="list-none relative">
                                    <Link to="/" className="w-full">
                                        <Button className="w-full !text-left !justify-start !px-3 !text-black">
                                            Brands
                                            { innerSubmenuIndex === 1 ? (
                                                <GoTriangleUp className="absolute top-[10px] right-[15px] cursor-pointer text-[23px]"
                                                    onClick={ () => openInnerSubmenu(1) }
                                                />
                                            ) : (
                                                <GoTriangleDown className="absolute top-[10px] right-[15px] cursor-pointer text-[23px]"
                                                    onClick={ () => openInnerSubmenu(1) }
                                                />
                                            ) }
                                        </Button>
                                    </Link>

                                    { innerSubmenuIndex === 1 && (
                                        <ul className="inner_submenu w-full pl-5">
                                            <li className="list-none relative mb-1">
                                                <Link
                                                    to="/"
                                                    className="link w-full !text-left !justify-start !px-3 transition text-[13px]"
                                                >
                                                    ACER/PREDATOR
                                                </Link>
                                            </li>
                                            <li className="list-none relative mb-1">
                                                <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[13px]">
                                                    ASUS/ROG
                                                </Link>
                                            </li>
                                            <li className="list-none relative mb-1">
                                                <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[13px]">
                                                    MSI
                                                </Link>
                                            </li>
                                            <li className="list-none relative mb-1">
                                                <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[13px]">
                                                    LENOVO
                                                </Link>
                                            </li>
                                            <li className="list-none relative mb-1">
                                                <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[13px]">
                                                    DELL
                                                </Link>
                                            </li>
                                            <li className="list-none relative mb-1">
                                                <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[13px]">
                                                    GIGABYTE/AORUS
                                                </Link>
                                            </li>
                                            <li className="list-none relative mb-1">
                                                <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[13px]">
                                                    HP
                                                </Link>
                                            </li>
                                        </ul>
                                    ) }
                                </li>
                            </ul>
                        ) }
                    </li>
                </ul>
            </div >

        </Box >
    );

    return (
        <>
            <Drawer
                open={ props.isOpenCategoryPanel }
                onClose={ toggleDrawer(false) }>
                { DrawerList }
            </Drawer>
        </>
    )
};