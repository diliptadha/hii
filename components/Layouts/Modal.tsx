import React from "react";

interface ModalProps {
  isVisible: boolean;
  onBackToHome: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ isVisible, onBackToHome }) => {
  return (
    <div className={isVisible ? "modal-visible" : "modal-hidden"}>
      <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gray-500 bg-opacity-[20%] backdrop-blur-sm">
        <div className="flex h-[200px] w-[300px] items-center justify-center rounded-2xl bg-white p-4 text-center">
          <div>
            <p className="mb-4 text-xl font-bold text-black">
              Time is up!
              <br /> Your test will reset
            </p>
            <button
              onClick={onBackToHome}
              className="rounded-full bg-[#8d3f42] px-4 py-2 text-base font-semibold text-white hover:bg-[#161616]"
            >
              Reset test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
