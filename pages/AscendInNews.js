import React, { useState } from 'react';
import  styles from '../styles/AscendInNews.module.css'
import Image from "next/image";
import {useRouter} from 'next/router';

const AscendInNews = () => {
  const [plusMinus1, setPlusMinus1] = useState("+");
  const [plusMinus2, setPlusMinus2] = useState("+");
  const [plusMinus3, setPlusMinus3] = useState("+");
  const [plusMinus4, setPlusMinus4] = useState("+");
  const [backgroundColor, setBackgroundColor] = useState();
  const [backgroundColor2, setBackgroundColor2] = useState();
  const [backgroundColor3, setBackgroundColor3] = useState();
  const [backgroundColor4, setBackgroundColor4] = useState();
  const [visibility, setVisibility] = useState("hidden");
  const [visibility2, setVisibility2] = useState("hidden");
  const [visibility3, setVisibility3] = useState("hidden");
  const [visibility4, setVisibility4] = useState("hidden");
  const [height, setHeight] = useState("50px");
  const [height2, setHeight2] = useState("50px");
  const [height3, setHeight3] = useState("50px");
  const [height4, setHeight4] = useState("50px");
  
  // bgColor: linear-gradient(to right, #EFB94C, #F9DF7B, #FFF3A6, #F9DF7B, #EFB94C 70%);
  const handleBtn1 = () => {
   if(plusMinus1=="+") {
     setPlusMinus1("-"),
     setBackgroundColor("#EFB94C"),
     setVisibility("visible"),
     setHeight("160px")
  }
    else{
      setPlusMinus1("+"),
      setBackgroundColor("#ffffff"),
      setVisibility("hidden"),
      setHeight("50px")
    }
  }

  const handleBtn2 = () => {
    if(plusMinus2=="+") {
      setPlusMinus2("-"),
      setBackgroundColor2("#EFB94C"),
      setVisibility2("visible"),
      setHeight2("320px")
   }
     else{
       setPlusMinus2("+"),
       setBackgroundColor2("#ffffff"),
       setVisibility2("hidden"),
       setHeight2("50px")
     }
   }

   const handleBtn3 = () => {
    if(plusMinus3=="+") {
      setPlusMinus3("-"),
      setBackgroundColor3("#EFB94C"),
      setVisibility3("visible"),
      setHeight3("140px")
   }
     else{
       setPlusMinus3("+"),
       setBackgroundColor3("#ffffff"),
       setVisibility3("hidden"),
       setHeight3("50px")
     }
   }

   const handleBtn4 = () => {
    if(plusMinus4=="+") {
      setPlusMinus4("-"),
      setBackgroundColor4("#EFB94C"),
      setVisibility4("visible"),
      setHeight4("150px")
   }
     else{
       setPlusMinus4("+"),
       setBackgroundColor4("#ffffff"),
       setVisibility4("hidden"),
       setHeight4("50px")
     }
   }
 
   //-----View courses Routing----
   const router = useRouter();
   const handleClick = () => {
     router.push('/AscendCourses')
   }
 
  return (
    <>
    <div>
    <h1 className={styles.textNews}>We&apos;re in the news!</h1>
    <p className={styles.paraNews}>Check out who all are talking about us...</p>
    <div style={{ marginTop: "50px" }}>
    <Image className={styles.imgNews1} src = "/Ndtv.jpg" width="160" height="90" alt = "ndtv_logo"></Image>
    <Image className={styles.imgNews2} src = "/TheHindu.png" width="160" height="100" alt = "theHindu_logo"></Image>
    <Image className={styles.imgNews3} src = "/TheHindu.png" width="160" height="100" alt = "theHindu_logo"></Image>
    <Image className={styles.imgNews4} src = "/TheHindu.png" width="160" height="100" alt = "theHindu_logo"></Image>
    <Image className={styles.imgNews5} src = "/TheHindu.png" width="160" height="100" alt = "theHindu_logo"></Image>
    <Image className={styles.imgNews6} src = "/dainik.jpg" width="160" height="90" alt = "dainik_logo"></Image>
    </div>
    </div>

    <div style={{width:"600px"}}>
        <h1 className={styles.textLeft}>1200+ openings</h1>
        <p className={styles.paraLeft}>500+ candidates registered last week. You&apos;re next, come join us...!</p>
        <button className={styles.btn} onClick={handleClick}>View courses</button>
    </div>

    <div  className={styles.headingRight}>
        <h1  className={styles.textRightt}>Frequently asked questions</h1>

    <div className={styles.divRight}> 
    <div className = {styles.divText1} style={{height:height}}>
        <h1 className={styles.textRight1}>What is the eligibility criteria?</h1>
        <button className={styles.btnPlus1} onClick={handleBtn1} style={{backgroundColor:backgroundColor}}>{plusMinus1}</button>
        <p className={styles.paraHidden1} style={{visibility:visibility}}>To be eligible for this course, you have to be a graduate and have average English skills. You should be ready to work in an office job.Freshers and people with 1 year of experience would find this course more suitable.</p>
    </div>  
    <div className ={styles.divText2} style={{height:height2}}>
        <h1 className={styles.textRight2}>How is placement guaranteed?</h1>
        <button className={styles.btnPlus2} onClick={handleBtn2} style={{backgroundColor:backgroundColor2}}>{plusMinus2}</button>
        <p className={styles.paraHidden2} style={{visibility:visibility2}}>Placements are guaranteed through ensuring that there are multiple interviews arranged for the candidate immediately post the 3 week course. We directly send the profiles with HR teams in our partner companies for interviews (there is no shortlisting step). We arrange for interviews for 2 weeks immediately after the 3 week course. In our previous batches, candidates have secured an offer within 2-3 interviews. Though most candidates get offers within the 2 week period, if the candidate does not get an offer, the candidate can request for a refund by email. The refund will be processed within 2 weeks of approval of the same.</p>
      </div>
      <div className ={styles.divText3} style={{height:height3}}>
        <h1 className={styles.textRight3}>Will the training be online or offline?</h1>
        <button className={styles.btnPlus3} onClick={handleBtn3} style={{backgroundColor:backgroundColor3}}>{plusMinus3}</button>
        <p className={styles.paraHidden3} style={{visibility:visibility3}}>The training will be online. You have to dedicate 3 hours daily on google meet platform to learn with trainers. Ensure you have a good internet connection and a laptop for it.</p>
      </div>

      <div className ={styles.divText4} style={{height:height4}}>
        <h1 className={styles.textRight4}>What is the admission process?</h1>
        <button className={styles.btnPlus4}  onClick={handleBtn4} style={{backgroundColor:backgroundColor4}}>{plusMinus4}</button>
        <p className={styles.paraHidden4} style={{visibility:visibility4}}>To get admission in the Telecaller certification training, you have to qualify an interview with the Apna Admissions manager. You have to secure your seat 5 days before the batch start date.</p>
      </div>
    </div>
      </div>
    {/* <p className={styles.textIndia}>Made in India with ❤️</p> */}
    </>
  )
}

export default AscendInNews