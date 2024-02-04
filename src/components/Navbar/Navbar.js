import React from 'react'
import logo from '../../assets/logo.svg';
import styles from './Navbar.module.css'

const Navbar = () => {
  
  return (
    <>
    <nav className={styles.mainNav}>
     <img src={logo} alt='logo'></img>
      <div>
        <ul>
          <li>Home</li>
          <li>Attorneys</li>
          <li>Practice Areas</li>
          <li>About Us</li>
        </ul>
      </div>
      <div>
        {/* <button></button> */}
        <button className={styles.BtnContact}>Contact Now</button>
      </div>

    </nav>
    
    </>
  )
}

export default Navbar