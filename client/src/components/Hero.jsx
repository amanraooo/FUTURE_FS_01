

const Hero = () => {
    return (
        <section className="px-4 py-5 my-5 text-center">

            <img
                className="d-block mx-auto mb-4 shadow border"
                src="https://ankitjha.vercel.app/_next/image?url=%2Fankit.png&w=640&q=75"
                alt="Ankit Jha"
                width={120}
                style={{ "borderRadius": "50%" }}

            />
            <h1 className="display-5 fw-bold text-body-emphasis">Hello, I am Ankit Jha</h1>
            <div className="col-lg-6 mx-auto">

                <p className="lead mb-4">
                    I am a full stack developer and freelancer.
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">

                    <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
                        My Resume
                    </button>
                    <a href="#contact" type="button" className="btn btn-outline-secondary btn-lg px-4">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>

    )
}

export default Hero