import React from "react";
import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <footer className="bg-[#1A1A1A] py-10">
            <div className="container mx-auto grid grid-cols-7 poppins text-white">
                <div className="col-span-2">About Shopery</div>
                <div>My Account</div>
                <div>Helps</div>
                <div>Proxy</div>
                <div className="col-span-2">Download</div>
            </div>
        </footer>
    );
};

export default Footer;