import React from "react";
import styles from "./Faq.module.css";
import { Grid , Accordion, AccordionSummary, AccordionDetails} from "@mui/material";
import { ReactComponent as PlusIcon} from "../../assets/plusIcon.svg";


const Faq = () => {
  const accordionItems = [
    {
      title: "Do I need a personal injury report?",
      content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      title: "How much is my case worth?",
      content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
   {
    title: "What should I do right after car accidect",
    content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    
   },
   {
    title: "How much is my case worth?",
    content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    
   }
  ];
  return (
    <>
      <div className={styles.wrapper}>
        <div className={`title ${styles.textA}`}>FAQ</div>
        <Grid container spacing={2}>
          <Grid item lg={6} sm={12}>
            <div className={styles.faqText}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.{" "}
            </div>
          </Grid>
          <Grid item lg={6} sm={12}>
          <div className={styles.accordion}>
              {accordionItems.map((item, index) => (
                <Accordion key={index} className={styles.customAccordion}>
                  <AccordionSummary
                    expandIcon={!item.expanded ? <PlusIcon /> : null}
                    aria-controls={`panel${index}a-content`}
                    id={`panel${index}a-header`}
                  >
                    <div className={styles.accordionTitle}>{item.title}</div>
                    <div>
                      
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className={styles.accordionText}>{item.content}</div>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Faq;
