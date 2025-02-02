import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { IoChatboxOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="py-6 bg-white border-1 border-gray-300">
        <div className="container">
          <div className="flex items-center justify-center gap-2 py-8 pb-8">
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <LiaShippingFastSolid className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-3" />
              <h3 className="text-[16px] font-[600] mt-3">Free Shipping</h3>
              <p className="text-[14px] font-[500]">For all Orders Over 100$</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <LiaShippingFastSolid className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-3" />
              <h3 className="text-[16px] font-[600] mt-3">Free Shipping</h3>
              <p className="text-[14px] font-[500]">For all Orders Over 100$</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <LiaShippingFastSolid className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-3" />
              <h3 className="text-[16px] font-[600] mt-3">Free Shipping</h3>
              <p className="text-[14px] font-[500]">For all Orders Over 100$</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <LiaShippingFastSolid className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-3" />
              <h3 className="text-[16px] font-[600] mt-3">Free Shipping</h3>
              <p className="text-[14px] font-[500]">For all Orders Over 100$</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <LiaShippingFastSolid className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-3" />
              <h3 className="text-[16px] font-[600] mt-3">Free Shipping</h3>
              <p className="text-[14px] font-[500]">For all Orders Over 100$</p>
            </div>
          </div>
          <br />

          <hr />

          <div className="footer flex py-8">
            <div className="part1 w-[25%] border-r border-gray-300">
              <h2 className="text-[18px] font-[600] mb-4">Contact Us</h2>
              <p className="text-[13px] font-[400] pb-4">
                Shopping Online - SWP391 Project - Group 1
              </p>
              <Link className="link text-[13px]" to="mailto:swp391@fpt.edu.vn">
                swp391@fpt.edu.vn
              </Link>
              <span className="text-[25px] font-[600] block w-full mt-3 mb-5 text-primary">
                +84 00 000000
              </span>

              <div className="flex items-center gap-2">
                <IoChatboxOutline className="text-[40px] text-primary" />
                <span className="text-[17px] font-[600]">
                  Online Chat
                  <br />
                  Get Help
                </span>
              </div>
            </div>

            <div className="part2 w-[40%] flex pl-8">
              <div className="part2_col1 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">Products</h2>
                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-1">
                    <Link to="/" className="link">
                      Prices drop
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-1">
                    <Link to="/" className="link">
                      New products
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-1">
                    <Link to="/" className="link">
                      Best sales
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-1">
                    <Link to="/" className="link">
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="part2_col2 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">Our Shop</h2>
                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-1">
                    <Link to="/" className="link">
                      Delivery
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-1">
                    <Link to="/" className="link">
                      Terms and conditions of use
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-1">
                    <Link to="/" className="link">
                      About us
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-1">
                    <Link to="/login" className="link">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="part3 w-[35%] flex pl-8 flex-col pr-8">
              <h2 className="text-[18px] font-[600] mb-4">
                Subscribe to newsletter
              </h2>
              <p className="text-[13px]">
                Subscribe to our latest newsletter to get news about special
                discounts.
              </p>
              <form className="mt-5">
                <input
                  type="text"
                  className="w-full h-[45px] border outline-none pl-4 pr-4 rounded-sm mb-4 focus:border-black"
                  placeholder="Your Email Address"
                />
                <Button className="btn-org">SUBCRIBE</Button>
                <FormControlLabel
                  control={ <Checkbox /> }
                  label="I agree to the terms and conditions and the privacy policy"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip border-t border-[rgba(0,0,0,0.1)] py-3 bg-white">
        <div className="container flex items-center justify-between">
          <ul className="flex item-center gap-2  w-[20%]">
            <li className="list-none">
              <Link to="https://github.com/VuPHD-HE182525/FrontendSWP391" target="blank" className="flex items-center justify-center w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] group hover:bg-primary transition-all">
                <FaGithub className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
          </ul>

          <p className="text-[13px] text-center mb-0 w-[60%]">
            © 2025 - Shopping Online by Group 1
          </p>

          <div className="flex items-center w-[20%]">
            <img src="/visa.png"></img>
            <img src="/mastercard.png"></img>
            <img src="/jcb.png"></img>
            <img src="/americanexpress.png"></img>
            <img src="/paypal.png"></img>
            <img src="/cod.png"></img>
          </div>
        </div>
      </div>

    </>
  );
}
