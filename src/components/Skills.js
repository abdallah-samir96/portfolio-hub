function Skills() {
    const skillCategories = [
        {
            title: "Backend",
            icon: "bi bi-server",
            skills: ["Java", "Kotlin","Vert.x", "Maven", "Spring Boot","Gradle", "Quarkus", "Microservices", "REST APIs", "Hibernate"]
        },
        {
            title: "Frontend",
            icon: "bi bi-window",
            skills: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"]
        },
        {
            title: "Cloud & DevOps",
            icon: "bi bi-cloud",
            skills: ["Docker", "Kubernetes", "Kafka", "RabbitMQ", "CI/CD", "Git", "Linux", "Jinkins"]
        },
        {
            title: "Security",
            icon: "bi bi-shield-check",
            skills: ["Keycloak", "OAuth2", "OIDC", "JWT", "Spring Security", "WSO2 IS"]
        },
        {
            title: "Databases",
            icon: "bi bi-database",
            skills: ["PostgreSQL", "MySQL", "Oracle", "Redis", "MongoDB"]
        },
        {
            title: "Practices",
            icon: "bi bi-gear",
            skills: [
                "System Design",
                "Agile",
                 "Testing",
                "Distributed Systems",
                "Devops",
                "Clean Architecture",
                "Design Patterns", 
            ]
        }
    ];

    return <section className="skills-section py-3">
        <div className="container">
            <h2 className="section-title mb-5">
                <span className="section-title-info">Skills & Technologies</span>
            </h2>

            <div className="row g-4">
                {skillCategories.map((category, index) => (
                    <div className="col-lg-4 col-md-6" key={index}>
                        <div className="skill-card h-100">
                            <div className="d-flex align-items-center mb-2">
                                <i className={`${category.icon} skill-icon me-3`}></i>
                                <h5 className="mb-0">{category.title}</h5>
                            </div>

                            <div className="d-flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="skill-badge">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}

export default Skills;