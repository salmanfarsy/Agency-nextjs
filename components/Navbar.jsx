import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/'>Code Dev Nation</Link>
        <ul className={styles.list}>
            <li className={styles.listitem}>
            <Link href='/'>Cousrse</Link>
            </li>
            <li className={styles.listitem}>
            <Link href='/'>About us</Link>
            </li>
            <li className={styles.listitem}>
            <Link href='/'>Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar