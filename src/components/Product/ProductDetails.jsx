import React from "react";
import { useParams } from "react-router-dom";
import mockProducts from "../../data/mockData";

const ProductDetails = () => {
    const { id } = useParams();
    const product = mockProducts.find((item) => item.id === parseInt(id));

    if (!product) return <h2 className="text-center text-2xl mt-10">Sản phẩm không tồn tại</h2>;

    return (
        <div className="container mx-auto px-4 py-6">
            {/* Phần trên: Hình ảnh + Thông tin sản phẩm */}
            <div className="flex gap-10">
                {/* Ảnh sản phẩm */}
                <div className="w-1/3">
                    <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-lg" />
                </div>

                {/* Thông tin sản phẩm */}
                <div className="w-2/3">
                    <h2 className="text-3xl font-bold">{product.name}</h2>
                    <p className="text-gray-500 text-lg">Thương hiệu: {product.brand}</p>

                    {/* Giá sản phẩm */}
                    <div className="flex items-center space-x-3 mt-3">
                        <span className="text-red-500 font-bold text-3xl">
                            {product.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                        </span>
                        <span className="text-gray-400 line-through text-lg">
                            {product.oldPrice.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                        </span>
                        <span className="bg-red-500 text-white px-3 py-1 text-sm rounded">
                            -{product.discount}%
                        </span>
                    </div>

                    {/* Đánh giá sao */}
                    <div className="flex items-center mt-2">
                        {"★".repeat(Math.floor(product.rating))}
                        {"☆".repeat(5 - Math.floor(product.rating))}
                        <span className="ml-2 text-gray-500">({product.rating}/5)</span>
                    </div>

                    {/* Mô tả sản phẩm */}
                    <p className="mt-4 text-gray-700">{product.description}</p>

                    {/* Chọn màu sắc */}
                    <div className="mt-4">
                        <label className="block text-sm font-medium">Màu sắc:</label>
                        <div className="flex space-x-2 mt-2">
                            {["red", "blue", "green", "black", "white"].map((color) => (
                                <button
                                    key={color}
                                    className="border px-3 py-1 rounded-lg hover:opacity-75 flex items-center justify-center w-10 h-10"
                                    style={{ backgroundColor: color }}
                                >
                                    {/* Hiển thị dấu tích nếu được chọn */}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Chọn cấu hình */}
                    <div className="mt-4">
                        <label className="block text-sm font-medium">Cấu hình:</label>
                        <div className="flex space-x-2 mt-2">
                            {[
                                "8GB RAM - 128GB",
                                "12GB RAM - 256GB",
                                "16GB RAM - 512GB",
                                "32GB RAM - 1TB"
                            ].map((config) => (
                                <button
                                    key={config}
                                    className="border px-3 py-1 rounded-lg hover:bg-gray-200 text-sm"
                                >
                                    {config}
                                </button>
                            ))}
                        </div>
                    </div>


                    {/* Chọn số lượng */}
                    <div className="mt-4">
                        <label className="block text-sm font-medium">Số lượng:</label>
                        <input
                            type="number"
                            defaultValue={1}
                            min={1}
                            className="border px-2 py-1 w-20 mt-2"
                        />
                    </div>

                    {/* Nút thêm vào giỏ hàng */}
                    <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg w-full text-lg font-semibold">
                        Thêm vào giỏ hàng
                    </button>

                    {/* Wishlist và So sánh */}
                    <div className="flex space-x-4 mt-4 text-sm text-gray-600">
                        <button className="hover:text-red-500">❤️ Thêm vào Wishlist</button>
                        <button className="hover:text-blue-500">🔄 So sánh</button>
                    </div>
                </div>
            </div>

            {/* Phần dưới: Mô tả chi tiết + Đánh giá */}
            <div className="mt-12">
                <div className="border-b pb-4 flex space-x-6 text-lg font-semibold">
                    <button className="text-red-500 border-b-2 border-red-500 pb-2">Mô tả</button>
                    <button className="text-gray-500 hover:text-red-500">Đánh giá (6)</button>
                </div>
                <p className="mt-4 text-gray-700">{product.description}</p>
            </div>

            {/* Sản phẩm liên quan */}
            <div className="mt-12">
                <h3 className="text-2xl font-semibold">Sản phẩm liên quan</h3>
                <div className="grid grid-cols-4 gap-6 mt-4">
                    {mockProducts
                        .filter((item) => item.category === product.category && item.id !== product.id)
                        .slice(0, 4)
                        .map((item) => (
                            <div key={item.id} className="border p-4 rounded-lg shadow-lg">
                                <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                                <h4 className="mt-2 text-lg font-semibold">{item.name}</h4>
                                <p className="text-sm text-gray-500">{item.brand}</p>
                                <div className="flex items-center space-x-2">
                                    <span className="text-red-500 font-bold">{product.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</span>
                                    <span className="text-gray-400 line-through text-lg">
                                        {product.oldPrice.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                                    </span>                                    <span className="bg-red-500 text-white px-2 py-1 text-xs rounded">
                                        -{item.discount}%
                                    </span>
                                </div>
                                <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg w-full">
                                    Xem chi tiết
                                </button>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
