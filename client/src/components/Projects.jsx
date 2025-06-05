import { useState, useEffect } from "react"

import axios from "axios";
const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/projects");
        setProjects(res.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
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