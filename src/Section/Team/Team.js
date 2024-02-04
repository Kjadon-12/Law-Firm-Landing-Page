import React from "react";
import styles from "./Team.module.css";
import { Grid } from "@mui/material";
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";
import team4 from "../../assets/team4.png";
import team5 from "../../assets/team5.png";
import team6 from "../../assets/team6.png";
import Card from '../../components/Card/Card'

const Team = () => {
  const data = [
    {
      name: "Danial Def",
      cases: 180,
      image: `${team1}`,
    },
    {
      name: "Sanfole",
      cases: 204,
      image: `${team2}`,
    },
    {
      name: "Cesforila",
      cases: 340,
      image: `${team3}`,
    },
    {
      name: "Colleen",
      cases: 103,
      image: `${team4}`,
    },
    {
      name: "Haldone",
      cases: 204,
      image: `${team5}`,
    },
    {
      name: "Nik Jeo",
      cases: 200,
      image: `${team6}`,
    },
  ];
  return (
    <>
      <div className={styles.wrapper}>
        <div className={`title ${styles.textA}`}>Our Team</div>
        <Grid container spacing={2}>
          {data?.map((card , index) => (
            <Grid item lg={4} md={6} sm={12} key={index} className={styles.teamItem}>
              <Card type="team" data={card}></Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Team;
