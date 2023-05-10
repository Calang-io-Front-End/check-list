import { FC } from "react";

interface FooterProps {
  className: string;
}

const Footer: FC<FooterProps> = ({ className }) => {
  return <footer className={className}>Footer</footer>;
};

export default Footer;
