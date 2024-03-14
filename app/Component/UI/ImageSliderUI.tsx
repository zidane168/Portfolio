import { useState } from 'react';
import Image from 'next/image';
 
interface ImageSliderUIProps {
    src: string[];
}

const ImageSliderUI: React.FC<ImageSliderUIProps> = ( { src } ) => {
  const images = src.length > 0 ? src : [
    '/project/cityu-1.png',
    '/project/cidckids-1.png',
    '/project/crystaljade-1.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex === images.length - 1 ? 0 : prevIndex + 1)
    );
  };

  return (
    <div className='relative'>
      <button className='absolute top-[45%] left-[-13%] transition hover:scale-125' onClick={previousImage}>
        <Image src='/previous.png' height={30}  width={30} alt="previous" />
      </button>

      <div
        className="transition-all"
        style={{
          width: '300px',
          height: '300px',
          overflow: 'hidden',
          position: 'relative',
          display: 'inline-block',
        }}
      >
        <div
          className="transition-transform"
          style={{
            width: `${images.length * 300}px`,
            display: 'flex',
            transform: `translateX(-${currentImageIndex * 300}px)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {images.map((image, index) => (
            <div key={index} style={{ width: '300px' }}>
              <Image
                height={300}
                width={300}
                src={image}
                alt="Slider Image"
              />
            </div>
          ))}
        </div>

        <div    // point
          className="absolute bottom-2 left-0 right-0 flex justify-center"
          style={{ zIndex: 10 }}
        >
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 mx-1 rounded-full ${
                index === currentImageIndex ? 'bg-blue-700' : 'bg-gray-200'
              }`}
            ></div>
          ))}
        </div>
    </div>

        

      <button className='absolute top-[45%] right-[-13%] transition hover:scale-125' onClick={nextImage}>
        <Image src='/next.png' height={30}  width={30} alt="next" />
      </button>
    </div>
  );
}; 

export default ImageSliderUI;

{/* 
<Image className='transition' 
        height={300}
        width={300} src={images[currentImageIndex]} alt="Slider Image" />  */}