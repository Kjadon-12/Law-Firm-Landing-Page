import React from 'react'
import Box from '@mui/material/Box';
import HeroImg from '../../assets/HeroImg.svg'
import Grid from '@mui/material/Grid';
import styles from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <>
    <div className={styles.wrapper}>
     <Box className="container"  >
      <Grid container spacing={5}>
        <Grid item lg={7} xs={12}>
          <div className={styles.heroContent}>
          <div>You don’t have to <br/> Fight them Alone.</div>
          <div>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</div>
          <div className={styles.heroForm}><form><input placeholder='Enter your email address' className={styles.heroInput}></input><button>Lets's talk</button></form></div>
          </div>
        </Grid>
        <Grid item lg={5} xs={12}>
          
            <img src={HeroImg} alt='hero' className={styles.heroImg}></img>
        
        </Grid>
        
      </Grid>
    </Box>
    </div>
    </>
  )
}

export default HeroSection