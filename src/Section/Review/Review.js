import React from "react";
import styles from "./Review.module.css";
import Carousel from "../../components/Carousel/Carousel";
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
const Review = () => {
  const data = [
    { name: "Jane Cooper", image: `${client1}` },
    { name: "Devon Lane", image: `${client2}` },
    { name: "Robert Fox", image: `${client3}` },
    { name: "Anil Yadav", image: `${client1}` },
    { name: "Ravi Singh", image: `${client3}` },
    { name: "Adhvik Singh", image: `${client2}` },
    { name: "Shiva Jadon", image: `${client1}` },
    { name: "Shiv Pratap", image: `${client2}` },
    { name: "Deepak Singh", image: `${client3}` },
  ];

  return (
    <>
      <div className={styles.wrapper}>
        <div className={`title ${styles.textA}`}>
          What says our <br></br> happy Clients
        </div>

        <Carousel data={data} />
      </div>
    </>
  );
};

export default Review;
