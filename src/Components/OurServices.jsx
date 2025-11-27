
import React from "react";
function OurServices ({title, description, image}) {

    return (
        <>
        <div>
            <h2 className="font-extrabold text-lg mb-8 text-center">{title}</h2>
            <p className="text-[18px] mb-4">{description}</p>
            <img src={image} alt="Services" className="h-40 rounded-lg" />
        </div>
        </>
    )
}

export default OurServices;