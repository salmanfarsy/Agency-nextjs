import styles from '../styles/Services.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Services = ({services}) => {
    console.log(services)
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>What we Can Do?</h1>
        <h1 className={styles.subtitle}>Services we can help with</h1>
        <div className={styles.services}>
        {services.map((service, i) => (
            <Link passHref href={'/' + service.name} key={i}>
            <div className={styles.service}>
              <div className={styles.desc}>
                {service.desc}
              </div>
            <span className={styles.cat}>{service.title}</span>
            <div className={styles.media}>
              <Image src={`/img/${service.photo}`}
              width='100%'
              height='100%'
              layout='responsive'
              objectFit='cover'
              alt=''/>
            </div>
            </div>
            </Link>
        )

        )}
        </div>
    </div>
  )
}

export default Services