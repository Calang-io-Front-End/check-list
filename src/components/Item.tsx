import { FC } from "react";

interface ItemProps {
  children: string;
  id: number;
}

const Item: FC<ItemProps> = ({ children, id }) => {
  return (
    <div
      className={
        "bg-white w-full h-14 px-2 mb-1 flex items-start justify-start"
      }
    >
      <input
        type="checkbox"
        value={`item-${id}`}
        className={"border-[2px] min-w-[15.7px] h-[17.5px] mt-1 mr-3"}
      ></input>
      <span className={"align-top leading-6 text-[#081F2C] line-clamp-2"}>
        {children}
      </span>
    </div>
  );
};

export default Item;
