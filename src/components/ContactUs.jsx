import CustomButton from "./common/CustomButton";

const ContactUs = () => {
  return (
    <section className="flex md:flex-row lg:gap-[155px] md:gap-28 gap-14  px-2 sm:px-12 md:px-12 lg:px-20 xl:px-[120px] lg:py-[38px] md:py-7 py-5 lg:mt-[100px] md:mt-16 mt-12 bg-[#2C3878] items-center">
      <h3 className="text-white font-semibold lg:text-4xl md:text-3xl text-2xl">
        let&apos;s discuss making your interior like a dream place!
      </h3>
      <div className="flex flex-col lg:gap-5 md:gap-4 gap-2">
        <p className="text-[#D9D9D9] lg:text-lg md:text-base text-sm">
          Contact us below to work together to build your amazing interior
        </p>
        <CustomButton type="white" />
      </div>
    </section>
  );
};
export default ContactUs;
