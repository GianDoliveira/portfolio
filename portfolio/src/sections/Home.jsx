import styles from './Home.module.css';
import { useEffect } from 'react';
import { Link } from "react-scroll"
import { BsGithub, BsLinkedin } from 'react-icons/bs'

function Home() {

    useEffect(() => {
        function Writer(element) {
            const textArray = element.innerHTML.split('')
            element.innerHTML = ''
            textArray.forEach((letter, i) => {
                setTimeout(() => element.innerHTML += letter, 110 * i)
            });
        }

        let title = document.querySelector('h2')
        Writer(title)
    })

    return (
        <div className="w-screen h-screen bg-dark-lime">
            <section
                className="flex pt-40 justify-center text-center min-[600px]:pt-24 min-[600px]:text-justify min-[600px]:pl-10 min-[768px]:pl-10 xl:pt-44 2xl:pt-80">
                <div >
                    <h1 className="text-[#91B302] text-2xl min-[600px]:text-4xl 2xl:text-5xl font-RobotoMono">Hello world! Eu sou</h1>
                    <h2 className={styles.animeName}>Gian de Oliveira</h2>
                    <h1 className="text-[#91B302] text-2xl min-[600px]:text-4xl 2xl:text-5xl font-RobotoMono">DESENVOLVEDOR FRONT-END</h1>
                    <div className="flex justify-center pt-7 min-[600px]:justify-start">
                        <a href="https://github.com/GianDoliveira" target="_blank" rel="noreferrer">
                            <button className="button"><BsGithub />GitHub</button>
                        </a>
                        <a href="https://www.linkedin.com/in/gian-de-oliveira/" target="_blank" rel="noreferrer">
                            <button className="button">Linked<BsLinkedin /></button>
                        </a>
                    </div>
                    <div className={styles.mouse_scroll}>

                        <div className={styles.mouse}>
                            <div className={styles.whell}></div>
                        </div>
                        <div>
                            <span className={`${styles.mScrollArrows} ${styles.unu}`} ></span>
                            <span className={`${styles.mScrollArrows} ${styles.doi}`}></span>
                            <span className={`${styles.mScrollArrows} ${styles.trei}`}></span>
                        </div>
                    </div>
                </div>
                <ul>
                    <li>
                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} data-text="&nbsp;Sobre">&nbsp;Sobre&nbsp;</Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500} data-text="&nbsp;Projetos">&nbsp;Projetos&nbsp;</Link>
                    </li>
                </ul>
            </section>
        </div>
    )
};

export default Home;