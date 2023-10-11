import {useState} from 'react';
import styles from "./Destination.module.scss";

const Destination = ({data}) => {
    const [currentDestination,setCurrentDestination] = useState(data[0]);
    const handleDestination = (number) =>{
        setCurrentDestination(data[number]);
    }
  return (
    <section id={styles.destination}>
      <div className={styles.container}>
        <div>
            <h5>
            <b>01</b> Pick your destination
            </h5>
        </div>
        <div className={styles.dinamicContent}>
            <div>
                <img src={currentDestination.images.png} alt={currentDestination.name}></img>
            </div>
            <div className={styles.info}>
                <ul>
                    <li onClick={()=>handleDestination(0)}>MOON</li>
                    <li onClick={()=>handleDestination(1)}>MARS</li>
                    <li onClick={()=>handleDestination(2)}>EUROPA</li>
                    <li onClick={()=>handleDestination(3)}>TITAN</li>
                </ul>
                <h2>{currentDestination.name}</h2>
                <p>{currentDestination.description}</p>
                <hr></hr>
                <div className={styles.subInfo}>
                    <div>
                        <div className='subHeading2'>avg. distance</div>
                        <div className='subHeading1'>{currentDestination.distance}</div>
                    </div>
                    <div>
                        <div className='subHeading2'>est. travel time</div>
                        <div className='subHeading1'>{currentDestination.travel}</div>
                    </div>
                </div>
            </div>           
        </div>
      </div>
    </section>
  );
};

export default Destination;
