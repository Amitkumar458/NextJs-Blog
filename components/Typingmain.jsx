import React from 'react';
import Typewriter from "typewriter-effect";
import styles from '@/styles/Home.module.css'

const Typingmain = () => {
    return (
        <div className={styles.typing}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Welcome to HunTing Coder ")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Develop Your Coding Skills ")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Watch Our Latest Bolgs")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Thanks For Visiting My Website")
                        .start();
                }}
            />
        </div>
    );
}

export default Typingmain;