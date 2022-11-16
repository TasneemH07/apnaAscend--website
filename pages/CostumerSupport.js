import  styles from '../styles/CustomerSupport.module.css'
import Image from "next/image";

const CostumerSupport = () => {
  return (
    <>
    <div className={styles.mainDiv}>
    <h1 className={styles.headText1}>Customer Excellence Course</h1>
    <p className={styles.para1}>Training & 100% Placement in customer facing office jobs</p>
    <Image className={styles.img} src = "/customerService.jpg" width="500" height="300"></Image>
    <p className={styles.para2}>Join Course for ₹11,999</p>
    <p className={styles.para3}>Batch starts Dec 1st. Limited time scholarship available.</p>
    </div>
    </>
  )
}

export default CostumerSupport