import { FC } from "react";

interface ButtonProps {
  name: string;
  className: string;
}

const Button: FC<ButtonProps> = ({ name, className }) => {
  return <div className={className}>Hello {name}</div>;
};

export default Button;
