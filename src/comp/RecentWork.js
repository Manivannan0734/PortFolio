import React from 'react'
import styles from '../../styles/RecentWork.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils,faGasPump ,faBell,faCamera} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
const RecentWork = () => {
  return (
    <div className={styles.container} >
        <div>
            <h1>My Recent Works</h1>
            <div className={styles.cardContainer} >
            <div className={styles.card} >
              <Link className={styles.link}  href="https://arusuvaionline01.vercel.app/" > 
                <h1 >Arusuvai Online</h1>
                <FontAwesomeIcon className={styles.icon} icon={faUtensils} />
                </Link>
            </div>
            <div className={styles.card} >
            <Link className={styles.link} href="https://hdr-media.vercel.app/" >
                <h1>HDR Media</h1>
                <FontAwesomeIcon className={styles.icon} icon={faCamera} />
            </Link>
            </div>
            <div className={styles.card} >
            <Link className={styles.link} href="https://fuel-cart-app.vercel.app/" >
                <h1>Fuel On Phone</h1>
                <FontAwesomeIcon className={styles.icon} icon={faGasPump} />
            </Link>
            </div>

            <div className={styles.card} >
            <Link className={styles.link} href="https://reminder-web-app-two.vercel.app/" >
                <h1>Web Remainder</h1>
                <FontAwesomeIcon className={styles.icon} icon={faBell} />
            </Link>
            </div>

            
            
        </div>
        <div>
        <Link href="https://github.com/Manivannan0734/Manivannan0734">
        <button className={styles.glowonhover} type="button">See More On GitHub</button>
        </Link>
   
        </div>
        
        </div>
        
        
    </div>
  )
}

export default RecentWork