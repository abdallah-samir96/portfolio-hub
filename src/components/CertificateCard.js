import React from "react";

function CertificateCard({
  image,
  title,
  issuer,
  issueDate,
  credentialId,
  description,
  skills,
  certificateLink,
}) {
  return (
    <div className="card certificate-card border-0 shadow-sm h-100">
      <div className="certificate-image-container">
        <img
          src={image}
          alt={title}
          className="card-img-top certificate-image"
        />

        <div className="certificate-overlay">
          <span className="badge bg-light text-dark px-3 py-2">
            <i className="bi bi-award-fill text-warning me-2"></i>
            Certified
          </span>
        </div>
      </div>

      <div className="card-body d-flex flex-column p-4">
        <div className="mb-3">
          <h5 className="fw-bold mb-2">{title}</h5>

          <div className="d-flex align-items-center text-muted mb-2">
            <i className="bi bi-building me-2"></i>
            <span>{issuer}</span>
          </div>

          <div className="d-flex align-items-center text-muted">
            <i className="bi bi-calendar-event me-2"></i>
            <span>{issueDate}</span>
          </div>
        </div>

        {credentialId && (
          <div className="mb-3">
            <small className="text-secondary">
              <strong>ID:</strong> {credentialId}
            </small>
          </div>
        )}

        <p className="text-secondary flex-grow-1">
          {description}
        </p>

        <div className="mb-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="badge rounded-pill text-bg-light border me-2 mb-2 px-3 py-2"
            >
              {skill}
            </span>
          ))}
        </div>

        <a
          href={certificateLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn-dark rounded-pill mt-auto"
        >
          <i className="bi bi-box-arrow-up-right me-2"></i>
          View Certificate
        </a>
      </div>
    </div>
  );
}

export default CertificateCard;