import React from "react";
import { motion } from "framer-motion";
import splash from "../assets/splash.png"
import { useState } from "react";

function ContactUs() {
    const[email, setEmail] = useState ("")
    const handleSubmit = (e)=>{ 
        e.preventDefault ();  // This will prevent the page to reload
        if (!email) {
            alert("Please enter your valid email")
        }else
         {alert(`Thank you for submitting your email:${email}`)              
        setEmail("");
    }
    };
  return (
    <>
    <div className="flex mx-auto bg-gray-300   ">
    <div className="h-70 w-10/12">
        <div >
            <h2 className="font-extrabold text-4xl">Transform Your Space With Our Cleaning Magic </h2>
            <p>Sample text. Click to select the Text Element.</p>
            <form onSubmit={handleSubmit}>
                <input 
                type="email" 
                placeholder="Enter a valid email"
                value={email}
                onChange={( e)=> setEmail(e.target.value)}  className="w-80 bg-gray-200 text-black h-8 border-none"/>
                  <button
              type="submit"
              className="bg-red-500 text-white rounded h-8 w-40"
            >
              Submit
            </button>
            </form>
        </div>
      </div>
      </div>
    </>
  );
}

export default ContactUs;
