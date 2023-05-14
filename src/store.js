import img1 from "./work1.png";
import img2 from "./work2.jpg";
import img3 from "./work3.jpg";
import img4 from "./TodoList.jpg";
import img5 from "./Currency.jpg";

const initState = {
    project: [
        {
            title: 'Vaccination',
            description: "A small React application that knows how to register for the KOVID-19 vaccination.",
            linkDemo: "https://registration-for-vaccination-3i4i.vercel.app/",
            linkGit: "https://github.com/Magamed-Ali/registration_for_vaccination",
            img: img1
        },
        {
            title: 'Currency converter',
            description: "The Currency Converter project is designed for convenient currency conversion using modern technologies. The project uses React library with TypeScript support.",
            linkDemo: "https://volute-conversion.vercel.app/converter",
            linkGit: "https://github.com/Magamed-Ali/volute-conversion",
            img: img5
        },
        {
            title: 'Movies project',
            description: "Movie search (by movie title, by genre, serial movies)",
            linkDemo: "https://magamed-ali.github.io/movies-project/",
            linkGit: "https://github.com/Magamed-Ali/movies-project",
            img: img2
        },
        {
            title: 'Watch',
            description: "Current time (+3)",
            linkDemo: "https://magamed-ali.github.io/watch/",
            linkGit: "https://github.com/Magamed-Ali/watch",
            img: img3
        },
        {
            title: 'TodoList',
            description: "Название проекта",
            linkDemo: "https://magamed-ali.github.io/1-todolist/",
            linkGit: "https://github.com/Magamed-Ali/1-todolist",
            img: img4
        },
        {
            title: 'Counter 5',
            description: "Название проекта",
            linkDemo: "",
            linkGit: "",
            img: ""
        },
        {
            title: 'Counter 6',
            description: "Название проекта",
            linkDemo: "",
            linkGit: "",
            img: ""
        }
        ]
}

export const reduser = (state = initState, action) => {

    switch (action.type){

        default:
            return state


    }
}
