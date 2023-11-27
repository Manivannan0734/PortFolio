import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Avatar.module.css'
import Pro from '../assests/pro.jpg'
import Work from '../assests/work.gif'
const Avatar = () => {
  return (
   <div>
    
   
      <div className={styles.avatarContainer} >
        <Image className={styles.img} src={Pro}
     alt="loading"/>
        </div>
        <div className={styles.workContainer} >
        <Image className={styles.work}  src={Work} alt="loading"/>
        </div>
   
    </div>
  )
}

export default Avatar