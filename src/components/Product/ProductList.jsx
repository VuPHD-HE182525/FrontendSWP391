import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const ProductList = () => {
    const [selectedCategory, setSelectedCategory] = useState("Tất cả");
    const [selectedBrand, setSelectedBrand] = useState("Tất cả");
    const [selectedPriceRange, setSelectedPriceRange] = useState("All");
    const [customPriceRange, setCustomPriceRange] = useState([0, 150000000]);
    const [selectedRating, setSelectedRating] = useState(null);
    const [products, setProducts] = useState([]); // State lưu danh sách sản phẩm từ API
    const [loading, setLoading] = useState(true); // State theo dõi trạng thái tải
    const [error, setError] = useState(""); // State lưu lỗi nếu có

    // Danh mục sản phẩm
    const categories = ["Tất cả", "Điện Thoại", "Laptop", "Phụ Kiện"];

    // Lấy danh sách thương hiệu từ dữ liệu sản phẩm
    const brands = ["Tất cả", ...new Set(products.map((product) => product.brand))];

    // Mức giá lọc
    const priceRanges = [
        { label: "Tất cả", value: "All" },
        { label: "Dưới 2 triệu", value: "under2m", min: 0, max: 2000000 },
        { label: "Từ 2 - 4 triệu", value: "2to4m", min: 2000000, max: 4000000 },
        { label: "Từ 4 - 7 triệu", value: "4to7m", min: 4000000, max: 7000000 },
        { label: "Từ 7 - 13 triệu", value: "7to13m", min: 7000000, max: 13000000 },
        { label: "Từ 13 - 20 triệu", value: "13to20m", min: 13000000, max: 20000000 },
        { label: "Trên 20 triệu", value: "above20m", min: 20000000, max: Infinity },
    ];

    // Lọc sản phẩm theo danh mục, thương hiệu, giá và đánh giá sao
    const filteredProducts = products.filter((product) => {
        const matchesCategory = selectedCategory === "Tất cả" || product.catName === selectedCategory;
        const matchesBrand = selectedBrand === "Tất cả" || product.brand === selectedBrand;

        let matchesPrice = true;
        if (selectedPriceRange !== "All") {
            const range = priceRanges.find((p) => p.value === selectedPriceRange);
            matchesPrice = product.price >= range.min && product.price <= range.max;
        } else {
            matchesPrice = product.price >= customPriceRange[0] && product.price <= customPriceRange[1];
        }

        const matchesRating = selectedRating === null || product.rating >= selectedRating;

        return matchesCategory && matchesBrand && matchesPrice && matchesRating;
    });

    useEffect(() => {
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
        axios.get(`${API_BASE_URL}/api/product/getAllProducts`)
            .then(response => {
                console.log("Dữ liệu API nhận được:", response.data);
                if (response.data && Array.isArray(response.data.products)) {
                    setProducts(response.data.products);
                } else {
                    console.error("API không trả về mảng products:", response.data);
                    setProducts([]); // Đảm bảo luôn có danh sách sản phẩm hợp lệ
                }
                setLoading(false);
            })
            .catch(err => {
                setError("Có lỗi xảy ra khi tải dữ liệu!");
                setLoading(false);
                console.error(err);
            });
    }, []);

    if (loading) return <div>Đang tải...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 flex gap-6">
                {/* Sidebar - Bộ lọc */}
                <aside className="w-1/4 border p-4 rounded-lg shadow-lg max-h-[500px] overflow-y-auto sticky top-4">
                    <h2 className="text-xl font-semibold mb-4">Bộ lọc tìm kiếm</h2>

                    {/* Bộ lọc danh mục */}
                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">Danh mục sản phẩm</h3>
                        <ul>
                            {categories.map((category) => (
                                <li key={category} className="mb-2">
                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="category"
                                            value={category}
                                            checked={selectedCategory === category}
                                            onChange={() => setSelectedCategory(category)}
                                            className="form-radio text-red-500"
                                        />
                                        <span>{category}</span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bộ lọc giá */}
                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">Mức giá</h3>
                        <ul>
                            {priceRanges.map((range) => (
                                <li key={range.value} className="mb-2">
                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="price"
                                            value={range.value}
                                            checked={selectedPriceRange === range.value}
                                            onChange={() => setSelectedPriceRange(range.value)}
                                            className="form-radio text-red-500"
                                        />
                                        <span>{range.label}</span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Danh sách sản phẩm */}
                <div className="w-3/4">
                    <h2 className="text-2xl font-semibold my-4">
                        {selectedCategory === "Tất cả" ? "Tất cả sản phẩm" : selectedCategory}
                    </h2>
                    <div className="grid grid-cols-3 gap-6">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <div key={product._id} className="border p-4 rounded-lg shadow-lg">
                                    <Link to={`/product/${product._id}`}>
                                        <img
                                            src={product.image || "https://via.placeholder.com/150"}
                                            alt={product.name}
                                            className="w-full h-40 object-contain bg-white"
                                        />
                                    </Link>
                                    <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                                    <p className="text-sm text-gray-500">{product.brand}</p>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-red-500 font-bold">
                                            {product.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                                        </span>
                                        {product.oldPrice && (
                                            <span className="text-gray-400 line-through">
                                                {product.oldPrice.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                                            </span>
                                        )}
                                        {product.discount && (
                                            <span className="bg-red-500 text-white px-2 py-1 text-xs rounded">
                                                -{product.discount}%
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 col-span-3">Không có sản phẩm nào phù hợp.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
