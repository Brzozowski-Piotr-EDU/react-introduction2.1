import { ReactNode } from "react";

export interface ButtonProps {
  className: string;
  children: ReactNode;
  onClick: () => void;
}
export const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
