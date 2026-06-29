import { TypeAnimation } from "react-type-animation";
import '../styles/Profile.css'

function Profile() {
    const animationSequence = [
        'Software Engineer',
        2000,
        'FullStack Developer (Java, Kotlin, React, ...',
        2000,
        'Software Developer',
        2000,
        'Java Developer With LTS Versions',
        2000,
        'Backend Developer',
        2000,
        'Enterprise Backend Developer',
        2000
    ]
    return (
        <section className="hero">
            <div className="container text-center">
                <h1 className="display-3 fw-bold">Abdallah Samir</h1>
                <TypeAnimation className="hero-profile-roles"
                    sequence={animationSequence}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
                <div className="mt-4">
                    <a className="btn btn-primary m-2" href="#contacts-details">
                        Contacts Details
                    </a>
                    <a className="btn btn-outline-light m-2" download href="../resources/Abdallah_Samir_Software_Engineer.pdf">
                        Download Resume
                    </a>
                </div>

                <div className="social mt-4">
                    <a href="https://github.com/abdallah-samir96" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                    <a href="https://www.linkedin.com/in/abdallah96/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                    <a href="https://wa.me/+201097456260" target="_blank" rel="noreferrer"><i className="bi bi-whatsapp"></i></a>
                    <a href="mailto:abdallahsameer22@gmail.com"><i className="bi bi-envelope-fill"></i></a>
                    <a href="https://www.hackerrank.com/profile/abdallahsameer22" target="_blank"><i className="bi bi-code-slash"></i></a>
                    <a href="https://www.youtube.com/@AbdallahSamir-x4w" target="_blank"><i className="bi bi-youtube"></i></a>

                </div>
            </div>
        </section>

    );
}
export default Profile;