import React from 'react'
import styles from './Footer.module.css'
import logo from '../../assets/logo.svg'
import {ReactComponent as Icon} from '../../assets/Icon.svg'
import {ReactComponent as Icon2} from '../../assets/Icon2.svg'
import {ReactComponent as Icon3} from '../../assets/Icon3.svg'
import {ReactComponent as Icon4} from '../../assets/Icon4.svg'
const Footer = () => {
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.footerList}>
      <img src={logo} alt='logo'></img>
      <div className={styles.pages}>
      <div>Home</div>
      <div>Attorneys</div>
      <div>Practice Areas </div>
      <div>About Us</div>
      </div>
      <div className={styles.social}>
        <div><Icon/></div>
        <div><Icon2/></div>
        <div><Icon3/></div>
        <div><Icon4/></div>
      </div>
      </div>
    
    </div>
    
    </>
  )
}

export default Footer