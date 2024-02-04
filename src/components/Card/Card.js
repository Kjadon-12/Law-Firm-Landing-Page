import React from 'react';
import styles from './Card.module.css'
import gift from '../../assets/gift.svg'


const Card = ({data , title, type , position}) => {
    
  const getCard=(type)=>{
       switch(type) {
        case("choose"):{
            return(<>
            <div className={styles.card} style={{ backgroundColor: position === 1 ? '#3c3737' : 'transparent' }}>
                <div>
                    <img src={gift} alt='gift'></img>
                    <div className='smallTitle'>{title}% Success Rate</div>
                    <div className={styles.cardText}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</div>
                     <div><button>Read More</button></div>
                </div>
            </div>
            </>)
        }
        case("clients"):{
            const {name , image} = data;
            return(
                <>
                <div className={styles.card} style={{ backgroundColor: position%2 !==0 ? '#3c3737' : 'transparent' }}>
                <div>
                    <img src={image} alt='gift'></img>
                    <div className='smallTitle'>{name}</div>
                    <div className={styles.clientPost}>Ceo of Hunt</div>
                    <div className={styles.cardText}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</div>
                     
                </div>
            </div>
                </>
            )
        }
        case("team"):{
            const {name , cases , image} = data
            return(
                <>
                <div className={styles.team}>
                    <img src={image} alt='team'/>
                    <div className={styles.teamName}>
                        <div>{name}</div>
                        <div>{cases } Case</div>
                    </div>
                </div>
                </>
            )
        }
        default: return(<></>)
       }
  }
  
  
  
  
  
  
  
    return (getCard(type))
}

export default Card