import React from 'react'
import styles from '../../styles/Collaborator.module.css'
import Link from 'next/link'

const Collaborator = () => {
  return (
    <div className={styles.container} >
        <div className={styles.content} >
        <h1>Interested in Collaborating with me?</h1>
        <h2 className={styles.nfont} >I’m always open to discussing product design work or partnership opportunities.</h2>
        <Link href="https://www.linkedin.com/in/manivannan-pandian-158b30281/">
        <button className={styles.glowonhover} type="button">Start a Conversation</button>
        </Link>
        <hr/>
        </div>
        
    </div>
  )
}

export default Collaborator