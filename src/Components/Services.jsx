import React from "react";
import bg from "../assets/background.jpg"


function Services () {

    return (
        <>
        <div className="h-[100vh] bg-cover bg-right bg-gray-200" style={{backgroundImage: `url(${bg})`}}>
        <div>
            <h1 className="text-[#ffffff] text-[20px] font-bold">Our Services</h1>
            <h3 className="text-[60px] text-[#ffffff] font-bold m-20 m-350- m-0 m-0">Professional Cleaning</h3>
            <p className="text-[18px] text-[#ffffff] m-20 m-370- m-60- m-[40px]-">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        </div>
        </div>
        </>
    )
}

export default Services;