import  styles from '../styles/Courses.module.css'
import Image from "next/image";
import {useRouter} from 'next/router';
import Link from 'next/link';

const AscendCourses = () => {

   //-----View courses Routing----
   const router = useRouter();
   const handleClick1 = () => {
     router.push('https://docs.google.com/forms/d/e/1FAIpQLSey17qNPF25fjGwa3sDrA04D8TaFkwRsE9yTZ_5y1yIjCoZjA/viewform')
   }
   const handleClick2 = () => {
    router.push('https://docs.google.com/forms/d/e/1FAIpQLSepc5zszuBvnjvPCCC-d8Sj8bq2Q_hRSEsUx5eIEulKcWs8VA/viewform')
  }

  return (
    <>
    <div className={styles.main}>
<h1 className={styles.text1}>Our active courses <span className={styles.spanNew}>NEW</span>
</h1>
<p className={styles.para1}>Join immediatety for achieving your dream</p>

<div className={styles.course1}>
<h1 className={styles.customerSupport}>Customer Support Course</h1>
<p className={styles.businessCom}>Get trained in business communication and land a dream job</p>
<Image className={styles.helloImg} src = "/helloImg.png" width="110" height="100"></Image>
<Image className={styles.phoneImg1} src = "/phoneImg.png" width="15" height="15"></Image>
<p className={styles.directCalls1}>Direct Calls from Top Companies</p> 
<Image className={styles.rupeesImg1} src = "/rupees.png" width="10" height="15"></Image>
<p className={styles.salary1}>16,0000 - 40,000 salary/month</p>
<Image className={styles.unionImg1} src = "/Union.png" width="15" height="15"></Image>
<p className={styles.jobs1}>150+ Jobs</p>
<button className={styles.course1Btn}><Link href = '/CostumerSupport'>View Details</Link></button>
</div> 

<div className={styles.course2}>
<h1 className={styles.SoftwareTesting}>Software Testing Course</h1>
<p className={styles.ITsector}>This course is your entry to IT sector</p>
<Image className={styles.testing} src = "/QA.png" width="90" height="90"></Image>
<Image className={styles.phoneImg2} src = "/phoneImg.png" width="15" height="15"></Image>
<p className={styles.directCalls2}>Direct Calls from Top Companies</p> 
<Image className={styles.rupeesImg2} src = "/rupees.png" width="10" height="15"></Image>
<p className={styles.salary2}>16,0000 - 50,000 salary/month</p>
<Image className={styles.unionImg2} src = "/Union.png" width="15" height="15"></Image>
<p className={styles.jobs2}>100+ Jobs</p>
<button className={styles.course2Btn}><Link href = '/SoftwareTesting'>View Details</Link>
</button>
</div>
</div>

    <div>
        <h1 className={styles.text2}>Upcoming Courses</h1>
    </div>
    <div className= {styles.container1}>
        <h1 className={styles.text3}>Finance & Accounting Certification</h1>
        <p className={styles.para2}>Learn basic accounting,financial statement analysis, excel, tally and interview preparation. 45 days certification course</p>
    <Image className={styles.imgCourse3} src = "/ImageContainer.png" width="80" height="90" alt="ImageContainer"></Image>
        <button className={styles.btn} onClick={handleClick1}>Join the waitlist</button>
    </div>
        <div className= {styles.container2}>
        <h1 className={styles.text3}>Analytics/ MIS Placement Program</h1>
        <p className={styles.para2}>guaranteed job in Analytics/ MIS Analyst roles. Learn Excel, SQL, Power BI, Interview Preparation in 45 days</p>
    <Image className={styles.imgCourse3} src = "/analytics.png" width="70" height="75" alt="ImageContainer"></Image>
        <button className={styles.btn} onClick={handleClick2}>Join the waitlist</button>
    </div>
    </>
  )
}

export default AscendCourses