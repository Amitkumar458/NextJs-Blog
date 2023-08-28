import React, { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
const port = process.env.PORT || 3000;

const Bolgs = (props) => {
  const [data, setdata] = useState(props.data.data);
  return (
    <div className={styles.main}>
      <h1 className={styles.center}>Latest Blogs By CodeHunter</h1>
      <div className={styles.description}>
      <ol>
        {data.map((e) => {
          let s = e.split('-');
          let p = "";
          for (let i = 0; i < s.length; i++) {
            p += (s[i] + ' ');
          }
          return <li key={e}><Link href={`/blogposts/${e}`}><h1 className={styles.lists}>{p}</h1></Link></li>;
        })}
      </ol>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } }
}

export default Bolgs;