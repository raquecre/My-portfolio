import CardPorfolio from "../components/CardPorfolio";
import MyTech from "../components/MyTech";
import Navbar from "../components/Navbar";
import TitleCards from "../components/TitleCards";

const MyCV = () => {

    /* urlImageProyect="" */
    return (
        <div className="bg-gradient-to-r from-blue-400 to-purple-400">
            <Navbar />
            <TitleCards titleCards="Sobre mí" />
            <CardPorfolio nameProyect="Raquel " descriptionProyect="Hacer accesible el mundo tecnológico  es lo que me motiva a seguir formándome. 
" urlgithub="https://github.com/raquecre/" urlWebProyect="https://www.linkedin.com/in/raquecre/" />
            <TitleCards titleCards="Tecnologías" />
            <MyTech />

        </div>
    )
}

export default MyCV;