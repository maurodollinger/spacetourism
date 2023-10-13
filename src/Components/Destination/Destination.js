import { useState , useEffect} from "react";
import styles from "./Destination.module.scss";
import FadeAnimation from "../Ui/FadeAnimation";

const Destination = ({ data }) => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [showContent, setShowContent] = useState(false);
  let touchStartX = 0;
  let touchEndX = 0;
  const totalSlides = 4;

  const handleDestination = (number) => {
    setCurrentIndex(number);
  };

  const nextSlide = () =>{
    setCurrentIndex((prevIndex)=>(prevIndex +1) % totalSlides);
  }

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].clientX;

    const deltaX = touchEndX - touchStartX;

    if (deltaX > 0) {
      let prev = currentIndex - 1;
      if (prev === -1) prev = totalSlides - 1;
      handleDestination(prev);
    } else if (deltaX < 0) {
      let next = currentIndex + 1;
      if (next === totalSlides) next = 0;
      handleDestination(next);
    }
  };

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

  const currentDestination = data[currentIndex];

  return (
    
      <section onTouchStart={(e)=> handleTouchStart(e)} onTouchEnd={(e)=>handleTouchEnd(e)}  id={styles.destination}>
        <FadeAnimation show={showContent}>
        <div className={styles.container}>
          <div>
            <h5>
              <b>01</b> Pick your destination
            </h5>
          </div>
          <div className={styles.dinamicContent}>
            <div>
              <img
                src={currentDestination.images.png}
                alt={currentDestination.name}
              ></img>
            </div>
            <div className={styles.info}>
              <ul>
                <li onClick={() => handleDestination(0)} className={currentIndex === 0 ? styles.active : ""}>MOON</li>
                <li onClick={() => handleDestination(1)} className={currentIndex === 1 ? styles.active : ""}>MARS</li>
                <li onClick={() => handleDestination(2)} className={currentIndex === 2 ? styles.active : ""}>EUROPA</li>
                <li onClick={() => handleDestination(3)} className={currentIndex === 3 ? styles.active : ""}>TITAN</li>
              </ul>
              <h2>{currentDestination.name}</h2>
              <p>{currentDestination.description}</p>
              <hr></hr>
              <div className={styles.subInfo}>
                <div>
                  <div className="subHeading2">avg. distance</div>
                  <div className="subHeading1">{currentDestination.distance}</div>
                </div>
                <div>
                  <div className="subHeading2">est. travel time</div>
                  <div className="subHeading1">{currentDestination.travel}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </FadeAnimation>
      </section>
  );
};

export default Destination;
