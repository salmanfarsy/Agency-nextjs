import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.carL}>
      <h1 className={styles.title}>CODE DEV NATION</h1>
      <h1 className={styles.linkTitle}>
        <span>JOIN US</span>
        <Image
        alt=''
        src={'/img/banner.png'}
        width='40px'
        height='40px'
        />
       
      </h1>
      </div>
      <div className={styles.carS}>

</div>
<div className={styles.carS}>

</div>
    </div>
  )
}

export default Footer