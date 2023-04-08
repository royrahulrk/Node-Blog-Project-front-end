import React from "react";
import { createContext, useState } from "react";


export const ContextData = createContext();

export const ContextApi = (props) => {
    const [data, setData] = useState([

        // Bollywood
        {    
            id: 1,
            category: "bollywood",
            img: "https://m.media-amazon.com/images/M/MV5BOTQ5Nzc3NzAtMzZlMS00ZWJjLWIxMGMtNDU4ZTQ1NmNjMjc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
            title: "KABHI KHUSHI KABHIE GHAM",
            para: "Yashvardhan Raichand is a snobbish man, he breaks ties with his elder son Rahul, for marrying a girl with lower social status. When his younger son Rohan returns home, he is upset to know that his brother no longer lives with them. Rohan decides to reunite his family and goes to London and finds Rahul. But, the question is will he be successful in convincing his egoistic father for a reunion?",
            year: "14 December 2001",
          },
          {
            id: 2,
            category: "bollywood",
            img: "https://upload.wikimedia.org/wikipedia/en/9/95/Krrish_poster.jpg",
            title: "KRRISH",
            para: "Krrish is the story of a simple village boy Krishna (Hrithik Roshan) who lives with his grandmother (Rekha) having lost his parents to misfortune. Krishna meets Priya (Priyanka Chopra) when she comes with her group for a trek from Singapore. Having fallen in love with her, he rushes to Singapore on being called by Priya who is trying to save her job by getting Krishna to Singapore and having him pull unnaturally jaw-dropping stunts - something he does regularly in his village. But when he reaches Singapore, the biggest truth of his life uncovers itself, transforming him into ``Krrish``, a gallany superhero. What is it that alters his life to an extent as this?",
            year: "23 June 2006",
          },
          {
            id: 3,
            category: "bollywood",
            img: "https://upload.wikimedia.org/wikipedia/en/9/90/Bang_Bang_%282014_Film%29.jpg",
            title: "BANG BANG",
            para: "A young bank receptionist gets mixed up with Rajveer Nanda, a man who has a mysterious background.",
            year: "2 October 2014",
          },
          {
            id: 4,
            category: "bollywood",
            img: "https://m.media-amazon.com/images/M/MV5BYmRiMmZmZGMtNjFhNi00MTIwLTlkNjQtNGM4ZTEzOWFmZmIwXkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_FMjpg_UX1000_.jpg",
            title: "MUJHE DOSTHI KAROGE",
            para: '"What would you do if the one you loved was not actually the one you loved. What would you do if your best friend was in love with the one you love. What would you do if your best friends are sacrificing their love for you. Meet Raj (Hrithik Roshan), Pooja (Rani Mukerji) and Tina (Kareena Kapoor)- 3 best friends thrown into a situation that time, letters, love and separation have created for th',
            year: "9 August 2002",
          },
          {
            id: 5,
            category: "bollywood",
            img: "https://s3images.zee5.com/wp-content/uploads/sites/7/2022/01/Untitled-design-2022-01-26T151639.382.jpg",
            title: "AGNEEPATH",
            para: "A young boys father is lynched before his eyes fifteen years later he returns home for revenge.",
            year: "26 January 2012",
          },
          {
            id: 6,
            category: "bollywood",
            img: "https://pbs.twimg.com/media/Fd1D0-KaEAMU3Im?format=jpg&name=900x900",
            title: "VIKRAM VEDHA",
            para: "A tough police officer sets out to track down and kill an equally tough gangsters.",
            year: "30 September 2022",
          },
          {
            id: 7,
            category: "bollywood",
            img: "https://cdn.shopify.com/s/files/1/0969/9128/products/Pathan-ShahRukhKhan-BollywoodSuperhitHindiMoviePoster_ce29dea2-91e6-43b6-81cc-1e2e0a1c1ae0.jpg?v=1675251704",
            title: "Pathan",
            para: "Indian RAW agent Pathaan (Shah Rukh Khan) gets to know of a major impending attack against India, mounted by a mercenary group led by the ruthless enigma Jim (John Abraham), who has a history of his own.",
            year: "25 January 2023",
          },
          {
            id: 8,
            category: "bollywood",
            img: "https://w0.peakpx.com/wallpaper/712/382/HD-wallpaper-movie-war-2019-hrithik-roshan-tiger-shroff.jpg",
            title: "War",
            para: "An Indian soldier is assigned to eliminate his former mentor and he must keep his wits about him if he is to be successful in his mission; when the two men collide, it results in a barrage of battles and bullets.",
            year: "2 October 2019",
          },
          {
            id: 9,
            category: "bollywood",
            img: "https://www.kerala9.com/wp-content/uploads/2022/04/kgf-chapter-2-rocky-hd-images-001.jpg",
            title: "KGF",
            para: "Rocky, a young man, seeks power and wealth in order to fulfil a promise to his dying mother. His quest takes him to Mumbai, where he becomes involved with the notorious gold mafia.",
            year: "20 December 2018 ",
          },

        //   Fitness
          { 
            id: 10,
            category: "fitness",
            img:'https://media1.popsugar-assets.com/files/thumbor/VAPe-sKElq1UEu9dg6UKo45UJtM/104x208:3315x3419/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/12/30/943/n/1922729/f2e892315e0a6e7e776859.71445957_/i/yoga-poses-to-get-strong-for-headstand.jpg',
            title:"HEAD STAND",
            para:"Headstand improves body awareness, circulation, and posture. It can help reduce swelling in your ankles and feet, boost energy, fight fatigue, and build confidence."
          },
          {
            id: 11,
            category: "fitness",
            img:'https://www.yogajournal.com/wp-content/uploads/2022/01/Forearm-Plank_Andrew-Clark.jpg',
            title:'ELBOW PLANK',
            para:'Plank pose is most commonly used as a transitional pose, moving the body from high to lower planes, and vice versa. It is used within the sun salutation (surya namaskara) sequences and vinyasa sequences, as the yogi steps back to plank and lowers into chatturanga. Plank pose is also known as a pose in its own right, and is often held for long periods of time to build strength, heat, and energy in the body. Because plank pose requires a certain extent of strength and endurance, it is an ideal pose to refocus and re-energize, and overcome from sluggish energy or ‘stuck’ emotions.'
          },
          {
            id: 12,
            category: "fitness",
            img:'https://global-uploads.webflow.com/5fe33d036237252135e3e74d/630cbacb4c81fd7eeb81e0cb_Chakrasana%20by%20cult.fit.webp',
            title:'CHAKRASANA POSE',
            para:'Chakrasana is a deep back-bending pose that is performed for spinal flexibility. The word Chakrasana comes from the words ‘chakra’ meaning wheel and ‘asana’ meaning posture. It is also known as Urdhva Dhanurasana, Bridge Pose, or the Full Wheel Pose, and is an advanced level pose. Chakrasana pose gets its name from the semi-circular position that your body assumes while performing this asana- that of a wheel.The Chakrasana yoga pose stretches the muscles in your chest, shoulders, hamstrings, spinal extensors, and hip flexors. '
          },
          {
            id: 13,
            category: "fitness",
            img:'https://www.artofliving.org/sites/www.artofliving.org/files/styles/facebook_thumb/public/unity2/blog_image/woman%20performing%20bow%20pose.jpeg?itok=qcH0TMLI',
            title:'DHANURASANA POSE',
            para:'Bow Pose (Dhanurasana) is an intermediate yoga pose similar to a backbend. It’s one of the 12 basic Hatha Yoga poses. By lifting your torso up and backward, the chest is opened and the back is deeply stretched. This pose is a great way to deeply stretch the back after a long day of hunching over.'
          },



        //   Food
          {
            id: 14,
            category: "food",
            img: 'https://pristineorganics.com/wp-content/uploads/2019/06/03-1-1-1.jpg',
            title: 'MILLETS',
            description: 'Generally, millets are small-grained, annual, warm-weather cereals belonging to the grass family. They are highly tolerant of drought and other extreme weather conditions and have a similar nutrient content to other major cereals.'
          },
          {
            id: 15,
            category: "food",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHEjlalMuVUPtZIcnic7HtYyKymdG72gQYB8c7Ld-fzvwty9stQdO6B8BaLLKWojy0SwI&usqp=CAU',
            title: `PROTEIN BAR`,
            description: 'When you’re working out later in the day, have a small snack about an hour before you get started. A sports bar that has 200 calories or less is a good option.Look for a bar with low-fiber content, ideally 3 grams or less. Too much fiber before a workout can upset your stomach.'
          },
          {
            id: 16,
            category: "food",
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/grilled-broccoli-1648146826.jpeg',
            title: 'BROCCOLI',
            description: 'Broccoli is a rich source of vitamins, minerals, and antioxidants. Antioxidants can help prevent the development of various conditions.'
          },
          {
            id: 17,
            category: "food",
            img: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/271/271157/bananas-chopped-up-in-a-bowl.jpg',
            title: 'BANANA',
            description: 'Don’t have much time before you head to the gym? Eat an apple or a banana 5 or 10 minutes before your workout for some quick, natural energy.'
          },

        //   Hollywood
          {
            id: 18,
            category: "hollywood",
            img: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Black_Panther_Wakanda_Forever_poster.jpg/220px-Black_Panther_Wakanda_Forever_poster.jpg',
            title: 'BLACK PANTHER: WAKANDA FOREVER',
            description: 'The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T Challa.',
            date: '11 November 2022'
          },
          {
            id: 19,
            category: "hollywood",
            img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXDaxvXPpbQkUf2ifM7yg6b-AIsZT3o_hMf8nFLcttL-PVAM6r',
            title: 'AVATAR',
            description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
            date: '18 December 2009'
          },
          {
              id: 20,
              category: "hollywood",
              img: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg',
              title: 'BLACK ADAM',
              description: 'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods--and imprisoned just as quickly--Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.',
              date: '21 October 2022'
          },

        //   Technology
          {
            id: 21,
            category: "technology",
            img: 'https://miro.medium.com/max/480/1*VKY-Ldkt-iHobItql7G_5w.png',
            title: 'ANGULAR',
            description: 'Angular is a TypeScript-based, free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
            developer: 'Google'
          },
          {
            id: 22,
            category: "technology",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU',
            title: 'REACT',
            description: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.',
            developer: 'Meta and community'
          },
          {
              id: 23,
              category: "technology",
              img: 'https://static.ebayinc.com/static/assets/Uploads/Stories/Articles/node.js.jpg',
              title: 'NODE-JS',
              description: 'Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.',
              developer: 'Microsoft Corporation, Ryan Dahl, OpenJS Foundation, Bryan Cantrill'
          }



    ])
  return (
    <ContextData.Provider value={[data, setData]}>
      {props.children}
    </ContextData.Provider>
  )
}

