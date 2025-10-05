import { CustomRadioProps } from "@/types";
import React from "react";
// import "./RadioInput.css";

const RadioInput: React.FC<CustomRadioProps> = ({
  name,
  checked,
  onChange,
  id,
  label,
}) => {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={id}
        name={name}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only hidden"
      />
      <label
        htmlFor={id}
        className="p-[.2rem] border border-black rounded-full w-[2.4rem] h-[2.4rem] flex justify-center items-center"
      >
        <span
          style={{
            width: "2.4rem",
            height: "2.4rem",
          }}
          className={`inline-block w-[1.5rem] h-[1.5rem]  rounded-full cursor-pointer ${
            checked ? " bg-black" : ""
          }`}
        ></span>
      </label>

      <span className="ml-2 text-[1.6rem]">{label}</span>
    </div>
  );
};

export default RadioInput;
