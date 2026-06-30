import React from "react";

function Contact() {
    return (
        <section id="contacts-details" className="py-5 bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Contact Me</h2>
                    <p className="text-muted">
                        Feel free to connect with me through any of the platforms below.
                    </p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow-lg border-0 rounded-4">
                            <div className="card-body py-5">
                                <div className="d-flex justify-content-center gap-4 flex-wrap">

                                    {/* LinkedIn */}
                                    <a
                                        href="https://www.linkedin.com/in/abdallah96/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-decoration-none"
                                    >
                                        <div className="d-flex flex-column align-items-center">
                                            <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                                                style={{ width: "70px", height: "70px" }}
                                            >
                                                <i className="bi bi-linkedin fs-2"></i>
                                            </div>
                                            <span className="mt-3 fw-semibold text-dark">
                                                LinkedIn
                                            </span>
                                        </div>
                                    </a>

                                    {/* GitHub */}
                                    <a
                                        href="https://github.com/abdallah-samir96"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-decoration-none"
                                    >
                                        <div className="d-flex flex-column align-items-center">
                                            <div className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center"
                                                style={{ width: "70px", height: "70px" }}
                                            >
                                                <i className="bi bi-github fs-2"></i>
                                            </div>
                                            <span className="mt-3 fw-semibold text-dark">
                                                GitHub
                                            </span>
                                        </div>
                                    </a>

                                    {/* WhatsApp */}
                                    <a
                                        href="https://wa.me/+201097456260"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-decoration-none"
                                    >
                                        <div className="d-flex flex-column align-items-center">
                                            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center"
                                                style={{ width: "70px", height: "70px" }}
                                            >
                                                <i className="bi bi-whatsapp fs-2"></i>
                                            </div>
                                            <span className="mt-3 fw-semibold text-dark">
                                                WhatsApp
                                            </span>
                                        </div>
                                    </a>
                                    {/* Youtube */}

                                    {/* YouTube */}
                                    <a
                                        href="https://www.youtube.com/@AbdallahSamir-x4w"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-decoration-none"
                                    >
                                        <div className="d-flex flex-column align-items-center">
                                            <div
                                                className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center"
                                                style={{ width: "70px", height: "70px" }}
                                            >
                                                <i className="bi bi-youtube fs-2"></i>
                                            </div>

                                            <span className="mt-3 fw-semibold text-dark">
                                                YouTube
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;