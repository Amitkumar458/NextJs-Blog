import React, { useState } from 'react'
import styles from '@/styles/Home.module.css'
const port = process.env.PORT || 3000;

const Slugs = (props) => {
  const [data, setdata] = useState(props.data[0]);
  return (
    <div className={styles.main}>
      <div className={styles.titlecenter}>
        <h1 className={styles.center}>{data.title}</h1>
      </div>
      <div className={styles.description}>{data.description}</div>
      <h3>Top Popular Youtube Playlist</h3>
      {
        data.links.map((e) => {
          return <iframe className={styles.youtube} key={e} width="760" height="415" src={e} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        })
      }
      <div> Posted by {data.author}</div>
      <br/>
    </div>
  )
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/blogs?slugs=${context.query.Slugs}`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } }
}

export default Slugs;