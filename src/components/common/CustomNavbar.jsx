import { detectDevice } from "../../helpers/detectDevice";
import PropTypes from "prop-types";

const CustomNavbar = ({ isOpen }) => {
  const device = detectDevice();

  return device !== "mobile" ? (
    <nav className="ml-auto xl:mr-[74px] lg:mr-[64px] md:mr-[48px] mr-[12px]">
      <ul className="flex xl:text-base lg:text-sm text-[10px] text-[#333] xl:gap-[74px] lg:gap-[64px] md:gap-[48px] gap-[8px]">
        <li className="lg:hover:text-[#918e8e]">
          <a href="">Home</a>
        </li>
        <li className="lg:hover:text-[#918e8e]">
          <a href="">About Us</a>
        </li>
        <li className="lg:hover:text-[#918e8e]">
          <a href="">Services</a>
        </li>
        <li className="font-semibold lg:hover:text-[#918e8e]">
          <a href="">Our Teams</a>
        </li>
      </ul>
    </nav>
  ) : isOpen ? (
    <nav className="fixed z-50 inset-0 bg-black opacity-90">
      <ul className="flex h-full flex-col text-2xl  text-[#f3f3f3] gap-10 justify-center items-center">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Our Teams</a>
        </li>
      </ul>
    </nav>
  ) : (
    ""
  );
};
export default CustomNavbar;

CustomNavbar.propTypes = {
  isOpen: PropTypes.bool,
};
