import styles from './sections/Home.module.css'
import { useEffect } from 'react'

import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { AiOutlineDownload, AiFillHtml5 } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
import { SiJavascript, SiTailwindcss } from "react-icons/si"
import { GrReactjs } from "react-icons/gr"
import { FaNodeJs } from "react-icons/fa"

import { Link } from "react-scroll"

export default function App() {

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

    return (<>
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
                        <a href="https://www.aedin.com/in/gian-de-oliveira/" target="_blank" rel="noreferrer">
                            <button className="button">Linked<BsLinkedin /></button>
                        </a>
                    </div>
                    <div class={styles.mouse_scroll}>

                        <div class={styles.mouse}>
                            <div class={styles.whell}></div>
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
        <main id="about" className="w-screen xl:h-screen items-center flex-row bg-[#91B302] pt-14 min-[1024px]:flex min-[1024px]:flex-col min-[1284px]:flex-row">
            <section className="flex flex-col bg-dark-lime shadow-lg shadow-dark-lime py-4 px-10  rounded-md xl:px-6 xl:mx-8 xl:mb-8 2xl:mx-28">
                <div className="flex flex-row items-center">
                    <img
                        className="w-28 rounded-full min-[768px]:w-36 xl:w-28 2xl:w-44"
                        alt="User Icon Avatar"
                        src="https://avatars.githubusercontent.com/u/104948437?v=4"
                    />
                    <div className="ml-4">
                        <h2 className="text-[#efefef] font-semibold text-xl min-[768px]:text-4xl xl:text-2xl 2xl:text-4xl">
                            Gian de Oliveira Ramalho
                        </h2>
                        <h3 className="text-indigo-100 pt-1 min-[768px]:text-2xl  xl:text-lg 2xl:text-3xl">Desenvolvedor Front-End</h3>
                    </div>
                </div>
                <div className="mt-5">
                    <h2 className="font-semibold text-2xl mb-2 text-[#efef]  xl:text-xl 2xl:text-3xl">SOBRE MIM</h2>
                    <p
                        className="text-indigo-100 font-light mt-1 max-w-xs text-xl text-justify min-[768px]:text-2xl min-[600px]:max-w-2xl
                    min-[1024px]:max-w-3xl xl:max-w-2xl xl:text-lg 2xl:text-3xl
                    ">
                        Despertei o interesse por programar em Março de 2022, quando infelizmente descobri que não conseguiria passar em uma específica etapa de um concurso militar. Venho estudando por meio de muitas pesquisas, auxílios de documentação e bastante prática. Possuo alguns projetos que eu mesmo fiz e desenvolvi, e estou aberto há vagas.
                    </p>
                </div>
                <div className="flex justify-center">
                    <a href="/public/Currículo DEV.pdf" target="_blank" rel="noreferrer">
                        <button className="button"><AiOutlineDownload />Currículo</button>
                    </a>
                </div>
            </section>
            <div className="text-5xl">
                <h2 className="py-10  text-center">Habilidades</h2>
                <div className="pb-6 mx-5 grid grid-cols-3 gap-2 min-[600px]:mx-8 min-[600px]:gap-4 min-[768px]:mx-18 min-[1024px]:mx-36 xl:mx-10 xl:mb-10 ">
                    <div className="borderHabilities ">
                        <p  className="hover:text-lime-200 min-[600px]:text-7xl min-[600px]:pl-4 min-[768px]:pl-10 xl:pl-2"><AiFillHtml5 /></p>
                    </div>
                    <div className="borderHabilities">
                        <p className="hover:text-lime-200 min-[600px]:text-7xl min-[600px]:pl-4 min-[768px]:pl-10 xl:pl-2"><DiCss3 /></p>
                    </div>
                    <div className="borderHabilities">
                        <p className="hover:text-lime-200 min-[600px]:text-7xl min-[600px]:pl-4 min-[768px]:pl-10 xl:pl-2"><SiJavascript /></p>
                    </div>
                    <div className="borderHabilities">
                        <p className="hover:text-lime-200 min-[600px]:text-7xl min-[600px]:pl-4 min-[768px]:pl-10 xl:pl-2"><GrReactjs /></p>
                    </div>
                    <div className="borderHabilities">
                        <p className="hover:text-lime-200 min-[600px]:text-7xl min-[600px]:pl-4 min-[768px]:pl-10 xl:pl-2"><FaNodeJs /></p>
                    </div>
                    <div className="borderHabilities">
                        <p className="hover:text-lime-200 min-[600px]:text-7xl min-[600px]:pl-4 min-[768px]:pl-10 xl:pl-2"><SiTailwindcss /></p>
                    </div>
                </div>
            </div>
        </main>
        <main id="projects" className="w-screen bg-dark-lime">
            <h2 className="text-[#efefef] text-4xl text-center pt-4 xl:pt-10">Projetos</h2>
            <section className="flex justify-center flex-wrap">
                <div className={styles.gallery}>
                    <a target="_blank" href="https://cadastroonline.netlify.app/">
                        <img src="https://lh3.googleusercontent.com/Puvt9DF08VGR8x_-TjeciC19ycqmkH3Tnu66UWsKGfSSCmgjpw5E4iy6nrGLZh69y9QcneygbdRqYZLRf_C6rP3lBSoKOJlnJErxo-N0" alt="Tela de Login e Cadastro" width="600" height="400"></img>
                    </a>
                    <a href="https://github.com/GianDoliveira/tela-login-reactjs" target="_blank" rel="noreferrer">
                        <button className="button"><BsGithub /></button>
                    </a>
                    <p className="text-[#91B302] text-3xl">Login e Cadastro</p>
                </div>
                <div className={styles.gallery}>
                    <a target="_blank" href="https://calculador4imc.netlify.app/">
                        <img src="https://lh3.googleusercontent.com/TUdcw-dgAMXvPGSQ0esiw5hWUXBZj-IDkGXZwM77hBSI5jlXBNiiec8mmUp87clJaEzQnjyQm3ICD1qOlkBvDBMzyGna5Sm__jVwOgG6mg" alt="Calculadora de peso e altura" width="600" height="400"></img>
                    </a>
                    <a href="https://github.com/GianDoliveira/calculator-imc" target="_blank" rel="noreferrer">
                        <button className="button"><BsGithub /></button>
                    </a>
                    <p className="text-[#91B302] text-3xl">Calculadora IMC</p>
                </div>
                <div className={styles.gallery}>
                    <a target="_blank" href="https://projeto-anime.netlify.app/">
                        <img src="https://lh3.googleusercontent.com/5HjtJhPr4t5YIQKUimL5_LKUFxdS9G3Q5Xd71zCj1KvXy6sPHhTEfOKjr_KkrP6obmofsXdKndC3uKCuIF-eCgS6uM_Hqcas0wDTfTc" alt="lista de anime" width="600" height="400"></img>
                    </a>
                    <a href="https://github.com/GianDoliveira/anime-list-reactJS" target="_blank" rel="noreferrer">
                        <button className="button"><BsGithub /></button>
                    </a>
                    <p className="text-[#91B302] text-3xl">Lista de Animes</p>
                </div>
                <div className={styles.gallery}>
                    <a target="_blank" href="">
                        <img src="" alt="" width="600" height="400"></img>
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                        <button className="button"><BsGithub /></button>
                    </a>
                    <p className="text-[#91B302] text-3xl">Em andamento</p>
                </div>
                <div className={styles.gallery}>
                    <a target="_blank" href="">
                        <img src="" alt="" width="600" height="400"></img>
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                        <button className="button"><BsGithub /></button>
                    </a>
                    <p className="text-[#91B302] text-3xl">Em andamento</p>
                </div>
            </section>
        </main>
        <footer>
            <p className="bg-dark-lime text-[#efefef] text-xl text-center w-screen">© Gian de Oliveira. All rigths reserved</p>
        </footer>
    </>
    )
}