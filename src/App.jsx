import Header from "./components/Header";
import Hero from "./components/Hero";
import Descriptions from "./components/Descriptions";
import Images from "./components/Images";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { useState } from "react";
import clsx from "clsx";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx("flex flex-col overflow-x-hidden", {
        "overflow-y-hidden": isOpen,
      })}
    >
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <Descriptions />
      <Images />
      <ContactUs />
      <Footer />
    </div>
  );
};
export default App;
