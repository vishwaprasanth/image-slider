import { useState } from "react"
import "./imageSlider.css"

const ImageSlider = ({slides}) => {
    const [currentIndex,setCurrentIndex] = useState(0)

    const sliderStyles = {
        height: "100%",
        position: "relative",
    };
    const slideStyles ={
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`  
    };
    const leftArrowStyles ={
        position: "absolute",
        width: "20px",
        top: "50%",
        transform: "translate(0,-50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };
    const rightArrowStyles ={
        position: "absolute",
        top: "50%",
        transform: "translate(0,-50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };
    const goToNext = () =>{
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToPrevious = () =>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const dotContainerStyles = {
        display: "flex",
        justifyContent: "center",
    };
    const dotStyles = {
        margin: "0 3px",
        cursor: "pointer",
        fontSize:"20px",
    };
    
    return (
        <div style={slideStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}><img src="https://cdn-icons.flaticon.com/svg/3916/3916912.svg?token=exp=1681108512~hmac=0b404d323f1c69a89db01c1df06f7703" /></div>
            <div style={rightArrowStyles} onClick={goToNext}><img src="https://cdn-icons.flaticon.com/svg/3916/3916907.svg?token=exp=1681108512~hmac=00b504ca910fc38b8d049dbb45cfe89e"/></div>
        <div style={{slideStyles}}></div>
        <div style={dotContainerStyles}>
            {slides.map((slide, slideIndex) => (<div key={slideIndex}style={dotStyles}>●</div>))}
        </div>
            </div>
);
};

export default ImageSlider;