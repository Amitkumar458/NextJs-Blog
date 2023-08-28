import React, { useState } from 'react'
import styles from '@/styles/Home.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Post = () => {
  const [obj, setobj] = useState({
    title: "",
    description: "",
    links: "",
    author : ""
  });

  let runthis = async (e) => {
    e.preventDefault();
    let arr = obj.links.split(',');
    let d = {
      title : obj.title,
      description : obj.description,
      playlist : arr,
      author : obj.author
    }
    const response = await fetch(`http://localhost:3000/api/postblogs`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(d), // body data type must match "Content-Type" header
    });

    var data = await response.json();
    if(data.status === 1){
      notify();
    }
    setobj({
      title: "",
      description: "",
      links: "",
      author : ""
    });
  }

  let inputEvent = (e) => {
    const { name, value } = e.target;
    setobj((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      }
    })
  }

  const notify = () => {
    toast.success('🦄 Blogs Added Successfully', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.center}>
        Post Your Latest Blogs
      </h1>
      <div className={styles.description}>
        Share Your Coding Knowledge With CodeHunter Community , Post Your Blogs that will Help many Student to Develop Their Knowledge.
      </div>
      <form className={styles.form} onSubmit={runthis}>
        <h1>Post Your Blogs</h1>
        <div>
          <label className={styles.label} htmlFor="name">Enter Title</label>
          <input onChange={inputEvent} value={obj.title} id='title' className={styles.input} type='name' name='title' placeholder='Enter Title' required />
        </div>
        <div>
          <label className={styles.label} htmlFor="phone">Enter Blog Description </label>
          <textarea onChange={inputEvent} value={obj.description} id='query' name='description' className={styles.textarea} placeholder='Enter Description' rows="7" required />
        </div>
        <div>
          <label className={styles.label} htmlFor="phone">Enter Youtube Video/Playlist Links</label>
          <textarea onChange={inputEvent} value={obj.links} id='query' name='links' className={styles.textarea} placeholder='You can add Multiple Youtube Video/Playlist links septated by comma(,)' rows="7" required />
        </div>
        <div>
          <label className={styles.label} htmlFor="name">Enter Author</label>
          <input onChange={inputEvent} value={obj.author} id='title' className={styles.input} type='author' name='author' placeholder='Enter Author Name (Your Name)' required />
        </div>
        <button className={styles.button} type='submit'>Submit</button>
      </form>
      <div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"/>
      </div>
    </div>
  )
}

export default Post;