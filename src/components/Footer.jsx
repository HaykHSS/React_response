import { useState } from "react";
import debounce from 'lodash.debounce';
import clsx from "clsx";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  };

  const debouncedValidateEmail = debounce((value) => {
    setIsValid(validateEmail(value));
  }, 500);

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    debouncedValidateEmail(value);
  };

  return (
    <footer className="flex gap-8 px-2 sm:px-12 md:px-12 lg:px-20 xl:px-[120px] py-8 sm:py-10 md:py-12 lg:py-16 xl:py-[84px] items-center justify-between">
      <div className="max-w-[480px]">
        <img
          className="cursor-pointer lg:w-[126px] lg:h-[54px] md:w-[104px] md:h-[44px] w-[80px] h-[34px] mb-3"
          src="/logo.svg"
          alt="logo"
        />
        <h3 className="text-[#333333] lg:text-4xl md:text-3xl sm:text-lg text-sm ">
          One of the best furniture agency.
        </h3>
      </div>
      <div className="flex flex-col">
        <div className="flex lg:gap-[10px] md:gap-2 gap-1 items-center lg:mb-4 md:mb-3 mb-0">
          <div className="rounded-full lg:w-[14px] md:w-[12px] sm:w-[10px] w-2 aspect-square bg-[#333333]"></div>
          <span className="text-[#333333] lg:text-lg md:text-base sm:text-sm text-xs whitespace-nowrap">
            Enter your email to get the latest news
          </span>
        </div>
        <div className="relative mt-5 lg:mb-10 md:mb-8 mb-6">
          <input
            onChange={handleChange}
            className={clsx('placeholder:text-[#D9D9D9] w-full pr-8 outline-none lg:text-base md:text-sm text-xs rounded-sm',{
              "focus:outline-red-500": !isValid,
              "focus:outline-green-500": isValid && email
            })}
            placeholder="Email Address"
            type="email"
            name="email"
            id="email"
            value={email}
          />
          <img
            className="ml-[-10px] absolute top-1/2 -translate-y-1/2 right-0 lg:hover:cursor-pointer"
            src="/arrow.svg"
            alt="arrow"
          />
          <div className="absolute lg:bottom-[-8px] bottom-[-6px] w-full h-[2px] bg-[#141414]"></div>
        </div>
        <div className=" inline-flex flex-col gap-[11px] self-end">
          <span className="text-[#333333] lg:text-base text-sm">
            Follow us On
          </span>
          <div className="flex lg:gap-[25px] md:gap-5 gap-4">
            <div className="w-[32px] h-[32px] flex items-center justify-center cursor-pointer bg-[#D9D9D9] lg:hover:bg-[#a19f9f] rounded-full">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/social/facebook.svg" alt="facebook" />
              </a>
            </div>
            <div className="w-[32px] h-[32px] flex items-center justify-center cursor-pointer bg-[#D9D9D9] lg:hover:bg-[#a19f9f] rounded-full">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/social/instagram.svg" alt="facebook" />
              </a>
            </div>
            <div className="w-[32px] h-[32px] flex items-center justify-center cursor-pointer bg-[#D9D9D9] lg:hover:bg-[#a19f9f] rounded-full">
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/social/tiktok.svg" alt="facebook" />
              </a>
            </div>
            <div className="w-[32px] h-[32px] flex items-center justify-center cursor-pointer bg-[#D9D9D9] lg:hover:bg-[#a19f9f] rounded-full">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/social/youtube.svg" alt="facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
