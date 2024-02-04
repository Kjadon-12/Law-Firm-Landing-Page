import React from 'react';
import styles from './NewsletterForm.module.css'

const NewsletterForm = () => {
  return (
    <>
    <div className={styles.wrapper} >
      <div className={styles.container}>
        <div className={styles.title}>Subscribe Our Newsletter</div>
        <div>
            <form>
                <input type="text" placeholder='Name' className={styles.newaletterInput}></input>
                <input type='email' placeholder='Enter Your Email' className={styles.newaletterInput}></input>
                <button>Send</button>
            </form>
        </div>
      </div>

    </div>
    
    </>
  )
}

export default NewsletterForm