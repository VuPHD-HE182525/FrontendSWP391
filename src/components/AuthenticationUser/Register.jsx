import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import "./StyleAuthenticationUser.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import Rating from "@mui/material/Rating";

const Register = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <section className="section py-10">
      <nav className="breadcrumb">
        <div className="container">
          <ol>
            <li>
              <Link to="/" className="font-bold">
                Home
              </Link>
            </li>{" "}
            {""}| &nbsp;
            <li>
              <span>Create an account</span>
            </li>
          </ol>
        </div>
      </nav>

      <div className="m-container">
        <aside className="sidebar w-1/4 bg-white p-4 border-r">
          <div className="mb-6">
            <img
              src="https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/iphone_16_pro_max_black_titan_b3274fbf05.png"
              alt="Iphone16ProMax"
              className="w-full"
            />
            <p className="text-center font-bold mt-2">Iphone 16 Pro Max</p>
          </div>
          <div className="border border-black p-4 mt-5">
            <h3 className="font-semibold text-lg mb-2">New Products</h3>
            <ul>
              <li className="mb-4 border-t border-black pt-4 flex items-center gap-4">
                <img
                  src="https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/iphone_16_pro_max_black_titan_b3274fbf05.png"
                  alt="Iphone16ProMax"
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <p className="text-sm">Ịphone 16 Pro Max</p>
                  <Rating
                    name="size-small"
                    defaultValue={4}
                    size="small"
                    readOnly
                  />
                  <div className="flex items-center gap-2">
                    <span className="oldPrice line-through text-gray-500 text-xs font-[200]">
                      34.99tr ₫
                    </span>
                    <span className="price text-primary font-semibold text-sm">
                      32.79tr ₫
                    </span>
                  </div>
                </div>
              </li>
              <li className="mb-4 border-t border-black pt-4 flex items-center gap-4">
                <img
                  src="https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/iphone_16_pro_max_black_titan_b3274fbf05.png"
                  alt="Iphone16ProMax"
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <p className="text-sm">Ịphone 16 Pro Max</p>
                  <Rating
                    name="size-small"
                    defaultValue={4}
                    size="small"
                    readOnly
                  />
                  <div className="flex items-center gap-2">
                    <span className="oldPrice line-through text-gray-500 text-xs font-[200]">
                      34.99tr ₫
                    </span>
                    <span className="price text-primary font-semibold text-sm">
                      32.79tr ₫
                    </span>
                  </div>
                </div>
              </li>
              <li className="border-t border-black pt-4 flex items-center gap-4">
                <img
                  src="https://cdn2.fptshop.com.vn/unsafe/384x0/filters:quality(100)/iphone_16_pro_max_black_titan_b3274fbf05.png"
                  alt="Iphone16ProMax"
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <p className="text-sm">Ịphone 16 Pro Max</p>
                  <Rating
                    name="size-small"
                    defaultValue={4}
                    size="small"
                    readOnly
                  />
                  <div className="flex items-center gap-2">
                    <span className="oldPrice line-through text-gray-500 text-xs font-[200]">
                      34.99tr ₫
                    </span>
                    <span className="price text-primary font-semibold text-sm">
                      32.79tr ₫
                    </span>
                  </div>
                </div>
              </li>
            </ul>

            <Link
              to="/"
              className="text-blue-600 font-semibold block mt-4 text-right underline"
            >
              All Products
            </Link>
          </div>

          <div className="border border-black p-4 mt-5 ">
            <h3 className="font-semibold text-lg mb-2">Blog</h3>
            <ul>
              <li className="mb-4 border-t border-black pt-4 flex items-center gap-4">
                <Link
                  to="/"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Blog title
                </Link>
                <Link
                  to="/"
                  className="p-2 text-gray-600 hover:text-blue-600 transition"
                >
                  <FaExternalLinkAlt size={14} />
                </Link>
              </li>
              <li className="mb-4 border-t border-black pt-4 flex items-center gap-4">
                <Link
                  to="/"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Blog title
                </Link>
                <Link
                  to="/"
                  className="p-2 text-gray-600 hover:text-blue-600 transition"
                >
                  <FaExternalLinkAlt size={14} />
                </Link>
              </li>
              <li className="mb-4 border-t border-black pt-4 flex items-center gap-4">
                <Link
                  to="/"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Blog title
                </Link>
                <Link
                  to="/"
                  className="p-2 text-gray-600 hover:text-blue-600 transition"
                >
                  <FaExternalLinkAlt size={14} />
                </Link>
              </li>
              <li className="mb-4 border-t border-black pt-4 flex items-center gap-4">
                <Link
                  to="/"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Blog title
                </Link>
                <Link
                  to="/"
                  className="p-2 text-gray-600 hover:text-blue-600 transition"
                >
                  <FaExternalLinkAlt size={14} />
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <div className="main-content shadow-md w-[500px] m-auto rounded-md bg-white p-4">
          <h1 className="text-left text-[30px] text-black mb-10 font-extrabold">
            Register with a new account
          </h1>
          <form className="w-full">
            <div className="form-group w-full mb-5">
              <FormLabel id="demo-row-radio-buttons-group-label">
                Full Name *
              </FormLabel>
              <TextField
                type="text"
                id="name"
                variant="outlined"
                className="w-full"
                name="name"
              />
            </div>

            <div className="form-group w-full mb-5">
              <FormLabel id="demo-row-radio-buttons-group-label">
                Address *
              </FormLabel>
              <TextField
                type="text"
                id="address"
                variant="outlined"
                className="w-full"
                name="address"
              />
            </div>

            <div className="form-group w-full mb-5">
              <FormLabel id="demo-row-radio-buttons-group-label">
                Phone Number *
              </FormLabel>
              <TextField
                type="text"
                id="phonenumber"
                variant="outlined"
                className="w-full"
                name="phonenumber"
              />
            </div>

            <div className="form-group w-full mb-5">
              <FormLabel id="demo-row-radio-buttons-group-label">
                Email *
              </FormLabel>
              <TextField
                type="email"
                id="email"
                variant="outlined"
                className="w-full"
                name="email"
              />
            </div>

            <div className="form-group w-full mb-5 relative">
              <FormLabel id="demo-row-radio-buttons-group-label">
                Password *
              </FormLabel>
              <TextField
                type={isShowPassword === false ? "password" : "text"}
                id="password"
                variant="outlined"
                className="w-full"
                name="password"
              />
              <Button
                className="!absolute top-[65%] right-[5px] -translate-y-1/2 
    !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword === false ? (
                  <IoMdEye className="text-[20px] opacity-75" />
                ) : (
                  <IoMdEyeOff className="text-[20px] opacity-75" />
                )}
              </Button>
            </div>

            <div className="flex items-center w-full mt-3 mb-3">
              <Button type="submit" className="btn-org btn-lg w-full">
                Sign Up
              </Button>
            </div>

            <p className="text-center">
              Already have an account?{" "}
              <Link
                className="link text-[14px] font-[600] text-primary"
                to="/login"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
