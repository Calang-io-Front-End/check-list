import { FC } from "react";

interface CardProps {
  children: React.ReactNode;
  title: string;
}

const Card: FC<CardProps> = ({ title, children }) => {
  return (
    <div
      className={
        "bg-white w-full max-w-xs min-w-min flex flex-col rounded-lg overflow-hidden"
      }
    >
      <h2
        className={
          "bg-[rgba(91,196,0,0.85)] flex items-center whitespace-nowrap overflow-hidden h-11 text-[#081F2C] text-2xl font-medium px-4 mb-3"
        }
      >
        {title}
      </h2>
      {children}
    </div>
  );
};

export default Card;
