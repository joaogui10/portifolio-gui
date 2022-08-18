import {initSscrollReveal} from "./scrollReveal.js";
import{typeWrite} from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";


menu();
initSscrollReveal();
typeWrite(document.querySelector(".typewrite"));

hoverChangeDescript(
    ".html",
    "HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
    );

    hoverChangeDescrption(
        ".css",
        "CSS é uma linguagem de folha de estilo composto por “camadas“, criado com o propósito de estilizar as páginas HTML."

    );


    hoverChangeDescription(
        ".js",
        "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tripagem dinâmica fraca e multiparadigma."
     );

     hoverChangeDescription(
        ".ts",
        "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem."
     );

     hoverChangeDescription(
        ".node",
        "O Node. js é um ambiente de execução Javascript, linguagem padrão de manipulação de páginas HTML."
     );

     hoverChangeDescription(
        ".angular",
        "Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações."
     );

     