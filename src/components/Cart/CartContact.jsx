import React, { useState, useEffect } from "react";
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
        phoneNumber: "",
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
            const grandTotal = calculateGrandTotal();
            const total = calculateTotalWithShipping();

            await axios.post(
                "/api/orders",
                {
                    orderId: generateOrderId(),
                    productId: cartItems.map((item) => item.product._id),
                    product_detail: cartItems.map((item) => ({
                        name: item.product.name,
                        image: item.product.image,
                        quantity: item.quantity,
                        price: item.product.price,
                    })),
                    delivery_address: selectedAddress,
                    subTotalAmt: grandTotal,
                    totolAmt: total,
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

    const calculateTotalPrice = (item) => {
        return item.product.price * item.quantity;
    };

    const calculateGrandTotal = () => {
        return cartItems.reduce(
            (total, item) => total + calculateTotalPrice(item),
            0,
        );
    };

    const calculateTotalWithShipping = () => {
        return calculateGrandTotal() + SHIPPING_FEE;
    };

    return (
        <div>
            <div className="cart-contact container mx-auto mt-10">

                <div className="cart-content grid grid-cols-12 gap-8">
                    <div className="col-span-9"> {/* Contact Details - Now takes 6 columns */}
                        <h3 className="text-xl font-bold mb-4">BILLING DETAILs</h3>
                        <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded">
                            <div className="mb-4">
                                <label
                                    htmlFor="fullName"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Full Name
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
                            <div className="mb-4">
                                <label
                                    htmlFor="phoneNumber"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="border border-gray-400 p-2 w-full rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="address"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Delivery Address
                                </label>
                                <select
                                    id="address"
                                    name="address"
                                    value={selectedAddress}
                                    onChange={(e) => setSelectedAddress(e.target.value)}
                                    className="border border-gray-400 p-2 w-full rounded"
                                    required
                                >
                                    {Array.isArray(addresses) && addresses.length > 0 ? (
                                        addresses.map((address) => (
                                            <option key={address._id} value={address._id}>
                                                {address.street}, {address.city}, {address.country}
                                            </option>
                                        ))
                                    ) : (
                                        <option disabled>No addresses available</option>
                                    )}
                                </select>
                            </div>

                            <h3 className="text-xl font-bold mb-4">Payment Method</h3>
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

                    <div className="col-span-3"> {/* Summary - Now takes 6 columns */}
                        <h3 className="text-xl font-bold mb-4">Your Cart</h3>
                        <div className="bg-gray-100 p-4 rounded">
                        <div className="flex justify-between mb-2 mt-2">
                                <span>{cartItems.length} Items:</span>
                                <span>
                                    {calculateGrandTotal().toLocaleString("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                    })}
                                </span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Shipping:</span>
                                <span>
                                    {SHIPPING_FEE.toLocaleString("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                    })}
                                </span>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between font-bold">
                                <span>Total:</span>
                                <span>
                                    {calculateTotalWithShipping().toLocaleString("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                    })}
                                </span>
                            </div>

                            <div className="mt-4 flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default CartContact;