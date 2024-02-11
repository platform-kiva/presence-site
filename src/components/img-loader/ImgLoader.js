import { useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';

// styles
import { ImgLoaderContainer } from './ImgLoader.styles.js'

export default function ImgLoader({ src, alt, updateParent=null }) {
  const controlDiv = useAnimation();
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  
  useEffect(() => {
    setIsImageLoaded(false);
  }, [src]);

  useEffect(() => {
    if (isImageLoaded && updateParent) {
      updateParent(true)
      console.log("ImgLoader parent updated")
    }
    controlDiv.set({ scale: 0.9, opacity: 0, zIndex: -1 });
    if (isImageLoaded) {
      controlDiv.start({
        scale: 1,
        opacity: 1,
        translateZ:-50,
        transition: { duration: 1.0, type: 'spring' },
      });
    }
  }, [isImageLoaded, controlDiv, updateParent]);

  return (
    <ImgLoaderContainer
      initial={{ scale: 0.50, translateZ: 100, opacity: 0 }}
      animate={controlDiv}
      onLoad={() => setIsImageLoaded(true)}
      src={src}
      alt={alt}
    />
  )
}
