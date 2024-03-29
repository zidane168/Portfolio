import { useState } from "react";
import Image from "next/image";

interface ImageSliderUIProps {
  src: string[];
  color: string
}

const ImageSliderUI: React.FC<ImageSliderUIProps> = ({ src, color }) => {
  const images =
    src.length > 0
      ? src
      : [
          "/project/cityu-1.png",
          "/project/cidckids-1.png",
          "/project/crystaljade-1.png",
        ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const [selectedImage, setSelectedImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <>
      {isModalOpen && (
        <div className="lg:max-w-[100%] lg:h-full lg:top-0   fixed inset-[10%] flex items-center justify-center bg-black bg-opacity-75 z-20">
         
            <button
              className="absolute top-2 right-2 text-white text-2xl rounded-full w-[50px] h-[50px]" style={ { backgroundColor: color } }
              onClick={closeModal}
            >
              &times;
            </button>
         
            <img
              src={selectedImage}
              alt="Selected Image"
              className={ `lg:max-w-[65%] max-w-[100%] lg:p-2`} 
            />
          
        </div>
      )}

      <div className="relative">
        <button
          className="absolute top-[45%] left-[-13%] transition hover:scale-125"
          onClick={previousImage}
        >
          <Image src="/previous.png" height={30} width={30} alt="previous" />
        </button>

        <div
          className="transition-all"
          style={{
            width: "300px",
            height: "300px",
            overflow: "hidden",
            position: "relative",
            display: "inline-block",
          }}
        >
          <div
            className="transition-transform"
            style={{
              width: `${images.length * 300}px`,
              display: "flex",
              transform: `translateX(-${currentImageIndex * 300}px)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                style={{ width: "300px" }}
                onClick={() => handleImageClick(image)}
              >
                <Image
                  height={300}
                  width={300}
                  src={image}
                  alt="Slider Image"
                />
              </div>
            ))}
          </div>

          <div // point
            className="absolute bottom-2 left-0 right-0 flex justify-center"
            style={{ zIndex: 10 }}
          >
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 mx-1 rounded-full ${
                  index === currentImageIndex ? "bg-blue-700" : "bg-gray-200"
                }`}
              ></div>
            ))}
          </div>
        </div>

        <button
          className="absolute top-[45%] right-[-13%] transition hover:scale-125"
          onClick={nextImage}
        >
          <Image src="/next.png" height={30} width={30} alt="next" />
        </button>
      </div>
    </>
  );
};

export default ImageSliderUI;

{
  /* 
<Image className='transition' 
        height={300}
        width={300} src={images[currentImageIndex]} alt="Slider Image" />  */
}
