import React from "react";
import { Box, Grid } from "@mui/material";
import styles from "./About.module.css";
import Card from "../../components/Card/Card";

const About = () => {
  const cards = [
    { title: "98" },
    { title: "100" },
    { title: "100" }
  ];
  return (
    <>
      <div className={styles.wrapper}>
        <Box className="container">
          <Grid container>
            <Grid item lg={6} sm={12}>
              <div className={`${styles.cont} title`}>
                Let’s Introduce <br /> Ourself
              </div>
              
            </Grid>
            
             
    
            <Grid item lg={6} sm={12} sx={{paddingX:'81px' , margin:"auto"}}>
              <div className={styles.title}>Criminal Lawyer</div>
              <div className={`text `}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit
                Exercitation.
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>

      {/* why choose us */}
      <div className={styles.wrapper}>
        <div className="container">
          <div className={`title ${styles.textA}`}>Why Choose Us</div>
          <Grid container spacing={2} className={styles.cardB}>
          {cards.map((card, index) => (
              <Grid item lg={4} sm={12} key={index}>
                <Card
                  type='choose'
                  title={card.title}
                  position={index}
                />
              </Grid>
            ))}
            

            </Grid>

        </div>

      </div>
    </>
  );
};

export default About
