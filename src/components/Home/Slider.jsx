import { useState, useEffect } from "react";

const Slider = ({}) => {
    const images = [
        'https://cf.shopee.vn/file/vn-50009109-fa79715264f5c973648d8096a8aa9773_xxhdpi',
        'https://cf.shopee.vn/file/vn-50009109-cfcac948dff1badaf935cde5fb7b2c43_xxhdpi',
        'https://cf.shopee.vn/file/vn-50009109-cc4739dd7fe88f9d38e6e91a2309160e_xxhdpi',
        'https://cf.shopee.vn/file/vn-50009109-ef7f486b0c9f38e41fe6c57f50361220_xxhdpi'
    ];
    const [currentImage, setCurrentImage] = useState(0);
    const [nextImage, setNextImage] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handlePrevious = () => {
        if (!isTransitioning) {
            setCurrentImage((prevImage) =>
                prevImage === 0 ? images.length - 1 : prevImage - 1
            );
        }
    };

    const handleNext = () => {
        if (!isTransitioning) {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setNextImage((currentImage + 1) % images.length);
            setIsTransitioning(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, [currentImage]);

    const handleTransitionEnd = () => {
        setCurrentImage(nextImage);
        setIsTransitioning(false);
    };

  return (
    <div className=" w-full ">
    {/* <div className="flex justify-center items-center h-screen"> */}
        <div className="relative">
            {isTransitioning && (
            <img
                src={images[nextImage]}
                alt="Slider Image"
                className="w-full absolute transition-opacity duration-1000"
                onTransitionEnd={handleTransitionEnd}
            />
            )}
            <img
                src={images[currentImage]}
                alt="Slider Image"
                className={`w-full shadow-lg ${
                    isTransitioning ? 'opacity-0' : ''
                }`}
            />
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-slate-200 opacity-40 px-2 py-1 rounded"
                onClick={handlePrevious}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>

            </button>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-slate-200 opacity-40 px-2 py-1 rounded"
                onClick={handleNext}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

            </button>
        </div>
    </div>
  );
}

export default Slider;