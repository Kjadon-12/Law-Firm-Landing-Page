import React from 'react'
import styles from './Footer.module.css'
import logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <>
    <div className={styles.wrapper}>
    <img src={logo} alt='logo'></img>
    </div>
    
    </>
  )
}

export default Footer