import { AiOutlineSearch } from "react-icons/ai";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="pl-6 md:pl-16 py-4 min-h-[10vh] min-w-full bg-white bg-opacity-90 grid mx-auto">
      <div className="flex items-center justify-left">
        <Nav />
        <div className="px-4 md:px-10">
          <img
            className="h-16 md:h-24 w-16 md:w-24"
            src="/assets/images/calang_logo.svg"
            alt="Calang.io Logo"
          />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Procure por uma task aqui!"
            className="pl-10 pr-4 py-2 w-full md:w-[30rem] sm:w-[30rem] border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <AiOutlineSearch className="w-6 h-6 text-[#5BC400]" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
