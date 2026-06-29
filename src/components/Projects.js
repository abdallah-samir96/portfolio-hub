
function Projects() {

    const projects = [
        { name: 'Healthcare Revenue Cycle Platform', tech: 'Java, Spring Boot, Kafka' },
        { name: 'Construction Automation Platform', tech: 'Kotlin, Spring Boot, Keycloak' },
        { name: 'NLP E-Commerce System', tech: 'Java, NLP, PostgreSQL' }
    ];

    return (
        <section className="mb-5">
            <h2 className="section-title">Projects</h2>
            <div className="row">
                {projects.map((p, i) => (
                    <div className="col-md-4 mb-4" key={i}>
                        <div className="card h-100 shadow border-0 p-3">
                            <h5>{p.name}</h5>
                            <p>{p.tech}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Projects;