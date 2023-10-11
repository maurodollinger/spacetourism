import { useState , useEffect, useRef} from "react";
import styles from "./Crew.module.scss";

const Crew = ({ data }) => {
  const [currentIndex,setCurrentIndex] = useState(0);
  const totalSlides = 4;
  const scrollContainer = useRef(null);
  let prevScrollLeft = 0;

  const handleCrew = (number) => {
    setCurrentIndex(number);
  };

  const nextSlide = () =>{
    setCurrentIndex((prevIndex)=>(prevIndex +1) % totalSlides);
  }

  const handleScroll = () =>{
    const container = scrollContainer.current;
    if(!container) return;

    const scrollLeft = container.scrollLeft;

    if(scrollLeft < prevScrollLeft){
      console.log("scroll hacia la izquierda");
    }
    else if(scrollLeft > prevScrollLeft){
      console.log("scroll hacia la derecha");
    }

    prevScrollLeft = scrollLeft;
  }
  
  const container = scrollContainer.current;
  if(container){
    container.addEventListener("scroll",handleScroll);
  }
  const currentCrew = data[currentIndex];

  useEffect(()=>{

    let interval;
    interval = setInterval(()=>{
      nextSlide();
    },3000)

    return() =>{
      clearInterval(interval);
    }
  })


  

  return (
    <section id={styles.crew}>
      <div ref={scrollContainer} className={styles.container}>
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
    </section>
  );
};

export default Crew;
