import React from "react";

const Loaderr = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#000] bg-opacity-10 z-50">
      <div
        className="inline-block h-10 w-10 animate-spin animate-spin-fast rounded-full border-4 border-[#8D3F42]   border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_0.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loaderr;
