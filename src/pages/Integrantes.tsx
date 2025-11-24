import { Aluno } from "../components/aluno";
import kevin from "../assets/Kevin.jpg";
import raul from "../assets/Raul.jpg";
import larissa from "../assets/Larissa.png";

export function Integrantes() {
    return (
        <main>
            <h1 className="flex justify-center text-xl font-bold text-(--text)">
                Integrantes
            </h1>
            <article className="flex flex-col text-center place-content-center">
                <div className="flex flex-row place-content-around">
                    <Aluno
                        id="1"
                        nome="Kevin Martins Campos"
                        img={kevin}
                        rm={563454}
                        github="https://github.com/DVKevin"
                        linkedin="https://www.linkedin.com/in/kevin-martins-campos-1932b2279/"
                    />
                    <Aluno
                        id="2"
                        nome="Larissa Juvenal de Magalhães"
                        img={larissa}
                        rm={566457}
                        github="https://github.com/larimagalh"
                        linkedin="https://www.linkedin.com/"
                    />
                    <Aluno
                        id="3"
                        nome="Raul Junior Bento dos Santos"
                        img={raul}
                        rm={563458}
                        github="https://github.com/RaulSantos206"
                        linkedin="https://www.linkedin.com/in/raul-santos-774136190/"
                    />
                </div>
            </article>
        </main>
    )
}