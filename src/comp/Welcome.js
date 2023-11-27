import React from 'react'
import styles from '../../styles/Welcome.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCode ,faCube,faLaptopCode,faUserGroup } from '@fortawesome/free-solid-svg-icons';

const Welcome = () => {
  return (
    <div className={styles.whole} >
        <div className={styles.container}>
            <h1>Hi, I’m   <span style={{color:"teal"}}  >Manivannan.</span> Nice to meet you.</h1>
        </div>
        <div className={styles.container}>
            <h2 className={styles.nfont} >Solution-driven web developer adept at contributing to highly
collaborative work environment and finding solutions. Proven
experience developing consumer-focused websites using HTML, CSS,
JavaScript and React JS. Good knowledge of the best practices for web
design, user experience, and speed.</h2>
        </div>
        <div className={styles.cardContainer} >
            <div className={styles.card} >
            <FontAwesomeIcon className={styles.icon} icon={faCode}/>
            <h1>Web Developer</h1>
            <h2>My approach combines simplicity, clean design, and thoughtful interactions to craft websites that leave a lasting impression.</h2>
            <h2 style={{color:"teal"}} >Languages I speak:</h2>
            <h2>HTML,CSS,Javascript <br/>Python.</h2>
        </div>
        <div className={styles.card} >
        <FontAwesomeIcon className={styles.icon} icon={faCube} />
        <h1>Designer</h1>
        <h2>I value simple content structure, clean design patterns, and thoughtful interactions.</h2>
        <h2 style={{color:"teal"}} >Things I enjoy designing:</h2>
        <h2>UX, UI, Web, Apps, Logos.</h2>
        </div>
        <div className={styles.card} >
        <FontAwesomeIcon className={styles.icon} icon={faUserGroup} />
        <h1>Team Player</h1>
        <h2>My ability to work cohesively within a team complements my web development expertise, resulting in exceptional projects and memorable <br/> user experiences</h2>
        </div>
    </div>
</div>
  )
}

export default Welcome