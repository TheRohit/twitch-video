import { ReactNode } from "react";
import { Logo } from "./_components/logo";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full flex flex-col space-y-6 items-center justify-center">
      <Logo />
      {children}
    </div>
  );
};

export default layout;
