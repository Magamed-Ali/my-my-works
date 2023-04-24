import img1 from "./work1.png";
import img2 from "./work2.jpg";
import img3 from "./work3.jpg";

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
            title: 'Counter 4',
            description: "Название проекта",
            linkDemo: "",
            linkGit: "",
            img: ""
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
