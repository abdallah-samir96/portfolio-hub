import '../styles/About.css'

function About() {
    return (
        <section className="mb-5">
            
            <h2 className="section-title"><span className="section-title-info">About Me</span></h2>
            <div className="about-me shadow border-0 p-4">
                <span className='fw-bold'>Software Engineer with 5+ years of experience</span> 
                specializing in <span className='fw-bold'>Java, Kotlin, Spring Boot, Kafka, React, and Kubernetes</span>. 
                Experienced in building scalable microservices, distributed systems, 
                and cloud-native applications with a strong focus on performance, 
                reliability, and maintainability. Delivered enterprise solutions 
                across healthcare and construction industries while integrating 
                AI-powered technologies and modern software engineering practices. 
                Passionate about designing clean architectures, solving complex challenges, 
                and building high-quality, impactful software.
            </div>
        </section>
    );
}
export default About;