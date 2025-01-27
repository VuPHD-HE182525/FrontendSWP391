import React from "react";
import "../Search/StyleSearch.css"
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

export default function Search() {
    return (
        <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2">
            <input
                type="text"
                placeholder="Search for product..."
                className="w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]"
            />
            <Button className="!absolute top-[8px] right-[5px] z-50 !w-[36px] !min-w-[36px] h-[36px] !rounded-full !text-black">
                <IoSearch className="text-[#2a2a2a] text-[22px]" />
            </Button>
        </div>
    );
}