import React, { useState } from 'react';
import styles from '@/styles/Home.module.css';
import Typing from '@/components/Typing';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const About = () => {
  const [obj, setobj] = useState({
    name: "",
    phone: "",
    query: ""
  });

  let inputEvent = (e) => {
    const { name, value } = e.target;
    setobj((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      }
    })
  }
  let runthis = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/api/contactdata`, {
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
      body: JSON.stringify(obj), // body data type must match "Content-Type" header
    });

    let data = await response.json();
    if(data.status === 1){
      notify();
    }
    setobj({
      name: "",
      phone: "",
      query: ""
    });
  }

  const notify = () => {
    toast.success('🦄 From Submitted Successfully', {
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
      <div className={styles.center}>
        <Typing />
      </div>
      <div className={styles.description}>
        This Website is Develop by using NextJs , NextJs is a Framework of ReactJs. If you have any query Releted to this website your can contact me Thank You.
      </div>
      <div className={styles.description}>
        If You have any query or Doubt releted to coding. Fill this form and ask your Question. I will Contact you as soon as possible.
      </div>
      <form className={styles.form} onSubmit={runthis}>
        <h1>Contact Us</h1>
        <div>
          <label className={styles.label} htmlFor="name">Enter Your Name</label>
          <input onChange={inputEvent} value={obj.name} id='name' className={styles.input} type='name' name='name' placeholder='Enter Name' required />
        </div>
        <div>
          <label className={styles.label} htmlFor="phone">Enter phone </label>
          <input onChange={inputEvent} value={obj.phone} id='phone' className={styles.input} type='number' placeholder='Enter phone' name='phone' required />
        </div>
        <div>
          <label className={styles.label} htmlFor="query">Enter Your Query</label>
          <textarea onChange={inputEvent} value={obj.query} id='query' name='query' className={styles.textarea} placeholder='Enter Your Query' rows="10" required />
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

export default About;