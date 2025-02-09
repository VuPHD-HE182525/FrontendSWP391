import React, { useState } from "react";
import { Link } from "react-router-dom";
import mockProducts from "../../data/mockData";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const ProductList = () => {
    const [selectedCategory, setSelectedCategory] = useState("Tất cả");
    const [selectedBrand, setSelectedBrand] = useState("Tất cả");
    const [selectedPriceRange, setSelectedPriceRange] = useState("All");
    const [customPriceRange, setCustomPriceRange] = useState([0, 150000000]);
    const [selectedRating, setSelectedRating] = useState(null); // Thêm bộ lọc đánh giá sao

    // Danh mục sản phẩm
    const categories = ["Tất cả", "Smartphone", "Laptop", "Headphone"];

    // Lấy danh sách thương hiệu từ dữ liệu
    const brands = ["Tất cả", ...new Set(mockProducts.map((product) => product.brand))];

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
    const filteredProducts = mockProducts.filter((product) => {
        const matchesCategory = selectedCategory === "Tất cả" || product.category === selectedCategory;
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

    return (
        <div className="container mx-auto px-4 flex gap-6">
            {/* Sidebar - Bộ lọc */}
            <aside className="w-1/4 border p-4 rounded-lg shadow-lg">
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



                {/* Bộ lọc theo đánh giá sao */}
                <div className="mb-6">
                    <h3 className="font-semibold mb-2">Lọc theo đánh giá</h3>
                    <ul>
                        {[5, 4, 3, 2, 1].map((stars) => (
                            <li key={stars} className="mb-2">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={stars}
                                        checked={selectedRating === stars}
                                        onChange={() => setSelectedRating(stars)}
                                        className="form-radio text-red-500"
                                    />
                                    <span>
                                        {"★".repeat(stars)}
                                        {"☆".repeat(5 - stars)}
                                    </span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bộ lọc thương hiệu */}
                <div className="mb-6">
                    <h3 className="font-semibold mb-2">Thương hiệu</h3>
                    <ul>
                        {brands.map((brand) => (
                            <li key={brand} className="mb-2">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="brand"
                                        value={brand}
                                        checked={selectedBrand === brand}
                                        onChange={() => setSelectedBrand(brand)}
                                        className="form-radio text-red-500"
                                    />
                                    <span>{brand}</span>
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
                            <div key={product.id} className="border p-4 rounded-lg shadow-lg">
                                <Link to={`/product/${product.id}`}>
                                    <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
                                </Link>
                                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                                <p className="text-sm text-gray-500">{product.brand}</p>
                                <div className="flex items-center space-x-2">
                                    <span className="text-red-500 font-bold">
                                        {product.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                                    </span>
                                    <span className="text-gray-400 line-through">
                                        {product.oldPrice.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                                    </span>
                                    <span className="bg-red-500 text-white px-2 py-1 text-xs rounded">
                                        -{product.discount}%
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 col-span-3">Không có sản phẩm nào phù hợp.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
