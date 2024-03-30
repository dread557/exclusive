import { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({ children, size }) => {
  return (
    <button
      className={` bg-[#bd4444] flex justify-center items-center text-white text-[1.2rem] md:text-[1.6rem] rounded capitalize px-[1rem] py-[.5rem] h-[4rem] md:h-[5.6rem] hover:opacity-90  ${
        size ? `w-[${size}]` : `w-[23.4rem]`
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
