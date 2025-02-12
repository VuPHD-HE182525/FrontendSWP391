import React, { useState } from "react";
import { Box, Drawer, Button } from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CategoryCollapse from "./CategoryCollapse";

export default function CategoryPanel(props) {
    const navigate = useNavigate();

    const toggleDrawer = (newOpen) => () => {
        props.setOpenCategoryPanel(newOpen);
    };

    const DrawerList = (
        <Box sx={ { width: 250 } } role="presentation" className="categoryPanel">
            <h3 className="p-3 text-[20px] font-[500] flex items-center justify-between">
                Categories
                <IoCloseSharp onClick={ toggleDrawer(false) } className="cursor-pointer text-[20px]" />
            </h3>
            {
                props?.data?.length !== 0 && <CategoryCollapse data={ props?.data } />
            }
        </Box>
    );

    return (
        <Drawer open={ props.isOpenCategoryPanel } onClose={ toggleDrawer(false) }>
            { DrawerList }
        </Drawer>
    );
}
