import React from 'react'


const data = [
    {
        id: "1",
        name: "CCA",
        link: "https://www.ccanitd.in",
        imgsrc: "https://www.nitdgp.ac.in/uploads/b35d4023d1a48778c09366527db85b7f.png",
        title: "CCA, Centre for Cognitive Activities, is the focal point where convergence of all technical and scientific endeavours of the students materialises. As the technical gymkhana of the institute, this club is the revolution which bridges the gap between knowledge and application. Bulk of the extracurricular activities held in the college all the year round are organised by the CCA , with the objective of probing the dark recesses of human mind so that the grey cells are stimulated to create , conceptualise and evolve, triggering a rebellion of the new age mind against baseless conventions and meek acceptance."
    },
    {
        id: "2",
        name: "Dance Club",
        link: "https://www.facebook.com/DanceClubNITD/",
        title: "Dance Club is the official dance club of Nitdgp. We not only perform in Independence Day, Republic Day and other college fests but also participate in inter college fests like spring fest(iitkgp) and carpe diem(iim Calcutta) and have brought medals for our college. We believe in diversity hence we support and perform all dance forms. And as we say “we work hard and party harder”.",
        imgsrc: "https://www.nitdgp.ac.in/uploads/5d919f5d5a4e0e5c37f63cf2befed147.jpeg"
    },
    {
        id: "3",
        name: "Darpan",
        link: "https://www.facebook.com/darpan.nitdgp/",
        title: "We are the Hindi society of NIT Durgapur, actively engaged in the service of 'Hindi', official language of the Indian Republic. Darpan looks forward to the overall development of people with different types of programs. We provide valuable and useful platforms for the promotion of talent of students, as well as awards, cash prizes and citations to honor their merit. Various offline and online events are organised throughout the year. Promoting rajbhasa 'Hindi' is the first priority of Darpan and will continue to establish Hindi language on its peak growth with its proper functions.",
        imgsrc: "https://www.nitdgp.ac.in/uploads/df28040e57c786faa1713656bce18a57.jpg"
    },
    {
        id: "4",
        name: "Debating Society",
        link: "https://m.facebook.com/debatingsociety3103.nitd/?ref=bookmarks",
        imgsrc: "https://www.nitdgp.ac.in/uploads/bff0dab466dd3906f3317abd5b7e7165.png",
        title: "The Debating Society is the official debating club of NIT Durgapur. At its core, this club is an ideological interest group that aims to promote the culture of debating on campus and remove the phobia associated with public speaking. We work with a mission to encourage the youth to actively involve themselves in issues concerning social interest and upsurge, and to make them articulate enough to present their opinion in a coherent and logical manner. The club also conducts workshops and intra-college debates like Asian Parliamentary Debate and Oxford Union Debate to help the students develop confidence to voice their opinion on a bigger platform and subsequently represent NIT Durgapur in various debating and public speaking competitions across the country. Apart from debates our flagships events like Kill Code, Take de Bait, Icebreaker and Empire witness the largest turnout among college events. Where we differ from most other debating clubs across a wide range of institutions across the country is that we focus on incorporating tech to our practices as well."
    },
    {
        id: "5",
        name: "Enteract",
        link: "https://www.facebook.com/enteractclub",
        title: "Netflix Original Series",
        imgsrc: "https://www.nitdgp.ac.in/uploads/0cc43b50177f810ab3343904686b094a.png"
    },
    {
        id: "6",
        name: "Enterpreneurship Development Cell",
        link: "https://www.edcnitd.co.in/",
        imgsrc: "https://www.nitdgp.ac.in/uploads/688ceb18c23f24992fc3a3c820bdb47e.jpg",
        title: "Netflix Original Series"
    },
    {
        id: "7",
        name: "GNU Linux Users' Group",
        link: "http://nitdgplug.org/",
        title: "Netflix Original Series",
        imgsrc: "https://www.nitdgp.ac.in/uploads/76ab6b64bdd80ba48f36395262de0342.png"
    },
    {
        id: "8",
        name: "IEEE Student Branch NIT Durgapur",
        link: "https://www.ieeesbnitdgp.com/",
        title: "Netflix Original Series",
        imgsrc: "https://www.nitdgp.ac.in/uploads/06c30450d92d66b002ef985786fc158a.png"
    },
    {
        id: "9",
        name: "IIM Student chapter",
        link: "https://nitdgp.ac.in/p/iim-student-chapter",
        title: "Netflix Original Series",
        imgsrc: "https://www.nitdgp.ac.in/uploads/92b6dcb9006c32d78ada34db31c9d432.jpg"
    },
    {
        id: "10",
        name: "ISTE Students' Chapter",
        link: "http://istenitdgp.com/",
        imgsrc: "https://www.nitdgp.ac.in/uploads/aab3beea3d8835bfd600502b307fdb5f.png",
        title: "Netflix Original Series"
    },
    {
        id: "11",
        name: "Literary Circle",
        link: "http://www.lcnitd.com/",
        title: "Netflix Original Series",
        imgsrc: "https://www.nitdgp.ac.in/uploads/4fe861ef350aa45353a608736e3e1dc1.png"
    },
    {
        id: "12",
        name: "Maths N Tech Club",
        link: "http://www.mntc.co.in",
        title: "Netflix Original Series",
        imgsrc: "https://www.nitdgp.ac.in/uploads/a45620c68904b70f231b4d926972ec9e.png"
    },
    {
        id: "13",
        name: "Music Club",
        link: "https://www.facebook.com/MuC.NITD/",
        title: "Netflix Original Series",
        imgsrc: "https://www.nitdgp.ac.in/uploads/266d54222cf8776a09ea7b71121bd328.jpg"
    },
    {
        id: "15",
        name: "Prakriti Club",
        link: "http://www.prakriti.in.net",
        title: "Netflix Original Series",
        imgsrc: "https://www.nitdgp.ac.in/uploads/0eefa6ff7978830aff71410c14f56b3d.jpg"
    },
    {
        id: "16",
        name: "QuizInc",
        link: "http://quizinc.in/",
        title: "Netflix Original Series",
        imgsrc: "https://www.nitdgp.ac.in/uploads/41bbb8e3e4f6425a5a1fa20e3dcefe0f.png"
    }, {
        id: "17",
        name: "Radio Nitroz",
        link: "https://sites.google.com/view/radionitrozmastikadoz/",
        title: "Netflix Original Series",
        imgsrc: "https://www.nitdgp.ac.in/uploads/4bf5b10e50fd1c1df06b2966d6017432.jpg"
    },
    {
        id: "18",
        name: "RECursion - NIT Durgapur Programming Club",
        link: "http://www.recursionnitd.in/",
        title: "Netflix Original Series",
        imgsrc: "https://www.nitdgp.ac.in/uploads/697b8892b89e52ad9ead93692aed8608.jpg"
    },
    {
        id: "19",
        name: "Society Of Automotive Engineers Collegiate Chapter NIT Durgapur",
        link: "http://www.saenitd.com",
        title: "Netflix Original Series",
        imgsrc: "https://www.nitdgp.ac.in/uploads/e526f7e803a354c61495d84ad8cbecc0.png"
    },
    {
        id: "21",
        name: "SPIC MACAY NIT DurgapurChapter",
        link: "http://www.spicmacaynitdgp.in",
        title: "Netflix Original Series",
        imgsrc: "https://www.nitdgp.ac.in/uploads/f7177d943bad513a733c266e10177018.jpeg"
    },
    {
        id: "22",
        name: "Strokes",
        link: "https://www.facebook.com/Strokes.NITD/",
        title: "Netflix Original Series",
        imgsrc: "https://www.nitdgp.ac.in/uploads/ed533b14af4e9ec9b98a035a87a15fa4.jpg"
    },




]


export default data;