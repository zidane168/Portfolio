// dont use
import React, { useEffect, useState } from 'react';

const styles = {
  carousel: {
    width: '100%',
    height: '400px',
    position: 'relative',
    top: 0,
    overflow: 'hidden', 
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
    transition: 'opacity 0.5s ease-in-out',
  },
  active: {
    opacity: 1,
  },
};

const ImageCarouselUI = ( { random  } : { random : Number } ) => {
  const [currentIndex, setCurrentIndex] = useState(0); 
 
  useEffect(() => { 
    console.log(random);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, random * 1000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="carousel"> 
      <img
        src="/project/ecpark-1.png"
        alt="Image 1"
        width={300}
        style={{
          ...styles.image,
          ...(currentIndex === 0 && styles.active),
        }}
      />

      <img
        src="/project/ecpark-2.png"
        alt="Image 2"
        width={300}
        style={{
          ...styles.image,
          ...(currentIndex === 1 && styles.active),
        }}
      /> 


<img
        src="/project/ecpark-3.png"
        alt="Image 3"
        width={300}
        style={{
          ...styles.image,
          ...(currentIndex === 2 && styles.active),
        }}
      /> 
  
    </div>
  );
  };
  
  export default ImageCarouselUI;