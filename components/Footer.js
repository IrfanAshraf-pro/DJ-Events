import Head from "next/head"
import Link from "next/link"
import styles from '../styles/Footer.module.css'
export default function Footer() {
  return (
    <footer className={styles.footer}>
        <p>Copyright &copy; DJ Events 2023</p>
        <Link href='/about'>About This Project</Link>
    </footer>
  )
}
