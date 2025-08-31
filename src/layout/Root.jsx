import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";
import Sticky from 'react-stickynode';

const Root = () => {


    return (
        <>
            <Sticky innerZ={15}>
                <Navbar></Navbar>
            </Sticky>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Root;