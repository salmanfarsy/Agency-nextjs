import Image from 'next/image'
import styles from '../styles/Intro.module.css'
import Circle from './Circle'

const Intro = () => {
  return (
    <div className={styles.container}>
        <Circle
        backgroundColor="royalblue"
        />
        <div className={styles.card}>
            <h1 className={styles.title}>
                <span className={styles.brand}>Code Dev Nation</span> <br />
                 KEEP MOVING FORWARD TO NEW AGE
            </h1>
            <p className={styles.desc}>
            We make the future coders . We dont code to just
            make money . We code to make life easy and make 
            a better future for All .
            </p>
            <button className={styles.button}>
                DISCOVER
            </button>
        </div>
        <div className={styles.card}>
            <Image src='/img/banner.png' 
            width='100%'
             height='100%'
             layout='fill' 
             objectFit='cover'
             alt=''/>
        </div>
    </div>
  )
}

export default Intro