import React from 'react'
import Heading from './Heading'
import Card from './Card'
import '../app/styles/project.css';


const data=[
  {
    id:0,
    title:"Static Interactive Resume",
    desc:"Built with HTML,CSS,TYPESCRIPT and JAVASCRIPT,allowing user to showcase their skills.It generates a clean, downloadable, and shareable resume ijn a static format.",
    img:"/project_01.png",
    tags:["HTML", "Node" ,"CSS","TYPESCRIPT","JAVASCRIPT"],
  },
  {
    id:1,
    title:"Dynamic Resume Builder",
    desc:"Dynamic Resume Builder built with HTML,CSS,TYPESCRIPT and JAVASCRIPT , allowing user to create customized, professional resumes efficiently.",
    img:"/project_02.png",
    tags:["HTML", "Node" ,"CSS","TYPESCRIPT","JAVASCRIPT"],
  },
  {
    id: 2,
    title: "Web Design,Development",
    desc: "A responsive and modern webpage built using HTML, Node.js, CSS, and TypeScript to demonstrate seamless integration of frontend and backend technologies.",
    img: "/project_03.png",
    tags: ["HTML", "Node", "CSS", "TYPESCRIPT","JAVASCRIPT"]
  },
   {id:3,
    title:"Editable Resume Builder",
    desc:"Built with HTML,CSS,TYPESCRIPT and JAVASCRIPT offers flexibility to adjust and tailor every part of the resume according to the user's preferences.",
    img:"/project_04.png",
    tags:["HTML", "NODE" ,"CSS","TYPESCRIPT","JAVASCRIPT"],
  },
  {
    id:4,
    title:"Backatown Coffee Website",
    desc:"The website serves as a virtual extension of the shop, providing visitors with an immersive experience that reflects the warmth and charm of the physical location.",
    img:"/project_05.png",
    tags:["HTML", "NODE" ,"CSS","TYPEESCRIPT","JAVASCRIPT"],
  },
  {
    id: 5,
    title: "My Portfolio Website",
    desc: "Website built to showcase skills, projects, and achievements. The site features a modern design with responsive layouts, highlighting expertise in web development and AI.",
    img: "/project_06.png",
    tags: ["HTML", "NODE","CSS" ,"TAILWIND", "NEXT.JS"]
  },
  {
    id: 6,
    title: "Multi-Web pages",
    desc: "This is a furniture e-commerce website that has been built using a Figma template, Next.js, Sanity, and APIs. All necessary functionalities have been implemented in it..",
    img: "/Screenshot (77).png",
    tags: ["HTML", "NODE","CSS","TAILWIND" ,"NEXT.JS",]
  },
  
  {
    id: 7,
    title: "E-commerce Website",
    desc: "This is a multi-web-page website built using Next.js with custom CSS. It includes components for Home, About, Contact, and Watches..",
    img: "/Screenshot (76).png",
    tags: ["HTML", "NODE" ,"TAILWIND", "NEXT.JS","SANITY",]
  },
  
]

const Project = () => {
  return (
    <div id='projects' >
      <Heading title='My Projects ' />
      <div className="projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center">
      {data.map((el) =>(<Card
      key={el.id}
      title={el.title}
      desc={el.desc}
      img={el.img}
      tags={el.tags}
      />))}
    
      </div>
    </div>
  )
}

export default Project;
