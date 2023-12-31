import { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import FadeAnimation from "../Ui/FadeAnimation";

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    setShowContent(!showContent);
  }, []);

  return (
    <section id={styles.homeBackground}>
      <FadeAnimation show={showContent}>
        <div className={styles.container}>
          <div id={styles.textLeft}>
            <h5>So, you want to travel to </h5>
            <h1>Space</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className={styles.explore}>
            <button>Explore</button>
            <div className={styles.underlay}></div>
          </div>
        </div>
      </FadeAnimation>
    </section>
  );
};
export default Home;
