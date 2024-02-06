import App from "../../App";
import { PropsWithChildren } from "react";

const BlankLayout = ({ children }: PropsWithChildren) => {
  return (
    <App>
      <div className="fixed right-0 top-0 z-50 flex h-full w-full items-center justify-center bg-white text-black dark:text-white-dark">
        {children}
      </div>
    </App>
  );
};

export default BlankLayout;
