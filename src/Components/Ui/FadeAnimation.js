import styles from './FadeAnimation.module.scss'; 

function FadeAnimation({ show, children }) {
  return (
    <div className={`${styles['fade-enter']} ${show ? styles['fade-enter-active'] : styles['fade-exit-active']}`}>
      {children}
    </div>
  );
}

export default FadeAnimation;
