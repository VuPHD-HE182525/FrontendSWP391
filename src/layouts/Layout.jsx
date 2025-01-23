import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
    return (
        <>
            <NavBar />
            <Outlet />
            <footer>
                <Footer />
            </footer>
        </>
    );
};
