import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#000] bg-opacity-50 z-50">
      {/* <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-100 z-50">
        <svg className="svg fade-in" viewBox="0 0 600 400">
          <text className="text-center" x="40%" y="50%" dy="50px" fill="white">
            <tspan className="font-outfit font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-t from-contessa to-tosca">
              <tspan style={{ fill: "#bc7666" }}>e</tspan>
              RemoteHire
              <tspan style={{ fill: "#bc7666" }}>.</tspan>
            </tspan>
          </text>
        </svg>
      </div> */}
      <div
        className="inline-block h-10 w-10 animate-spin animate-spin-fast rounded-full border-4 border-[#8D3F42] border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_0.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loader;
