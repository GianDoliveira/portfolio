import { AiOutlineDownload, AiFillHtml5 } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
import { SiJavascript, SiMongodb, SiMysql, SiTypescript } from "react-icons/si"
import { GrReactjs } from "react-icons/gr"
import { FaNodeJs } from "react-icons/fa"

function About() {
    return (
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
                        Comecei programar em Março de 2022 e foi quando comecei a me interessar pelo mercado WEB, desde cedo tinha o interesse em computadores e quando aprendi bastante sobre hardware decidi focar em sistemas e suas criações e conversando com um amigo que surgiu a ideia e vontade de investir na área de programação! Venho estudando e aprendendo por meio de muitas pesquisas, documentações, práticas e algumas vídeo aulas. Possuo alguns projetos que eu mesmo criei do 0 e desenvolvi.
                    </p>
                </div>
                <div className="flex justify-center">
                    <a href="/Gian de Oliveira-CVdev.pdf" download="CVGian.pdf">
                        <button className="button"><AiOutlineDownload />Currículo</button>
                    </a>
                </div>
            </section>
            <div className="text-5xl">
                <h2 className="py-10  text-center">Habilidades</h2>
                <div className="pb-6 mx-5 grid grid-cols-3 gap-2 min-[600px]:mx-8 min-[600px]:gap-4 min-[768px]:mx-18 min-[1024px]:mx-36 xl:mx-10 xl:mb-10 ">
                    <div className="borderHabilities ">
                        <p className="hover:text-lime-200 min-[600px]:text-7xl min-[600px]:pl-4 min-[768px]:pl-10 xl:pl-2"><AiFillHtml5 /></p>
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
                        <p className="hover:text-lime-200 min-[600px]:text-7xl min-[600px]:pl-4 min-[768px]:pl-10 xl:pl-2"><SiTypescript /></p>
                    </div>
                    <div className="borderHabilities">
                        <p className="hover:text-lime-200 min-[600px]:text-7xl min-[600px]:pl-4 min-[768px]:pl-10 xl:pl-2"><SiMongodb /></p>
                    </div>
                    <div className="borderHabilities">
                        <p className="hover:text-lime-200 min-[600px]:text-7xl min-[600px]:pl-4 min-[768px]:pl-10 xl:pl-2"><SiMysql /></p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;