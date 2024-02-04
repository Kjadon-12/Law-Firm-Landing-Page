import React from 'react';
import styles from './AreaOP.module.css'
import {Grid } from '@mui/material';
import image1 from '../../assets/image1.svg'
import image2 from '../../assets/image2.svg'
import image3 from '../../assets/image3.svg'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.svg'
import image6 from '../../assets/image6.svg'

const AreaOP = () => {
  return (
    <>
     <div className={styles.wrapper}>
        <div className="container">
        <div className={`title ${styles.textA}`}>Area of Practices</div>
        <Grid container spacing={2}>
            <Grid item lg={8} sm={12}>
             <img src={image1} alt='image1' className={styles.Cardimg} ></img>
             <div className={styles.imgText}>BUSINESS LAW</div>
            </Grid>
            <Grid item lg={4} sm={12}>
            <img src={image2} alt='image1' className={styles.Cardimg}></img>
            <div className={styles.imgText}>Partnership LAW</div>
            </Grid>
            
        </Grid>
        <Grid container spacing={2} className={styles.gridCont}>
            <Grid item lg={4} sm={12}>
            <img src={image3} alt='image1' className={styles.Cardimg} ></img>
            <div className={styles.imgText}>REAL ESTATE LAW</div>
            </Grid>
            <Grid item lg={8} sm={12}>
            <img src={image4} alt='image1'  className={styles.Cardimg}></img>
            <div className={styles.imgText}>BUSINESS LAW</div>
            </Grid>
            
        </Grid>
        <Grid container spacing={2} className={styles.gridCont} >
            <Grid item lg={8} sm={12}>
            <img src={image5} alt='image1' className={styles.Cardimg}></img>
            <div className={styles.imgText}>LANDLORD DISPUTES</div>
            </Grid>
            <Grid item lg={4} sm={12}>
            <img src={image6} alt='image1' className={styles.Cardimg}></img>
            <div className={styles.imgText}>ELDER ABUSE</div>
            </Grid>
            
        </Grid>
        </div>
        </div>
    </>
  )
}

export default AreaOP