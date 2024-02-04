import React from 'react'
import styles from './Faq.module.css'
import { Grid } from '@mui/material'

const Faq = () => {
  return (
    <>
    <div className={styles.wrapper}>
    <div className={`title ${styles.textA}`}>
          FAQ
        </div>
        <Grid container spacing={2}>
          <Grid item lg={6} sm={12}>
            <div className={styles.faqText}>Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. </div>
          </Grid>
          <Grid item lg={6} sm={12}>
            <div>Accrdin</div>
          </Grid>
        </Grid>
    </div>
    
    </>
  )
}

export default Faq