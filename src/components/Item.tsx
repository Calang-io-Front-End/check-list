import { FC } from "react";
import { FaTrash } from "react-icons/fa";

interface ItemProps {
  children: string;
  id: string;
  title: string;
}

const Item: FC<ItemProps> = ({ children, id, title }) => {
  return (
    <div className="bg-white px-2 mb-1 flex items-center justify-start pb-2">
      <input
        title={title}
        type="checkbox"
        value={`item-${id}`}
        className="border-[2px] min-w-[15.7px] h-[17.5px] mt-1 mr-3"
      />
      <span className="align-top leading-6 text-[#081F2C] line-clamp-2">
        {children}
      </span>
      <div className="flex-grow"></div>
      <FaTrash className="text-[#ee290f] hover:cursor-pointer" />
    </div>
  );
};

export default Item;
