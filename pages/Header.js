import  styless from '../styles/Header.module.css'
import Image from "next/image";
import Link from 'next/link';
import {useRouter} from 'next/router';

const Header = () => {

  const router = useRouter();
  const handleClick = () => {
    router.push('/AscendCourses')
  }

  return (
    <>
    <div  className={styless.main}>
    <div className={styless.header}> 
    <div className={styless.left}>
    <Image className={styless.img} src = "/icon.png" width="40" height="40" alt="apnaAscend_icon"></Image>
     <h1 className={styless.apnaText}>apna<span className={styless.spanAscend}>Ascend</span></h1>
    <h1 className={styless.headRight}><Link href='/AscendCourses'>View Courses</Link></h1>
    </div>
    </div>
     <h1 className={styless.headCenter}>apna<span className={styless.spanAscend}>Ascend</span> Placement Program</h1>
     </div>
    <div>
      <h1 className={styless.headText1}>Learn from the best & get hired in top companies</h1>
      <p className={styless.headText2}>Interview guarantee in top companies</p>
      <button className={styless.headBtn} onClick={handleClick}>View courses</button>
    </div>
    <div>
    <Image className = {styless.imgCenter} src = "/Maskgroups.png" width="1450" height="420" alt="Maskgroups"></Image>
    </div>
    <h1 className = {styless.text}>100+ companies hiring from us</h1>
    <Image className = {styless.imgLogos} src = "/logos.png" width="1440" height="100" alt="apnaAscend_logos"></Image>
    </>
  )
}

export default Header