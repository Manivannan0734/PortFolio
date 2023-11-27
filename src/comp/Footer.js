import Image from 'next/image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from '../../styles/Footer.module.css';
import Logo from '../assests/logo.png'
const Footer = () => {
  return (
    <footer className={styles.container}>
        <div>
            <Image className={styles.img} src={Logo} alt="loading"/>
            <h1 className={styles.nfont} >Living, learning, & leveling up one day at a time.</h1>
        </div>
      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com/beastx_.re/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/manivannan-pandian-158b30281/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>
        <a href="https://github.com/Manivannan0734/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
        <a href="mailto:manivannan0734@gmail.com">
          <FontAwesomeIcon icon="envelope" className={styles.icon} />
        </a>
       
      </div>
      <h3>Handcrafted by me 2023</h3>
      <h4>Made With NextJs</h4>
    </footer>
  );
};

export default Footer;
