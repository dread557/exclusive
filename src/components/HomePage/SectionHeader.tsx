import React from "react";

interface Props {
  title: string;
}

const SectionHeader: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex gap-[2.3rem] items-center">
      <span className="w-[2rem] h-[4rem] bg-[#DB4444] rounded-md" />
      <h6 className="text-[1.6rem] text-[#DB4444] font-semibold ">{title}</h6>
    </div>
  );
};

export default SectionHeader;
