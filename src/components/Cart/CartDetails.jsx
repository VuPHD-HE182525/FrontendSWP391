import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header'; // Import the Header component
import Footer from '../Footer'; // Import the Footer component
import { Link } from "react-router-dom";
import { AiOutlineDelete } from 'react-icons/ai'; // Import the delete icon

function CartDetails() {
    const SHIPPING_FEE = 20000; // Shipping fee in VND
    const [cartItems, setCartItems] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get('/api/cart', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in header
                    }
                });
                setCartItems(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCartItems();
    },);

    const handleQuantityChange = async (itemId, newQuantity) => {
        try {
            // Send API request to update quantity in the backend
            await axios.put(`/api/cart/${itemId}`, { quantity: newQuantity }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in header
                }
            });

            // Update the quantity in the state
            setCartItems((prevItems) =>
                prevItems.map((item) =>
                    item._id === itemId ? { ...item, quantity: newQuantity } : item,
                ),
            );
        } catch (error) {
            console.error("Error updating quantity:", error);
            // Handle error (e.g., show an error message)
        }
    };

    const handleRemoveFromCart = async (itemId) => {
        try {
            // Send API request to remove item from cart in the backend
            await axios.delete(`/api/cart/${itemId}`);

            // Update the cart items in the state
            setCartItems((prevItems) =>
                prevItems.filter((item) => item._id !== itemId),
            );
        } catch (error) {
            console.error("Error removing item from cart:", error);
            // Handle error (e.g., show an error message)
        }
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
    

    if (isLoading) {
        return <div>Loading cart items...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <Header /> {/* Include the Header */}
            <div className="cart-details container mx-auto mt-10">
                <h2 className="text-2xl font-bold mb-5">SHOPPING CART</h2> {/* Updated title */}

                <div className="cart-content grid grid-cols-12 gap-8"> {/* Grid layout */}
                    <div className="col-span-8"> {/* Left column */}
                        {cartItems.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
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
                                                <h3 className="text-lg font-medium">{item.product.name}</h3>
                                                <p className="text-gray-600">
                                                    Price: ${item.product.price}
                                                </p>
                                                <div className="flex items-center mt-2">
                                                    <button
                                                        onClick={() =>
                                                            handleQuantityChange(
                                                                item._id,
                                                                Math.max(1, item.quantity - 1),
                                                            )
                                                        }
                                                        className="bg-gray-200 px-2 py-1 rounded-l">-</button>
                                                    <span className="px-3 py-1 border">{item.quantity}</span>
                                                    <button
                                                        onClick={() =>
                                                            handleQuantityChange(item._id, item.quantity + 1)
                                                        }
                                                        className="bg-gray-200 px-2 py-1 rounded-r">+</button>
                                                    <button
                                                        onClick={() => handleRemoveFromCart(item._id)}
                                                        className="text-red-500 ml-4">
                                                        <AiOutlineDelete /> {/* Use the delete icon */}
                                                    </button>
                                                </div>
                                                <p className="text-gray-800 font-medium mt-2">
                                                    Total: {calculateTotalPrice(item).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <Link to="/products"> {/* "Continue Shopping" link */}
                            <button className="mt-5 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded">
                                &lt; Continue Shopping
                            </button>
                        </Link>
                    </div>

                    <div className="col-span-4"> {/* Right column */}
                        <h3 className="text-xl font-bold mb-4">CART TOTAL</h3>
                        <div className="bg-gray-100 p-4 rounded">
                            <div className="flex justify-between mb-2">
                                <span>{cartItems.length} Items:</span>
                                <span>{calculateGrandTotal().toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Shipping:</span>
                                <span>{SHIPPING_FEE.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span> {/* Placeholder for shipping cost */}
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between font-bold">
                                <span>Total:</span>
                                <span>{calculateTotalWithShipping().toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span> {/* Display grand total */}
                            </div>
                            <Link to="/cart/contact">
                                <button className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    CHECK OUT
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer /> {/* Include the Footer */}
        </div>
        
    );
}

export default CartDetails;