import React from "react"

function Client ({Image, name, reaction}) {

    return (
        <>
        <div className="flex flex-col bg-[#93b6d8] h-150 w-full justify-center items-center mt-8">
            
        
        <div className="mx-auto w-10/12 text-white text-2xl">
        <img className="h-40 w-40 mb-8 rounded-[50%] mt-8" src={Image} alt="Client" />
        <p className="mb-8">{name}</p>
        <p>{reaction}</p>
        </div>
        </div>
        </>
    )
}

export default Client;