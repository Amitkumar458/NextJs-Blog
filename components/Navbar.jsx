import Link from 'next/link';
import React from 'react'
import styles from '@/styles/Home.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navhead}>
        <div className={styles.head}>CodeHunter</div>
        <div className={styles.link}>
            <Link href={'/'}>Home</Link>
        </div>
        <div className={styles.link}>
            <Link href={'/Blogs'}>Blogs</Link>
        </div>
        <div className={styles.link}>
            <Link href={'/Post'}>Post</Link>
        </div>
        <div className={styles.link}>
            <Link href={'/About'}>About</Link>
        </div>
    </nav>
  )
}

export default Navbar;