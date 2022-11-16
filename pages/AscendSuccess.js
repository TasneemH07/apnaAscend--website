import Image from "next/image";
import  styles from '../styles/AscendSuccess.module.css'

const AscendSuccess = () => {
  return (
    <>
    <div className = {styles.mainDiv}>
    <div className = {styles.divAscendSuccess}>
    <Image className={styles.successPhotos} src="/AscendSuccess_img.png" width="180" height="180" alt="Ascend_progress"></Image>
    <p className={styles.paraText1}>Apna Achievers got me placed in my dream company. I highly recommend it.</p>
    </div>
    <h1 className={styles.headText}>Pushkar</h1>
    <p className={styles.paraText2}>Telecalling Executive</p>
    <Image className={styles.flipkartLogo} src="/flipkart.png" width="50" height="50" alt="Ascend_progress"></Image>
    </div>
    </>
  )
}

export default AscendSuccess