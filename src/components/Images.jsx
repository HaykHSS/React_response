const Images = () => {
  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 sm:gap-4 gap-2  px-2 sm:px-12 md:px-12 lg:px-20 xl:px-[120px] lg:mt-20 md:mt-14 mt-10">
      <img className="w-full" src="/images/1.png" alt="first" />
      <img className="w-full" src="/images/2.png" alt="second" />
      <img className="w-full lg:col-span-2" src="/images/3.png" alt="third" />
      <img className="w-full" src="/images/4.png" alt="fourth" />
      <img className="w-full" src="/images/5.png" alt="fifth" />
    </section>
  );
};
export default Images;
