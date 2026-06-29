function Skills() {
    const skillCategories = [
        {
            title: "Backend",
            icon: "bi bi-server",
            skills: ["Java", "Kotlin", "Spring Boot", "Microservices", "REST APIs", "Hibernate", "JPA"]
        },
        {
            title: "Frontend",
            icon: "bi bi-window",
            skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap"]
        },
        {
            title: "Cloud & DevOps",
            icon: "bi bi-cloud",
            skills: ["Docker", "Kubernetes", "Kafka", "CI/CD", "Git", "Linux"]
        },
        {
            title: "Security",
            icon: "bi bi-shield-check",
            skills: ["Keycloak", "OAuth2", "OIDC", "JWT", "Spring Security"]
        },
        {
            title: "Databases",
            icon: "bi bi-database",
            skills: ["PostgreSQL", "MySQL", "Oracle", "Redis"]
        },
        {
            title: "Practices",
            icon: "bi bi-gear",
            skills: [
                "System Design",
                "Distributed Systems",
                "Agile",
                "Clean Architecture",
                "Design Patterns",
                "Testing"
            ]
        }
    ];

    return <section className="skills-section py-5">
        <div className="container">
            <h2 className="section-title mb-5">
                <span className="section-title-info">Skills & Technologies</span>
            </h2>

            <div className="row g-4">
                {skillCategories.map((category, index) => (
                    <div className="col-lg-4 col-md-6" key={index}>
                        <div className="skill-card h-100">
                            <div className="d-flex align-items-center mb-3">
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