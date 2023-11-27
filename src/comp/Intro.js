
import React from 'react'
import styles from '../../styles/Intro.module.css'

const Intro = () => {
  return (
    <div className={styles.container} >
            <div>
                <h1 className={styles.nfont} > <span style={{color:"teal"}} > Web Developer</span>, Designer & Team Player  </h1>
            </div>
            <div>
                <h2>I design and code beautifully simple things, and <span style={{color:"teal",marginBottom:"10rem"}}  > I love what I do.</span></h2>
            </div>
        
    </div>
    
    
  )
}

export default Intro