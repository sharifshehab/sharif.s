import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Root;