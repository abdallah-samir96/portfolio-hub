
function Skills() {
    return (
        <section className="mb-5">
            <h2 className="section-title">Skills</h2>
            <div>
                {['Java', 'Spring Boot', 'Kotlin', 'React', 'Redux', 'Kafka', 'Docker', 'Kubernetes', 'AWS', 'PostgreSQL', 'MongoDB', 'Microservices']
                    .map(skill => (
                        <span key={skill} className="badge text-bg-primary m-2 p-2">{skill}</span>
                    ))}
            </div>
           
        </section>
    );
}

export default Skills;