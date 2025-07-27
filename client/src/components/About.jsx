

const About = () => {
    return (
        <section className=" col-xxl-8 px-4 py-5" id="about">

            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

                <div className="col-10 col-sm-8 col-lg-6">

                    <img
                        src="https://camo.githubusercontent.com/88adc7c88c9d3dba7479020846ed35d13410e3707c7f149e1c6140cc6beaef9a/68747470733a2f2f70687973696373677572756b756c2e66696c65732e776f726470726573732e636f6d2f323031392f30322f6368617261637465722d312e676966"
                        className="w-full img-fluid"
                        alt="About Ankit Jha"
                      
                        loading="lazy"
                    />
                </div>
                <div className="col-lg-6">

                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                        About Me
                    </h1>
                    <p className="lead">
                      Hey! I'm <strong>Aman Gaade</strong> — a passionate and self-driven Full Stack Developer, currently working with the <strong>MERN stack</strong>. I love building websites and applications that are not just functional, but also intuitive and visually engaging.
                        
                    </p>
                    
                </div>
            </div>
        </section>

    )
}

export default About