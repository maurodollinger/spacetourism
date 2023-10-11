import { useState, Fragment } from "react";
import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const location = useLocation();

  const toggleHamburger = () => {
    setOpenMobile((prev) => {
      return !prev;
    });
  };
  return (
    <Fragment>
      <nav id={styles.navigation}>
        <div id={styles.logo}></div>
        <hr></hr>
        <ul>
          <li
            key="home"
            className={location.pathname === "/" ? styles.active : ""}
          >
            <Link to="/">00 HOME</Link>
          </li>
          <li
            key="destination"
            className={
              location.pathname === "/destination" ? styles.active : ""
            }
          >
            <Link to="/destination">01 DESTINATION</Link>
          </li>
          <li
            key="crew"
            className={location.pathname === "/crew" ? styles.active : ""}
          >
            <Link to="/crew">02 CREW</Link>
          </li>
          <li
            key="technology"
            className={location.pathname === "/technology" ? styles.active : ""}
          >
            <Link to="/technology">03 TECHNOLOGY</Link>
          </li>
        </ul>
        <div
          id={styles.hamburgerMenu}
          className={openMobile ? styles.close : styles.open}
          onClick={toggleHamburger}
        ></div>
      </nav>
      <div
        id={styles.mobileMenu}
        onClick={toggleHamburger}
        >
        <div className={openMobile ? styles.open : styles.close} >
        <ul>
          <li key="home-mobile">
            <Link to="/">
              <b>00</b> HOME
            </Link>
          </li>
          <li key="destination-mobile">
            <Link to="/destination">
              <b>01</b> DESTINATION
            </Link>
          </li>
          <li key="crew-mobile">
            <Link to="/crew">
              <b>02</b> CREW
            </Link>
          </li>
          <li key="technology-mobile">
            <Link to="/technology">
              <b>03</b> TECHNOLOGY
            </Link>
          </li>
        </ul>
        </div>
        
      </div>
    </Fragment>
  );
};

export default Navigation;
