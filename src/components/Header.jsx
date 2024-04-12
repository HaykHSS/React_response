import CustomButton from "./common/CustomButton";
import { detectDevice } from "../helpers/detectDevice";
import CustomNavbar from "./common/CustomNavbar";
import { useState } from "react";

const Header = () => {
  const device = detectDevice();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  }

  const handleOpen = () => {
    setIsOpen(true);
  }

  return (
    <header className="flex px-2 sm:px-12 md:px-12 lg:px-20 xl:px-[120px] py-2 sm:py-4 md:py-6 lg:py-8 xl:py-[42px] items-center">
      <img
        className="cursor-pointer lg:w-[126px] lg:h-[54px] md:w-[104px] md:h-[44px] w-[80px] h-[34px]"
        src="/logo.svg"
        alt="Logo"
      />
      <CustomNavbar isOpen={isOpen} handleClose={handleClose} />
      <CustomButton type="blue" />
      {device === "mobile" && (
        <>
          <img
            onClick={handleOpen}
            width={16}
            height={16}
            className="ml-4 cursor-pointer"
            src="/burger.svg"
            alt="burger"
          />
          {isOpen && (
            <button onClick={handleClose} className="absolute top-4 right-4 text-lg text-white cursor-pointer">
              X
            </button>
          )}
        </>
      )}
    </header>
  );
};
export default Header;
