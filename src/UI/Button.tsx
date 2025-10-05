import { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({
  children,
  size,
  height,
  btnType = "primary",
  onClick,
  className,
  disabled,
}) => {
  if (btnType === "secondary") {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        style={{
          width: size ? size : "21.8rem",
          opacity: disabled ? "0.5" : 1,
        }}
        className={`${className} bg-white border border-gray-500  flex justify-center ${disabled ? "opacity-50" : ""} items-center text-[1.4rem] font-medium rounded px-[1rem] py-[.5rem] ${
          height ? `h-[${height}] md:h-[${height}]` : "h-[4rem]  md:h-[5.6rem]"
        } hover:opacity-70 `}
      >
        {children}
      </button>
    );
  } else {
  }
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{ width: size ? size : "21.8rem", opacity: disabled ? "0.5" : 1 }}
      className={` ${className} bg-[#db4444] flex justify-center items-center ${disabled ? "opacity-50" : ""}  text-white text-[1.2rem] md:text-[1.6rem] rounded capitalize px-[1rem] py-[.5rem] ${
        height ? `h-[${height}] md:h-[${height}]` : "h-[4rem]  md:h-[5.6rem]"
      }  hover:opacity-90  ${size ? `w-[${size}]` : `w-[23.4rem]`}`}
    >
      {children}
    </button>
  );
};

export default Button;
