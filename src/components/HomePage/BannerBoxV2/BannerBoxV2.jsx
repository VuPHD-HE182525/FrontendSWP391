import React from "react";
import "../BannerBoxV2/StyleBannerBoxV2.css"
import { Link } from "react-router-dom";

export default function BannerBoxV2(props) {
    return (
        <div className="bannerBoxV2 w-full overflow-hidden rounded-md group relative">
            <img
                src={ props.image }
                className="w-full transition-all duration-150 group-hover:scale-105"
            />

            <div
                className={ `info absolute p-5 top-0 w-[70%] h-[100%] z-50 flex items-center justify-center flex-col gap-2 
                ${props.info === "left" ? "left-0" : "right-0"} 
                ${props.info === "left" ? "" : "pl-12"}` }
            >
                <h2 className="text-[18px] font-[600]">Samsung VR Camera</h2>

                <span className="text-[20px] text-primary font-[600] w-full">3.235tr ₫</span>

                <div className="w-full">
                    <Link
                        to="/"
                        className="link text-[16px] font-[600]"
                    >
                        MUA NGAY
                    </Link>
                </div>
            </div>
        </div >
    );
}