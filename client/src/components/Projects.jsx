import { useState, useEffect } from "react"

import axios from "axios";
const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  const dummyProjects = [
    {
      _id: "1",
      title: "StudyNotion",
      description: "A fully-featured edtech platform built with MERN stack.",
      imageUrl: "/SNLogo.webp",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      liveUrl: "https://studynotion-frontend.vercel.app/",
      githubUrl: "https://github.com/yourusername/studynotion"
    },
    {
      _id: "2",
      title: "Chattu Chat app",
      description: "Real-time chat app with End to end Encryption, instant messaging and file sharing,",
      imageUrl: "/Chattu.webp",
      technologies: ["Tailwind"," MongoDB", "React", "Redux"," Express" , "Socket.io"],
      liveUrl: "https://chatapp-frontend-orcin.vercel.app/",
      githubUrl: "https://github.com/amanraooo/EchoChat-main"
    },
    {
      _id: "3",
      title: "Job Hunt",
      description: "Built scalable Job hunting web app with responsive UI.",
      imageUrl: "/jbh.webp",
      technologies: ["Tailwind"," MongoDB", "React", "Redux" ,"Typescript"],

      liveUrl: "",
      githubUrl: "https://github.com/amanraooo/HireMap-main"
    }
  ];

  setProjects(dummyProjects);
  setLoading(false);
}, []);

  if(loading) return <></>

  return (
    <>
      <section className="text-center container" id="projects">

        <div className="row py-lg-5">

          <div className="col-lg-6 col-md-8 mx-auto">

            <h1 className="fw-light">My Projects</h1>
            <p className="lead text-body-secondary">
              Here are the some of my project.
            </p>
          
          </div>
        </div>
        
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        {
          projects.map((project)=>{
            return <div className="col" key={project._id}>

          <div className="card shadow-sm overflow-hidden">

            {project.imageUrl && (
                  <img
                    src={project.imageUrl}
                    className="card-img-top"
                    alt={project.title}
                    style={{ height: '180px', objectFit: 'cover' }}
                  />
                )}
            <div className="card-body">

              <p className="card-text">
               {project.description}
              </p>
              <div className="mb-3 d-flex flex-wrap gap-2">
                {
                  project.technologies?.map((tech,idx)=>{
                    return <span className="badge text-bg-secondary  fw-light" key={idx}>{tech}</span>
                  })
                }
              </div>
              <div className="d-flex justify-content-end align-items-center">

                <div className="btn-group">

                  <a
                  target="_blank"
                  href={project.liveUrl}
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Live Demo
                  </a>
                  <a
                  target="_blank"
                  href={project.githubUrl}
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Code
                  </a>
                </div>
               
              </div>
            </div>
          </div>
        </div>
          })
        }


      </div>
      </section>






    </>


  )
}

export default Projects