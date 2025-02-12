import React from "react";
import "../ProductItem/StyleProductItem.css"
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Button from "@mui/material/Button";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdZoomOutMap } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';

export default function ProductItem(props) {
    return (
        <div className="productItem shadow-lg rounded-md overflow-hidden border-2 border-gray-300">
            <div className="group imgWrapper w-[100%] overflow-hidden rounded-md relative">
                <Link to={ `/propduct/${props?.item?.id}` }>
                    <div className="img h-[220px] overflow-hidden">
                        <img
                            src="https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/iphone_16_pro_max_black_titan_b3274fbf05.png"
                            //{props?.item?.images[0]}
                            className="w-full"
                        />

                        <img
                            src="https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/iphone_16_pro_max_white_titan_ec6c800e82.png"
                            //{props?.item?.images[1]}
                            className="w-full transition-all duration-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100"
                        />
                    </div>
                </Link>
                <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]">
                    { props?.item?.discount }
                </span>

                <div className="actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:!top-[15px] opacity-0 group-hover:opacity-100">
                    <Tooltip title="Add to Wishlist" placement="left-start">
                        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group">
                            <IoMdHeartEmpty className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
                        </Button>
                    </Tooltip>

                    <Tooltip title="View Product Detail" placement="left-start">
                        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group">
                            <MdZoomOutMap className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
                        </Button>
                    </Tooltip>
                </div>
            </div>

            <div className="info p-3 py-5">
                <h6 className="text-[13px]">
                    <span className="link transition-all">
                        { props?.item?.brand }
                    </span>
                </h6>
                <h3 className="title text-[13px] mt-2 font-[500] mb-1 text-black">
                    <Link to={ `/propduct/${props?.item?.id}` } className="link">
                        { props?.item?.name }
                    </Link>
                </h3>

                <Rating name="size-small" defaultValue={ props?.item?.rating } size="small" readOnly />

                <div className="flex items-center gap-4">
                    <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                        ${ props?.item?.price }
                    </span>
                    <span className="price text-primary font-[600]">
                        ${ props?.item?.oldPrice }
                    </span>
                </div>
            </div>

        </div>
    );
}