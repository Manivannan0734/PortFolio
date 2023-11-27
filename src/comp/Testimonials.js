import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Testimonials.module.css'
import Testi from '../assests/testimonial.png'
const Testimonials = () => {
  return (
    <div className={styles.container} >
        <div>
            
       
        <h1>Testimonials</h1>
        <h2  className={styles.nfont} >People I have worked with have said some nice things...</h2>
        <div className={styles.imgcontainer} >
            <Image className={styles.img} width={200} height={200} src={Testi} alt="loading"/>
        </div>
        <h2 className={styles.nfont} >“Manivannan was a real pleasure to work with and I look forward to working with him again. He’s definitely the kind of developer you can trust with a project from start to finish.”</h2>
        <h3 className={styles.nfont} >Applied Materials</h3>
        <h3>Arunmani,Software Engineer</h3>
        <hr/>
        </div>
    </div>
  )
}

export default Testimonials