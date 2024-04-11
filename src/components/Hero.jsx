const Hero = () => {
  return (
    <section className="flex flex-col items-center px-2 sm:px-12 md:px-12 lg:px-20 xl:px-[120px] lg:mt-14 md:mt-10 mt-6">
      <h1 className="lg:mb-[53px] md:mb-8 mb-6 font-bold lg:text-[3.5rem] md:text-5xl text-4xl line- text-center">
        Minimalist Room
      </h1>
      <p className="lg:mb-10 md:mb-8 mb-6 max-w-[460px] lg:text-lg md:text-base text-sm text-center">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      {/* <div className="w-full"> */}
      <img className=" w-full" src="/images/hero.png" alt="" />
      {/* </div> */}
    </section>
  );
};
export default Hero;
