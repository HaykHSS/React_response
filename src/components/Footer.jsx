const Footer = () => {
  return (
    <footer className="flex gap-8 px-2 sm:px-12 md:px-12 lg:px-20 xl:px-[120px] py-8 sm:py-10 md:py-12 lg:py-16 xl:py-[84px] items-center justify-between">
      <div className="max-w-[480px]">
        <img
          className="cursor-pointer lg:w-[126px] lg:h-[54px] md:w-[104px] md:h-[44px] w-[80px] h-[34px] mb-3"
          src="/logo.svg"
          alt="logo"
        />
        <h3 className="text-[#333333] lg:text-4xl md:text-3xl text-xl ">
          One of the best furniture agency.
        </h3>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-[10px] items-center lg:mb-4 md:mb-3 mb-1">
          <div className="rounded-full lg:w-[14px] md:w-[12px] w-[10px] aspect-square bg-[#333333]"></div>
          <span className="text-[#333333] lg:text-lg md:text-base text-sm whitespace-nowrap">
            Enter your email to get the laterst news
          </span>
        </div>
        <div className="relative mt-5 lg:mb-10 md:mb-8 mb-6">
          <input
            className="placeholder:text-[#D9D9D9] w-full pr-8 outline-none lg:text-base md:text-sm text-xs"
            placeholder="Email Address"
            type="email"
            name="email"
            id="email"
          />
          <img
            className="ml-[-10px] absolute top-1/2 -translate-y-1/2 right-0"
            src="/arrow.svg"
            alt="arrow"
          />
          <div className="absolute lg:bottom-[-8px] md:bottom-[-6px] bottom-[-2px] w-full h-[2px] bg-[#141414]"></div>
        </div>
        <div className=" inline-flex flex-col gap-[11px] self-end">
          <span className="text-[#333333] lg:text-base text-sm">
            Follow us On
          </span>
          <div className="flex lg:gap-[25px] md:gap-5 gap-4">
            <div className="w-[32px] h-[32px] flex items-center justify-center cursor-pointer bg-[#D9D9D9] rounded-full">
              <img src="/social/facebook.svg" alt="facebook" />
            </div>
            <div className="w-[32px] h-[32px] flex items-center justify-center cursor-pointer bg-[#D9D9D9] rounded-full">
              <img src="/social/instagram.svg" alt="facebook" />
            </div>
            <div className="w-[32px] h-[32px] flex items-center justify-center cursor-pointer bg-[#D9D9D9] rounded-full">
              <img src="/social/tiktok.svg" alt="facebook" />
            </div>
            <div className="w-[32px] h-[32px] flex items-center justify-center cursor-pointer bg-[#D9D9D9] rounded-full">
              <img src="/social/youtube.svg" alt="facebook" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
