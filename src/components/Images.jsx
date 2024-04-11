import { useEffect, useState } from "react";

const images = [
  { path: "/images/1.png", alt: "first", customStyle: "" },
  { path: "/images/2.png", alt: "second", customStyle: "" },
  { path: "/images/3.png", alt: "third", customStyle: "col-span-2" },
  { path: "/images/4.png", alt: "fourth", customStyle: "" },
  { path: "/images/5.png", alt: "fifth", customStyle: "" },
];

const Images = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleEscPress = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    if (selectedImage) {
      window.addEventListener("keydown", handleEscPress);
      window.addEventListener("click", handleCloseModal);
    }
    return () => {
      window.removeEventListener("keydown", handleEscPress);
      window.removeEventListener("click", handleCloseModal);
    };
  }, [selectedImage]);

  return (
    <section className="grid grid-cols-2 lg:gap-8 md:gap-6 sm:gap-4 gap-2 px-2 sm:px-12 md:px-12 lg:px-20 xl:px-[120px] lg:mt-20 md:mt-14 mt-10">
      {images.map((image, index) => (
        <img
          key={index}
          className={`w-full ${image.customStyle}`}
          src={image.path}
          alt={image.alt}
          onClick={(e) => {
            e.stopPropagation();
            handleImageClick(image.path);
          }}
        />
      ))}

      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="max-w-3xl w-full p-4 bg-white rounded-lg shadow-lg">
            <img src={selectedImage} alt="selected" className="w-full" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Images;
