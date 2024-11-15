import { Outlet } from "react-router-dom"
import Footer from "../Pages/Shared/Footer"
import Navbar from "../Pages/Shared/Navbar"

const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </>
    )
}
export default Main