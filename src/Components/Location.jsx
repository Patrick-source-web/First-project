import React from "react";
import map from "../assets/map.png";

function Location() {
  return (
    <>
      <div className="flex w-10/12 mx-auto mt-10">
        <div>
            <ul className="font-bold text-[18px]">
                <li>London</li>
                <li>S. Petersburg</li>
                <li>Warsaw</li>
                <li>Belgrade</li>
                <li>Budapest</li>
                <li>Barcelona</li>
                <li>Munich</li>
                <li>Milan</li>
                <li>Birminghan</li>
                <li>Cologne</li>
            </ul>
        </div>
        <div>
          <img src={map} alt="map pic" />
        </div>
      </div>
    </>
  );
}

export default Location;
