import Header from "./components/Header";
import Hero from "./components/Hero";
import Descriptions from "./components/Descriptions";
import Images from "./components/Images";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <Descriptions />
      <Images />
      <ContactUs />
      <Footer />
    </div>
  );
};
export default App;
