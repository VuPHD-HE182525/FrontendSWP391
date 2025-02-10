import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import { BsCashCoin } from "react-icons/bs";

function CartContact() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState();
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        paymentMethod: "cash",
    });
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [addresses, setAddresses] = useState();
    const SHIPPING_FEE = 20000;

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get("/api/cart", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setCartItems(response.data);
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        const fetchAddresses = async () => {
            try {
                const response = await axios.get("/api/addresses", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setAddresses(response.data);
                if (response.data.length > 0) {
                    setSelectedAddress(response.data._id);
                }
            } catch (error) {
                console.error("Error fetching addresses:", error);
            }
        };

        fetchCartItems();
        fetchAddresses();
    },);

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
            <Header />
            <div className="cart-contact container mx-auto mt-10">
                <h2 className="text-2xl font-bold mb-5">Cart Contact</h2>

                <div className="cart-content grid grid-cols-12 gap-8">
                    <div className="col-span-8">
                        <h3 className="text-xl font-bold mb-4">Cart Details</h3>
                        <div className="bg-gray-100 p-4 rounded">
                            <ul>
                                {cartItems.map((item) => (
                                    <li key={item._id} className="border-b py-4">
                                        <div className="cart-item flex items-center">
                                            <img
                                                src={item.product.image}
                                                alt={item.product.name}
                                                className="w-20 h-20 object-cover mr-4"
                                            />
                                            <div>
                                                <h3 className="text-lg font-medium">
                                                    {item.product.name}
                                                </h3>
                                                <p className="text-gray-600">
                                                    Price: ${item.product.price}
                                                </p>
                                                <p className="text-gray-800 font-medium mt-2">
                                                    Quantity: {item.quantity}
                                                </p>
                                                <p className="text-gray-800 font-medium mt-2">
                                                    Total:{" "}
                                                    {calculateTotalPrice(item).toLocaleString("vi-VN", {
                                                        style: "currency",
                                                        currency: "VND",
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
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
                        </div>
                    </div>

                    <div className="col-span-4">
                        <h3 className="text-xl font-bold mb-4">Contact Details</h3>
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
                                    {addresses.map((address) => (
                                        <option key={address._id} value={address._id}>
                                            {address.street}, {address.city}, {address.country}
                                        </option>
                                    ))}
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

                            <div className="flex justify-between">
                                <Link to="/cart">
                                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded">
                                        &lt; Return to Cart
                                    </button>
                                </Link>
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Submit Order
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CartContact;