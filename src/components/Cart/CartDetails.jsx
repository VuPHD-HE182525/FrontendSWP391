import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { AiOutlineDelete } from 'react-icons/ai'; // Import the delete icon

function CartDetails() {
    const SHIPPING_FEE = 20000; // Shipping fee in VND
    const [cartItems, setCartItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true; // Prevent state update if component is unmounted
        setIsLoading(true);

        const fetchCartItems = async () => {
            try {
                const response = await axios.get('/api/cart', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                });
                console.log(response.data);
                if (isMounted) {
                    setCartItems(Array.isArray(response.data) ? response.data : []);
                    setIsLoading(false);
                }
            } catch (error) {
                if (isMounted) {
                    setError(error);
                    setIsLoading(false);
                }
            }
        };

        fetchCartItems();

        return () => {
            isMounted = false; // Cleanup function to avoid memory leaks
        };
    }, []); // Empty dependency array ensures this runs only once
    

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
    

    if (isLoading) {
        return <div>Loading cart items...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="cart-details container mx-auto mt-10 bg-white text-xs">
            <h2 className="text-2xl font-bold mb-5">Your Cart</h2>
            <h3 className="text-l mb-5">There are {cartItems.length} products in your cart</h3>
            {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-48">
                    <p className="text-lg mb-4">Your Cart is currently empty.</p>
                    <Link to="/products">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            ) : (
                <div className="cart-content">
                    <div className="flex"> {/* Added flex for layout */}
                        <div className="w-3/4"> {/* Table takes 75% width */}
                            <table className="table-auto w-full border">
                                <thead>
                                    <tr className="bg-white border">
                                        <th className="text-left px-4 py-2">Product</th>
                                        <th className="text-left px-4 py-2">Unit Price</th>
                                        <th className="text-left px-4 py-2">Quantity</th>
                                        <th className="text-left px-4 py-2">Subtotal</th>
                                        <th className="text-left px-4 py-2">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <tr key={item._id} className="border-b">
                                            <td className="px-4 py-2 flex items-center">
                                                <img
                                                    src={item.productId.image}
                                                    alt={item.productId.name}
                                                    className="w-16 h-16 object-cover mr-2"
                                                />
                                                {item.productId.name}
                                            </td>
                                            <td className="px-4 py-2">
                                                {item.productId.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                            </td>
                                            <td className="px-4 py-2">
                                                <button
                                                    onClick={() => handleQuantityChange(item._id, Math.max(1, item.quantity - 1))}
                                                    className="bg-gray-200 px-2 py-1 rounded-full"
                                                >
                                                    -
                                                </button>
                                                <span className="px-3 py-1">{item.quantity}</span>
                                                <button
                                                    onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                                                    className="bg-gray-200 px-2 py-1 rounded-full"
                                                >
                                                    +
                                                </button>
                                            </td>
                                            <td className="px-4 py-2">
                                                {calculateTotalPrice(item).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                            </td>
                                            <td className="px-4 py-2 text-center">
                                                <button onClick={() => handleRemoveFromCart(item._id)} className="text-red-500">
                                                    <AiOutlineDelete />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="w-1/4 pl-8">
                            <div className="bg-white p-4 rounded border">
                                <h3 className="text-xl font-bold mb-4">Your Cart</h3>
                                <div className="bg-white p-4 rounded">
                                    <hr className="my-2" />
                                    <div className="flex justify-between mb-2">
                                        <span>{cartItems.length} Items:</span>
                                        <span>{grandTotal.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span>Shipping:</span>
                                        <span>{SHIPPING_FEE.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                                    </div>
                                    <div className="flex justify-between font-bold">
                                        <span>Total:</span>
                                        <span>{totalWithShipping.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                                    </div>
                                </div>
                                <Link to="/cart/contact">
                                    <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                        CHECK OUT
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
}

export default CartDetails;