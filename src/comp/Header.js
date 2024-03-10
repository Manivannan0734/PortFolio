import Image from 'next/image';
import Link from 'next/link';
import styles from '/styles/Header.module.css'; // Import the CSS module
import Logo from '../assests/logo.png'
const Header = () => {
  return (
    
    <header className={styles.header}>
      <div className={styles.logo}>
      <Image className={styles.logoimg} src={Logo} alt="loading"/> 
    
      </div>
      <div className={styles.actions}>
        <Link className={styles.sayHelloButton} href="https://drive.google.com/file/d/1gx3HNBJBkL3Y2LyQXreBosRjSvnAwv80/view?usp=sharing">
          See My Resume
        </Link>
      </div>
    </header>
  );
};

export default Header;
