import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import { BsCashCoin } from "react-icons/bs";

function CartContact() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [formData, setFormData] = useState({
        fullName: "",
        country: "", // Added country field
        streetAddress1: "", // Added street address fields
        streetAddress2: "",
        city: "",
        state: "",
        postcode: "",
        phone: "",
        email: "",
        paymentMethod: "cash",
    });
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [addresses, setAddresses] = useState([]);
    const SHIPPING_FEE = 20000;

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get("/api/cart", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                console.log("Cart API Response:", response.data);
                setCartItems(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error("Error fetching cart items:", error);
                setCartItems([]); // Ensure it's always an array
            }
        };

        const fetchAddresses = async () => {
            try {
                const response = await axios.get("/api/addresses", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                console.log("Addresses API Response:", response.data);
                if (Array.isArray(response.data)) {
                    setAddresses(response.data);
                } else {
                    console.error("Unexpected response format:", response.data);
                    setAddresses([]); // Fallback to empty array
                }
                if (response.data.length > 0) {
                    setSelectedAddress(response.data[0]._id);
                }
            } catch (error) {
                console.error("Error fetching addresses:", error);
                setAddresses([]);
            }
        };

        fetchCartItems();
        fetchAddresses();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // 1. Combine Address Lines
            const addressLine = `${formData.streetAddress1} ${formData.streetAddress2}`.trim();

            // 2. Save Address
            const addressResponse = await axios.post(
                "/api/addresses", // Make sure this is the correct route
                {
                    address_line: addressLine, // Use the combined address line
                    city: formData.city,
                    state: formData.state,
                    pincode: formData.postcode,
                    country: formData.country,
                    mobile: formData.phone,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                },
            );
            const savedAddressId = addressResponse.data._id;

            await axios.post(
                "/api/orders",
                {
                    orderId: generateOrderId(),
                    productId: cartItems.map((item) => item.productId._id),
                    product_detail: cartItems.map((item) => ({
                        name: item.productId.name,
                        image: item.productId.image,
                        quantity: item.quantity,
                        price: item.productId.price,
                    })),
                    delivery_address: savedAddressId,
                    subTotalAmt: grandTotal,
                    totolAmt: totalWithShipping,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                },
            );

            navigate("/cart/completion");
        } catch (error) {
            console.error("Error submitting order:", error);
        }
    };

    const generateOrderId = () => {
        return (
            "ORDER-" +
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15)
        );
    };

    const calculateTotalPrice = (item) => item.productId.price * item.quantity;

    const grandTotal = useMemo(() => {
        if (Array.isArray(cartItems)) { // Check if cartItems is an array
            return cartItems.reduce((total, item) => total + calculateTotalPrice(item), 0);
        }
        return 0; // Return 0 if cartItems is not an array yet
    }, [cartItems]);

    const totalWithShipping = useMemo(() => {
        return grandTotal + SHIPPING_FEE
    }, [grandTotal])

    return (
        <div>
            <div className="cart-contact container mx-auto mt-10">
                <div className="cart-content grid grid-cols-12 gap-8">
                    <div className="col-span-9">
                        {/* Contact Details - Now takes 8 columns */}
                        <h3 className="text-xl font-bold mb-4">BILLING DETAILS</h3>
                        <form onSubmit={handleSubmit} className="bg-white p-4 rounded">
                            {/* Added border here */}
                            <div className="grid grid-cols-2 gap-4">
                                {/* 2-column grid for fields */}
                                <div>
                                    <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="border border-gray-400 p-2 w-full rounded"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="country" className="block text-gray-700 font-medium mb-2">
                                        Country *
                                    </label>
                                    <input
                                        type="text"
                                        id="country"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="border border-gray-400 p-2 w-full rounded"
                                        required
                                    />
                                </div>
                                <div className="col-span-2">
                                    {/* Street Address takes full width */}
                                    <label htmlFor="streetAddress1" className="block text-gray-700 font-medium mb-2">
                                        Street address *
                                    </label>
                                    <input
                                        type="text"
                                        id="streetAddress1"
                                        name="streetAddress1"
                                        placeholder="House Number & Street Name"
                                        value={formData.streetAddress1}
                                        onChange={handleChange}
                                        className="border border-gray-400 p-2 w-full rounded"
                                        required
                                    />
                                </div>
                                <div className="col-span-2">
                                    <input
                                        type="text"
                                        id="streetAddress2"
                                        name="streetAddress2"
                                        placeholder="Apartment, suite, etc."
                                        value={formData.streetAddress2}
                                        onChange={handleChange}
                                        className="border border-gray-400 p-2 w-full rounded"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="border border-gray-400 p-2 w-full rounded"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="state" className="block text-gray-700 font-medium mb-2">
                                        State / County *
                                    </label>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className="border border-gray-400 p-2 w-full rounded"
                                        required
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="postcode" className="block text-gray-700 font-medium mb-2">
                                        Postcode / ZIP *
                                    </label>
                                    <input
                                        type="text"
                                        id="postcode"
                                        name="postcode"
                                        value={formData.postcode}
                                        onChange={handleChange}
                                        className="border border-gray-400 p-2 w-full rounded"
                                        required
                                    />
                                </div>
                                <div>
                                    {/* Phone and Email take full width below */}
                                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="border border-gray-400 p-2 w-full rounded"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="border border-gray-400 p-2 w-full rounded"
                                    />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mt-8 mb-4">Payment Method</h3>
                            <div className="flex items-center mb-4">
                                <input
                                    type="radio"
                                    id="cash"
                                    name="paymentMethod"
                                    value="cash"
                                    checked={formData.paymentMethod === "cash"}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <label htmlFor="cash" className="flex items-center">
                                    <BsCashCoin className="text-xl mr-2" /> Cash
                                </label>
                            </div>
                        </form>
                    </div>

                    <div className="col-span-3">
                        {/* Summary - Now takes 4 columns */}
                        <div className="bg-white p-4 rounded border">
                            {/* Added border here */}
                            <h3 className="text-xl font-bold mb-4">Your Cart</h3>
                            <div className="bg-white p-4 rounded">
                                <hr className="my-2" />
                                <div className="flex justify-between mb-2">
                                    <span>{cartItems.length} Items:</span>
                                    <span>{grandTotal.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Shipping:</span>
                                    <span>{SHIPPING_FEE.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</span>
                                </div>
                                <div className="flex justify-between font-bold">
                                    <span>Total:</span>
                                    <span>{totalWithShipping.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</span>
                                </div>
                            </div>
                            <button
                                type="submit" // Changed to type="submit"
                                onClick={handleSubmit} // Keep this for the onSubmit handler
                                className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                                CHECK OUT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default CartContact;