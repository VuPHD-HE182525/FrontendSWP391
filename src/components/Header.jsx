import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search/Search"
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Tooltip from '@mui/material/Tooltip';
import Navigation from "./Header/Navigation/Navigation";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        vertical: 'top',
        horizontal: 'right',
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export default function Header() {
    return (
        <>
            <header className="bg-white">
                <div className="top-strip py-2 border-t-[1px] border-b-[1px] border-gray-250">
                    <div className="container">
                        <div className="flex items-center justify-between">
                            <div className="col1 w-[50%]">
                                <p className="text-[14px] font-[500]">Nâng cấp công nghệ – Sẵn sàng chào đón năm mới!</p>
                            </div>

                            <div className="col2 flex items-center justify-end">
                                <ul>
                                    <li className="list-none">
                                        <Link to="help-center" className="link text-[14px] font-[500] transition">Help Center</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header py-4 border-b-[1px] border-gray-250">
                    <div className="container flex items-center justify-between">
                        <div className="col1 w-[25%]">
                            <Link to={"/"}>
                                <img src="/fptshoplogo.png" />
                            </Link>
                        </div>

                        <div className="col2 w-[45%]">
                            <Search />
                        </div>

                        <div className="col3 w-[30%] flex items-center pl-7">
                            <ul className="flex items-center gap-3">
                                <li className="list-none">
                                    <Link to="/login" className="link transition text-[15px] font-[500]">
                                        Login
                                    </Link> | &nbsp;
                                    <Link to="/register" className="link transition text-[15px] font-[500]">
                                        Register
                                    </Link>
                                </li>

                                <li>
                                    <Tooltip title="Cart">
                                        <IconButton aria-label="cart">
                                            <StyledBadge
                                                badgeContent={4} color="secondary">
                                                <MdOutlineShoppingCart />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip >
                                </li>

                                <li>
                                    <Tooltip title="Wish List">
                                        <IconButton aria-label="wish-list">
                                            <StyledBadge badgeContent={4} color="secondary">
                                                <IoMdHeartEmpty />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip >
                                </li>

                                <li>
                                    <Tooltip title="Profile">
                                        <IconButton aria-label="profile">
                                            <StyledBadge color="secondary">
                                                <CgProfile />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip >

                                </li>
                            </ul>
                        </div>
                    </div >
                </div >

                <Navigation />

            </header >
        </>
    );
};
