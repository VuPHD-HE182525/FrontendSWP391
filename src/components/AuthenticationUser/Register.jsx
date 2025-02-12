import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import "./StyleAuthenticationUser.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import axios from "axios";

const Register = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [formFields, setFormFields] = useState({
      name: "",
      birthdate: "",
      gender: "",
      mobile: "",
      address: "",
      email: "",
      password: "",
      cfpassword: ""
    });
  const [error, setError] = useState("");
  const history = useNavigate();
  const handleChange = (e) => {
    setFormFields({ 
      ...formFields, 
      [e.target.name]: e.target.value 
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formFields.password !== formFields.cfpassword) {
      setError("Passwords do not match");
      return;
    }
    if (!/^\d{10}$/.test(formFields.mobile)) {
      setError('Phone number is invalid');
      return;
    }

    try {
      const { cfpassword, ...dataToSend } = formFields;
      const response = await axios.post("http://localhost:8000/api/user/register", dataToSend);
      
      if(response.status === 200) {
        alert("Register successfully");
        history("/login");
      }
    } catch (error) {
      console.log(error);
      setError("Register failed");
    }
  };

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
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form className="w-full" onSubmit={handleRegister}>
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
                value={formFields.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group w-full mb-5">
              <FormLabel id="demo-row-radio-buttons-group-label">
                Birthdate *
              </FormLabel>
              <TextField
                type="date"
                id="birthdate"
                variant="outlined"
                className="w-full"
                name="birthdate"
                value={formFields.birthdate}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group w-full mb-5">
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender *
              </FormLabel>
                <RadioGroup
                  row aria-labelledby="demo-row-radio-buttons-group-label"
                  name="gender"
                  value={formFields.gender}
                  onChange={handleChange}
                >
                  <FormControlLabel value="Female" control={<Radio />} label="Female"/>
                  <FormControlLabel value="Male" control={<Radio />} label="Male"/>
                </RadioGroup>
            </div>

            <div className="form-group w-full mb-5">
              <FormLabel id="demo-row-radio-buttons-group-label">
                Phone Number *
              </FormLabel>
              <TextField
                type="text"
                id="mobile"
                variant="outlined"
                className="w-full"
                name="mobile"
                value={formFields.mobile}
                onChange={handleChange}
                required
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
                value={formFields.address}
                onChange={handleChange}
                required
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
                value={formFields.email}
                onChange={handleChange}
                required
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
                value={formFields.password}
                onChange={handleChange}
                required
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

            <div className="form-group w-full mb-5 relative">
              <FormLabel id="demo-row-radio-buttons-group-label">
                Confirm Password *
              </FormLabel>
              <TextField
                type={isShowPassword === false ? "password" : "text"}
                id="cfpassword"
                variant="outlined"
                className="w-full"
                name="cfpassword"
                value={formFields.cfpassword}
                onChange={handleChange}
                required
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
