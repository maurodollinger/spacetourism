import { useState, useEffect } from "react";
import styles from "./Technology.module.scss";
import FadeAnimation from "../Ui/FadeAnimation";

const Technology = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const totalSlides = 3;
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTech = (number) => {
    setCurrentIndex(number);
  };

  const nextSlide = () =>{
    setCurrentIndex((prevIndex)=>(prevIndex +1) % totalSlides);
  }

  const handleTouchStart = (e) =>{
    touchStartX = e.touches[0].clientX;
  }

  const handleTouchEnd = (e) =>{
    touchEndX = e.changedTouches[0].clientX;

    const deltaX = touchEndX - touchStartX;

    if(deltaX >0){
      let prev = currentIndex -1;
      if(prev===-1) prev = totalSlides-1;
      handleTech(prev);
    } else if(deltaX < 0){
      let next = currentIndex +1;
      if(next===totalSlides) next = 0;
      handleTech(next);
    }
  }

  useEffect(()=>{

    let interval;
    interval = setInterval(()=>{
      nextSlide();
    },3000)

    return() =>{
      clearInterval(interval);
    }
  })

  useEffect(()=>{
    setShowContent(!showContent);
  },[])

  const currentTechnology = data[currentIndex];

  return (
    <section onTouchStart={(e)=> handleTouchStart(e)} onTouchEnd={(e)=>handleTouchEnd(e)} id={styles.technology}>
      <FadeAnimation show={showContent}>
      <div className={styles.container}>
        <div>
          <h5>
            <b>03</b> Space Launch 101
          </h5>
        </div>
        <div className={styles.dinamicContent}>
          <div id={styles.imageMobileContainer}>
            <img
              src={currentTechnology.images.landscape}
              alt={currentTechnology.name}
            ></img>
          </div>
          <ul>
            <li
              onClick={() => handleTech(0)}
              className={currentIndex === 0 ? styles.active : ""}
            >
              1
            </li>
            <li
              onClick={() => handleTech(1)}
              className={currentIndex === 1 ? styles.active : ""}
            >
              2
            </li>
            <li
              onClick={() => handleTech(2)}
              className={currentIndex === 2 ? styles.active : ""}
            >
              3
            </li>
          </ul>
          <div className={styles.info}>
            <span>THE TERMINOLOGY...</span>
            <h3>{currentTechnology.name}</h3>
            <p>{currentTechnology.description}</p>
          </div>
          <div id={styles.imageDesktopContainer}>
            <img
              src={currentTechnology.images.portrait}
              alt={currentTechnology.name}
            ></img>
          </div>
        </div>
      </div>
      </FadeAnimation>
    </section>
  );
};

export default Technology;
