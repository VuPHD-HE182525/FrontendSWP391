import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

export const MyContext = createContext();

export default function Layout() {
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        fetchDataFromApi("/api/category/").then((res) => {
            if (res?.error === false) {
                setCategoryData(res?.data);
            }
        });
    }, []);

    const values = {
        categoryData,
    };

    return (
        <>
            <MyContext.Provider value={ values }>
                <Header />
                <Outlet />
                <footer>
                    <Footer />
                </footer>
            </MyContext.Provider>
        </>
    );
};
