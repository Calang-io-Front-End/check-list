import { FC } from "react";
import Nav from "./Nav";

interface HeaderProps {
  className: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={className}>
      <Nav />
      Header
    </header>
  );
};

export default Header;
