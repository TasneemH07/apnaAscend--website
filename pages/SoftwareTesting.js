import  styles from '../styles/SoftwareTesting.module.css'
import Image from "next/image";

const SoftwareTesting = () => {
  return (
    <>
    <div className={styles.mainDiv}>
    <h1 className={styles.headText1}>Software Testing Course</h1>
    <p className={styles.para1}>The admissions in Software Testing courses are done on the basis of merit as well as entrance examinations. The entrance exams accepted for admissions in Software Testing courses are CUSAT CAT, OJEE, GATE, etc.</p>
    <Image className={styles.img} src = "/Software_Testing.png" width="700" height="370"></Image>
    <p className={styles.para2}>Join Course for ₹11,999</p>
    <p className={styles.para3}>Batch starts Dec 1st. Limited time scholarship available.</p>
    </div>

    </>
  )
}

export default SoftwareTesting