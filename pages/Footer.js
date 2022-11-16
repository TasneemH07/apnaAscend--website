import  styles from '../styles/Footer.module.css';
import Image from "next/image";

const Footer = () => {
  return (
    <>
    <div  className={styles.divLeft}>
<Image className={styles.imgApna} src = "/apna.png" width="40" height="40" alt="apna_logo"></Image>
<Image className={styles.imgLine} src = "/Line.png" width="1" height="50" alt="line"></Image>
<Image className={styles.imgIcon} src = "/icon.png" width="40" height="40" alt="apna_icon"></Image>
<h1 className={styles.apnaText}>apna<span className={styles.spanAscend}>Ascend</span></h1>
    <div className={styles.divIcons}>
<Image  src = "/facebook.png" width="40" height="40"></Image>
<Image style = {{ marginLeft : "10px" }} src = "/youtube.png" width="40" height="40" alt="youtube_icon"></Image>
<Image style = {{ marginLeft : "10px" }} src = "/twitter.png" width="40" height="40" alt="twitter_icon"></Image>
<Image  style = {{ marginLeft : "10px" }} src = "/linkedIn.png" width="40" height="40" alt="linkedIn_icon"></Image>
<Image  style = {{ marginLeft : "10px" }} src = "/instagram.png" width="40" height="40" alt="instagram_icon"></Image>
    </div>
    </div>

    <div style = {{ marginTop: "25px" , marginLeft:"150px"}}>
    <h1 style = {{ fontSize : "15px" }}>Download our app</h1>
    <Image className={styles.googlePlay} src = "/googlePlay.png" width="150" height="50" alt="googlePlay_logo"></Image>
    </div>

    <div className={styles.divCenter}>
        <h1 className={styles.headText}>Courses</h1>
        <h1 className={styles.texts}>Customer Support Course</h1>
        <h1 className={styles.texts}>Software Testing Course</h1>
    </div>
    <div className={styles.divRight}>
        <h1 className={styles.headText}>Links</h1>
        <h1 className={styles.texts}>Contact Us</h1>
        <h1 className={styles.texts}>Privacy Policy</h1>
        <h1 className={styles.texts}>User terms & condition</h1>
    </div>
    <p className={styles.textIndia}>Made in India with ❤️</p>
    <p className={styles.endText}>2022 Apna | All rights reserved</p>
    </>
  )
}

export default Footer