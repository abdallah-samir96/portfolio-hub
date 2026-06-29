function Experience() {
    const experience = [
        {
            year: '2025 - Present',
            title: 'Software Engineer - Squadio (Whitehelmet)',
            text: 'Designing scalable backend services using Java, Kotlin, Spring Boot, Keycloak and Microservices.'
        },
        {
            year: '2024 - 2025',
            title: 'Software Developer - Santechture',
            text: 'Developed healthcare microservices and owned the entire SDLC lifecycle.'
        },
        {
            year: '2022 - 2024',
            title: 'Software Engineer - Coral Technology',
            text: 'Built REST APIs and improved API performance by 30%.'
        }
    ];

    return (
        <section className="mb-5">
            <h2 className="section-title">Experience Timeline</h2>
            <div className="timeline">
                {experience.map((e, i) => (
                    <div key={i} className="timeline-item">
                        <h5>{e.title}</h5>
                        <small>{e.year}</small>
                        <p>{e.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience;