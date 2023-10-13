import { useState, useEffect } from "react";
import styles from "./Crew.module.scss";
import FadeAnimation from "../Ui/FadeAnimation";

const Crew = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const totalSlides = 4;
  let touchStartX = 0;
  let touchEndX = 0;

  const handleCrew = (number) => {
    setCurrentIndex(number);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].clientX;

    const deltaX = touchEndX - touchStartX;

    if (deltaX > 0) {
      let prev = currentIndex - 1;
      if (prev === -1) prev = totalSlides - 1;
      handleCrew(prev);
    } else if (deltaX < 0) {
      let next = currentIndex + 1;
      if (next === totalSlides) next = 0;
      handleCrew(next);
    }
  };

  const currentCrew = data[currentIndex];

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    setShowContent(!showContent);
  }, []);

  return (
    <section
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchEnd={(e) => handleTouchEnd(e)}
      id={styles.crew}
    >
      <FadeAnimation show={showContent}>
        <div className={styles.container}>
          <div id={styles.titleMobile}>
            <h5>
              <b>02</b> Meet your crew
            </h5>
          </div>
          <div className={styles.dinamicContent}>
            <div className={styles.info}>
              <div id={styles.titleDesktop}>
                <h5>
                  <b>02</b> Meet your crew
                </h5>
              </div>
              <div>
                <h4>{currentCrew.role}</h4>
                <h3>{currentCrew.name}</h3>
                <p>{currentCrew.bio}</p>
              </div>

              <ul id={styles.navMobile}>
                <li
                  className={currentIndex === 0 ? styles.active : ""}
                  onClick={() => handleCrew(0)}
                ></li>
                <li
                  className={currentIndex === 1 ? styles.active : ""}
                  onClick={() => handleCrew(1)}
                ></li>
                <li
                  className={currentIndex === 2 ? styles.active : ""}
                  onClick={() => handleCrew(2)}
                ></li>
                <li
                  className={currentIndex === 3 ? styles.active : ""}
                  onClick={() => handleCrew(3)}
                ></li>
              </ul>
            </div>
            <div className={`${styles.image} ${styles.anim}`}>
              <img src={currentCrew.images.png} alt={currentCrew.name}></img>
            </div>

            <ul id={styles.navDesktop}>
              <li
                className={currentIndex === 0 ? styles.active : ""}
                onClick={() => handleCrew(0)}
              ></li>
              <li
                className={currentIndex === 1 ? styles.active : ""}
                onClick={() => handleCrew(1)}
              ></li>
              <li
                className={currentIndex === 2 ? styles.active : ""}
                onClick={() => handleCrew(2)}
              ></li>
              <li
                className={currentIndex === 3 ? styles.active : ""}
                onClick={() => handleCrew(3)}
              ></li>
            </ul>
          </div>
        </div>
      </FadeAnimation>
    </section>
  );
};

export default Crew;
