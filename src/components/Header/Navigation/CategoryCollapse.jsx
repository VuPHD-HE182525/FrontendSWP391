import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { Button } from "@mui/material";

export default function CategoryCollapse(props) {
    const [submenuIndex, setSubmenuIndex] = useState(null);
    const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

    const openSubmenu = (index) => {
        setSubmenuIndex(submenuIndex === index ? null : index);
    };

    const openInnerSubmenu = (index) => {
        setInnerSubmenuIndex(innerSubmenuIndex === index ? null : index);
    };

    return (
        <>
            <div className="scroll">
                <ul className="w-full">
                    {
                        props?.data?.length !== 0 && props?.data?.map((cat, index) => {
                            return (
                                <li className="list-none flex items-center relative flex-col">
                                    <Link to="/" className="w-full">
                                        <Button className="w-full !text-left !justify-start !px-3 !text-black">
                                            { cat?.name }
                                        </Button>
                                    </Link>

                                    { submenuIndex === index ? (
                                        <GoTriangleUp className="absolute top-[10px] right-[15px] cursor-pointer text-[23px]"
                                            onClick={ () => openSubmenu(index) }
                                        />
                                    ) : (
                                        <GoTriangleDown className="absolute top-[10px] right-[15px] cursor-pointer text-[23px]"
                                            onClick={ () => openSubmenu(index) }
                                        />
                                    ) }

                                    { submenuIndex === index && (
                                        <ul className="submenu w-full pl-3">
                                            {
                                                cat?.children?.length !== 0 && cat?.children?.map((subCat, index_) => {
                                                    return (
                                                        <li className="list-none relative">
                                                            <Link to="/products" className="w-full">
                                                                <Button className="w-full !text-left !justify-start !px-3 !text-black">
                                                                    { subCat?.name }
                                                                </Button>
                                                            </Link>

                                                            { innerSubmenuIndex === index_ ? (
                                                                <GoTriangleUp className="absolute top-[10px] right-[15px] cursor-pointer text-[23px]"
                                                                    onClick={ () => openInnerSubmenu(index_) }
                                                                />
                                                            ) : (
                                                                <GoTriangleDown className="absolute top-[10px] right-[15px] cursor-pointer text-[23px]"
                                                                    onClick={ () => openInnerSubmenu(index_) }
                                                                />
                                                            ) }

                                                            { innerSubmenuIndex === index_ && (
                                                                <ul className="inner_submenu w-full pl-5">
                                                                    {
                                                                        subCat?.children?.length !== 0 && subCat?.children?.map((thirdLavelCat, index_) => {
                                                                            return (
                                                                                <li className="list-none relative mb-1" key={ index_ }>
                                                                                    <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[13px]">
                                                                                        { thirdLavelCat?.name }
                                                                                    </Link>
                                                                                </li>
                                                                            )
                                                                        })
                                                                    }
                                                                </ul>
                                                            ) }
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    ) }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}
