import { users } from '../data'
import styles from '../styles/Testimonials.module.css'
import Circle from './Circle'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <div className={styles.container}>
       <Circle
        backgroundColor="red"
        left='0'
        right='0'
        />
        <h1 className={styles.title}>
          Testimonials  
        </h1>
        <div className={styles.wrapper}>
            {
                users.map((u,i)=>
                   (
                     <div className={styles.card} key={i}>
                           <Image
                           src={`/img/${u.logo}`}
                           width='60'
                           height='60'
                           objectFit='contain'
                             alt=''                      
                           /> 
                           <p className={styles.comment}>
                               "{u.comment}"
                           </p>
                           <div className={styles.person}>
                               <Image
                               className={styles.avatar}
                               src={`/img/${u.avater}`}
                               width='45'
                               height='45'
                               objectFit='cover'
                               alt=' '
                               />
                               <div className={styles.info}>
                                   <span className={styles.username}>{u.name}</span>
                                   <span className={styles.jobTitle}>{u.title}</span>
                               </div>

                           </div>
                     </div>
                   ) 
                )
            }
        </div>
    </div>
  )
}

export default Testimonials