import React from 'react';
import Typewriter from "typewriter-effect";
import styles from '@/styles/Home.module.css'

const Typing = () => {
    return (
        <div className={styles.typing}>
            <Typewriter

                onInit={(typewriter) => {
                    typewriter
                        .typeString("Welcome Everyone ")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("I am Amit From Patna College")
                        .pauseFor(1000)
                        .deleteChars(7)
                        .pauseFor(100)
                        .typeString("University")
                        .deleteAll()
                        .typeString("Thanks For Visiting My Website")
                        .start();
                }}
            />
        </div>
    );
}

export default Typing;