import React from "react";
import ITI from '../assets/ITI_Certificate.jpg'
import NANO from '../assets/nano.jpg'
import Oracle from '../assets/oracle.png'
import CertificateCard from "./CertificateCard";
function Certificates() {
    const certificates = [
        {
            image: Oracle,
            title: "Oracle Certified Professional Java SE 17",
            issuer: "Oracle Company",
            issueDate: "2024",
            credentialId: "100476319OCPJSE17",
            description: "Java Certificate for Professional Developers",
            skills: ["Java 17", "OOP", "Streams", "NIO", "Exceptions", "Sealed-Classes", "Records"],
            certificateLink: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=C75A55761090CE1D5B16251E4D6FBB4C947FDEC9F3BB79672C3A3BD1BD9402A5",
        },
        {
            image: ITI,
            title: "Enterprise Web Development Certificate (ITI)",
            issuer: "ITI",
            issueDate: "2022",
            credentialId: "",
            description: "Enterprise Web Development Diploma with Java & Backend Focus.",
            skills: ["BackEnd", "Lambda", "Docker", "CLI", "Java", "Kotlin", "Maven"],
            certificateLink: "https://internal.iti.gov.eg/home",
        },
        {
            image: NANO,
            title: "NanoDegree For Front End Technologies",
            issuer: "Udacity",
            issueDate: "2018",
            credentialId: "",
            description: "NanoDegree Program",
            skills: ["Javascript", "React", "HTML5", "BOOTSTRAP"],
            certificateLink: "https://www.udacity.com/certificate/CLCSVHKV",
        },
    ];
    
    return (
        <div className="container py-3">
            <h2 className="section-title"><span className="section-title-info">Certificates</span></h2>
            <div className="row g-4">
                {certificates.map((certificate, index) => (
                    <div key={index} className="col-md-4">
                        <CertificateCard {...certificate} />
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Certificates;