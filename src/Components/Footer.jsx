import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <footer className="flex justify-end h-40 bg-[#333333] items-end text-blue text-lg">
          © {new Date().getFullYear()} Patrick Iradukunda. All rights reserved.
        </footer>
      </footer>
    </>
  );
}

export default Footer;
