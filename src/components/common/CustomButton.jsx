import PropTypes from "prop-types";
import clsx from "clsx";

const CustomButton = ({ type = "blue" }) => {
  return (
    <button
      type="button"
      className={clsx(
        "font-medium text-[10px] md:text-sm lg:px-8 lg:py-[14px] md:px-6 md:py-[12px] px-4 py-[8px] ml-auto",
        {
          "bg-[#2C3878] text-white lg:hover:bg-[#6873b0]": type === "blue",
          "bg-white self-start lg:hover:bg-[#b8b8bc]": type === "white",
        }
      )}
    >
      Contact Us
    </button>
  );
};
export default CustomButton;

CustomButton.propTypes = {
  type: PropTypes.oneOf(["white", "blue"]),
};
