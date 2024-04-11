import CustomButton from "./common/CustomButton";

const Header = () => {
  return (
    <header className="flex px-2 sm:px-12 md:px-12 lg:px-20 xl:px-[120px] py-2 sm:py-4 md:py-6 lg:py-8 xl:py-[42px] items-center">
      <img
        className="cursor-pointer lg:w-[126px] lg:h-[54px] md:w-[104px] md:h-[44px] w-[80px] h-[34px]"
        src="/logo.svg"
        alt="Logo"
      />
      <nav className="ml-auto xl:mr-[74px] lg:mr-[64px] md:mr-[48px] mr-[12px]">
        <ul className="flex xl:text-base lg:text-sm text-[10px] text-[#333] xl:gap-[74px] lg:gap-[64px] md:gap-[48px] gap-[8px]">
          <li className="hover:text-[#918e8e]">
            <a href="">Home</a>
          </li>
          <li className="hover:text-[#918e8e]">
            <a href="">About Us</a>
          </li>
          <li className="hover:text-[#918e8e]">
            <a href="">Services</a>
          </li>
          <li className="font-semibold hover:text-[#918e8e]">
            <a href="">Our Teams</a>
          </li>
        </ul>
      </nav>
      <CustomButton type="blue" />
    </header>
  );
};
export default Header;
