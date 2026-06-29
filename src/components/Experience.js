function Experience() {
    const experience = [
        {
            key: 1,
            year: '2025 - Present',
            brief: 'Industry: Construction Tech | Smart Building Automation',
            title: 'Software Engineer - Squadio (Whitehelmet).',
            description: 'Developing advanced automation solutions for the construction industry, focusing on High traffic, Scalability and Performance including Designing and implementing scalable, high-performance backend services using Java, Kotlin, Spring Boot, and Keycloak with OIDC and OAuth2 authentication And Working closely with the cross-functional teams (DevOps, QA, Product Owners) to deliver reliable and secure software in an Agile environment.',
            stack: ["Java", "Spring Boot", "Kotlin", "Oracle OCI", "OAuth2", "OIDC", "Keycloak", "Camunda", "Spring Data JPA", "Spring Security", "Kubernates", "Docker"]
        },
        {
            key: 2,
            year: '2024 - 2025',
            brief: 'Driven by the market challenges and need for a smart revenue cycle management solutions in the fast-paced digitized healthcare sector, established a constructive revenue cycle management in both the private & public healthcare sectors across the GCC.',
            title: 'Software Developer - Santechture.',
            description: 'Designed and maintained microservices handling high-volume healthcare transactions & Owned the full SDLC lifecycle from requirements gathering and solution design through implementation, testing, deployment, and client support, Handling API Rate Limit, Handle Authentication, Authorization on the application level using token based auth.',
            stack: ["Java", "HL7", "Apache Kafka", "Spring Boot", "React", "Postgresql", "Redis for Caching", "Keycloak",  "Gitlab Pipeline", "Docker", "Dependency Manager"]
        },
        {
            key: 3,
            year: '2022 - 2024',
            brief: 'Coral is the cutting-edge platform for healthcare in US that serve customers in the healthcare field.',
            title: 'Software Engineer - Coral Technology',
            description: 'Implementing epics, user stories, tasks conducted from the product & business team, Improved code quality through automated testing and code reviews & Applying the clean code standard, implementing high performance approaches to meet the expectations of services, Reduced API response time by 30% through query optimization and caching strategies.',
            stack: ["Kotlin", "Java", "Spring Boot", "Jakarta EE", "Vert.x", "Keycloak", "OIDC", "Security", "AWS", "GCP"]
        }
    ];

    return (
        <section className="mb-5">
            <h2 className="section-title"><span className= "section-title-info">Experience Timeline</span></h2>
            <div className="timeline">
                {experience.map((e, i) => (
                    <div key={i} className="timeline-item">
                        <h4>{e.title}</h4>
                        <small>{e.year}</small>
                        <p className="fw-bold">{e.brief}</p>
                        <p>{e.description}</p>
                        <p>{e.stack.map((element, index)=> {return <span key={index} className="badge skill-badge m-2">{element}</span>})}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience;