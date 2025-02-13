import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { GiPositionMarker } from "react-icons/gi";
import { GrDocumentTime } from "react-icons/gr";
import { TbShoppingCartHeart } from "react-icons/tb";
import { LuWalletMinimal } from "react-icons/lu";
import { TbLockPassword } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import "./StyleUserProfile.css";
import { Button } from "@mui/material";
import axios from "axios";

const PersonalInfo = () => {
  const history = useNavigate();

  const handleLogout = async(e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:8000/api/user/logout", { withCredentials: true });
      if(response.status(200) === 200) {
        localStorage.removeItem("token")
        alert("Logout successfully")
        history("/login");
      }
    } catch (error) {
      console.error(error);
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
            | &nbsp;
            <li>
              <span>My Profile</span>
            </li>
          </ol>
        </div>
      </nav>
      <div className="main-container">
        <div className="sidebar shadow-md rounded-md bg-white p-4">
          <div className="head-sb">
            <div className="avatar-container">
              <img
                src="https://i.pinimg.com/736x/c4/28/30/c42830496db49a385f9b4b9df6672294.jpg"
                className="img-sb"
              />
            </div>
            <div className="head-sb-info">
              <p className="pb-4">
                <b>Customer Name</b>
              </p>
              <Link to="/profile/info" className="edit-proinfosb">
                <MdEdit className="edit-icon" />
                <p>Edit profile</p>
              </Link>
            </div>
          </div>
          <div className="content-sb">
            <Link to="/profile/info" className="action-contentsb">
              <ImProfile />
              <p className="pl-5">Information</p>
            </Link>
            <Link to="/" className="action-contentsb">
              <GiPositionMarker />
              <p className="pl-5">Address</p>
            </Link>
            <Link to="/" className="action-contentsb">
              <GrDocumentTime />
              <p className="pl-5">Order history</p>
            </Link>
            <Link to="/" className="action-contentsb">
              <TbShoppingCartHeart />
              <p className="pl-5">My wishlist</p>
            </Link>
            <Link to="/" className="action-contentsb">
              <LuWalletMinimal />
              <p className="pl-5">Payment</p>
            </Link>
            <Link to="/" className="action-contentsb">
              <TbLockPassword />
              <p className="pl-5">Change password</p>
            </Link>
            <button className="action-contentsb" onClick={handleLogout}>
              <LuLogOut />
              <p className="pl-5">Log out</p>
            </button>
          </div>
        </div>

        <div className="content shadow-md w-[500px] rounded-md bg-white p-4 ml-5">
          <h1 className="font-extrabold mb-10 text-[30px] pt-5">
            Personal Information
          </h1>
          <form className="personal-info-form">
            <div className="form-group relative">
              <img src="https://i.pinimg.com/736x/c4/28/30/c42830496db49a385f9b4b9df6672294.jpg" />
              <button className="shadow-md">
                <MdEdit />
              </button>
            </div>
            <div className="form-group">
              <label>Full Name:</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label>Gender:</label>
              <div className="radio-group">
                <input type="radio" name="gender" value="male" /> Male
                <input type="radio" name="gender" value="female" /> Female
              </div>
            </div>
            <div className="form-group">
              <label>Date of Birth:</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input type="tel" placeholder="Enter phone number" />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" placeholder="Enter email" />
            </div>
            <div className="w-full pb-5 pr-5 flex justify-end">
              <Button type="submit" variant="contained">
                SAVE
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
