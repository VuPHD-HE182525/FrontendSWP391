import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";

function CartCompletion() {
    const navigate = useNavigate();
    const [orderDetails, setOrderDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const response = await axios.get("/api/orders/last", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setOrderDetails(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchOrderDetails();
    },);

    const handleContinueShopping = () => {
        navigate("/products");
    };

    if (isLoading) {
        return <div>Loading order details...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!orderDetails) {
        return <div>Order not found.</div>;
    }

    return (
        <div>
            <div className="cart-completion container mx-auto mt-10">
                <h2 className="text-2xl font-bold mb-5">Order Confirmation</h2>
                <p className="mb-4">
                    Thank you for your order! Your order has been placed successfully.
                </p>

                <div className="bg-gray-100 p-4 rounded">
                    <h3 className="text-xl font-bold mb-4">Order Details</h3>
                    <div>
                        <p>
                            <strong>Full Name:</strong> {orderDetails.fullName}
                        </p>
                        <p>
                            <strong>Phone Number:</strong> {orderDetails.phoneNumber}
                        </p>
                        <p>
                            <strong>Address:</strong>{" "}
                            {orderDetails.delivery_address.street},{" "}
                            {orderDetails.delivery_address.city},{" "}
                            {orderDetails.delivery_address.country}
                        </p>
                        <p>
                            <strong>Payment Method:</strong> {orderDetails.paymentMethod}
                        </p>
                    </div>

                    <ul className="mt-4">
                        {orderDetails.product_detail.map((product, index) => (
                            <li key={index} className="border-b py-2">
                                <div className="flex items-center">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-16 h-16 object-cover mr-4"
                                    />
                                    <div>
                                        <h4 className="text-lg font-medium">{product.name}</h4>
                                        <p className="text-gray-600">
                                            Quantity: {product.quantity}
                                        </p>
                                        <p className="text-gray-600">Price: {product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4 font-bold">
                        Total: {(orderDetails.product_detail.reduce((sum, item) => sum + item.price * item.quantity, 0) + 20000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                    </p>
                </div>

                <button
                    onClick={handleContinueShopping}
                    className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
}

export default CartCompletion;