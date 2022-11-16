import Image from "next/image";
import  styles from '../styles/Body.module.css'
import AscendSuccess from "./AscendSuccess";

const Body = () => {
  return (
    <>
    <div className={styles.main}>
<h1 className={styles.processText1}>apna<span className={styles.spanText}>Ascend</span> Process</h1> 
<p className={styles.processText2}>How to get your dream job?</p> 
<Image className={styles.arrowUp} src = "/arrowUp.png" width="180" height="100" alt="Arrow-up"></Image>
<p className={styles.ascendProcessText1}>Sign-up for the course</p>
<Image className={styles.ascend1Sign} src = "/1_.png" width="40" height="65" alt="Ascend_process"></Image>
<Image className={styles.ascendProcess1} src = "/1_img.png" width="95" height="95" alt="Ascend_process"></Image>

<p className={styles.ascendProcessText2}>Get trained by industry experts</p>
<Image className={styles.ascend2Sign} src = "/2_.png" width="40" height="65" alt="Ascend_process"></Image>
<Image className={styles.ascendProcess2} src = "/2_img.png" width="95" height="95" alt="Ascend_process"></Image>
<Image className={styles.arrowDown} src = "/arrowDown.png" width="180" height="100" alt="Arrow-up"></Image>
<p className={styles.ascendProcessText3}>Give interviews & get dream job</p>
<Image className={styles.ascend3Sign} src = "/3_.png" width="40" height="65" alt="Ascend_process"></Image>
<Image className={styles.ascendProcess3} src = "/3_img.png" width="95" height="95" alt="Ascend_process"></Image>


    </div>
    <div className={styles.successAscend}>
    <div>
        <h1 className={styles.successText}>Success of apna<span className={styles.spansuccess}>Ascend</span></h1>
        <p className={styles.successPara1}>Helping thousand of candidates get jobs in top companies. Come join our journey...!</p>
    </div>
    <div className={styles.AscendSuccess1}>
     <AscendSuccess/>
    </div>
    <div className={styles.AscendSuccess2}>
     <AscendSuccess/>
    </div>
    <div className={styles.AscendSuccess3}>
     <AscendSuccess/>
    </div>
    </div>
  </>
  )
}

export default Body