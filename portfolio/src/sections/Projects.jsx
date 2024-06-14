import styles from './Home.module.css';
import { BsGithub } from 'react-icons/bs';

function Projects() {
    return (
        <main id="projects" className="w-screen bg-dark-lime">
            <h2 className="text-[#efefef] text-4xl text-center pt-4 xl:pt-10">Projetos</h2>
            <section className="flex justify-center flex-wrap">
                <div className={styles.gallery}>
                    <a target="_blank" href="https://cadastroonline.netlify.app/">
                        <img src="https://user-images.githubusercontent.com/104948437/206184428-869c1d38-8b19-46f6-a50a-b19658117c17.PNG" alt="Tela de Login e Cadastro" width="600" height="400"></img>
                    </a>
                    <a href="https://github.com/GianDoliveira/tela-login-reactjs" target="_blank" rel="noreferrer">
                        <button className="button"><BsGithub /></button>
                    </a>
                    <p className="text-[#91B302] text-3xl">Login e Cadastro</p>
                </div>
                <div className={styles.gallery}>
                    <a target="_blank" href="https://calculador4imc.netlify.app/">
                        <img src="https://user-images.githubusercontent.com/104948437/225163058-8714b585-04c1-4ec0-a84d-59b6e7cecc37.PNG" alt="Calculadora de peso e altura" width="600" height="400"></img>
                    </a>
                    <a href="https://github.com/GianDoliveira/calculator-imc" target="_blank" rel="noreferrer">
                        <button className="button"><BsGithub /></button>
                    </a>
                    <p className="text-[#91B302] text-3xl">Calculadora IMC</p>
                </div>

                <div className={styles.gallery}>
                    <a target="_blank" href="https://temperature-city.netlify.app/">
                        <img src="https://user-images.githubusercontent.com/104948437/205452529-653aa6fa-f313-413b-90da-50fa80fa8597.PNG" alt="App para identificar clima da cidade" width="600" height="400"></img>
                    </a>
                    <a href="https://github.com/GianDoliveira/weather" target="_blank" rel="noreferrer">
                        <button className="button"><BsGithub /></button>
                    </a>
                    <p className="text-[#91B302] text-3xl">App Clima</p>
                </div>
                <div className={styles.gallery}>
                    <a target="_blank" href="https://sacole-online.netlify.app">
                        <img src="https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/64570fb43e32be0007ea5ad9/screenshot_2023-05-07-02-41-22-0000.png" alt="Loja que informa os sacolés ou geladinhos disponíveis e seus preços" width="600" height="400"></img>
                    </a>
                    <a href="https://github.com/GianDoliveira/projeto-sacole" target="_blank" rel="noreferrer">
                        <button className="button"><BsGithub /></button>
                    </a>
                    <p className="text-[#91B302] text-3xl">Loja de Sacolé</p>
                </div>
                <div className={styles.gallery}>
                    <a target="_blank" href="https://missoesimw1re.com.br/">
                        <img src="./srm miniatura.JPG" width="600" height="400"></img>
                    </a>
                    <a href="https://github.com/GianDoliveira/srm" target="_blank" rel="noreferrer">
                        <button className="button"><BsGithub /></button>
                    </a>
                    <p className="text-[#91B302] text-3xl">Secretaria Regional de Missões</p>
                </div>
            </section>
            <footer className="relative pt-10">
                <p className="bg-dark-lime text-[#efefef] text-xl text-center w-screen">© Gian de Oliveira. All rigths reserved</p>
            </footer>
        </main>
    );
};

export default Projects




