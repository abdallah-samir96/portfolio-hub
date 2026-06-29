import React, { useEffect, useState, useCallback } from "react";


const FloatingActions = ({
  whatsappNumber = "+201097456260",
  whatsappMessage = "Hello, How Are you?!",
}) => {
    
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleWhatsApp = useCallback(() => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }, [whatsappNumber, whatsappMessage]);

  return (
    <>
      {/* WhatsApp */}
      <button
        type="button"
        className="floating-btn whatsapp-btn"
        onClick={handleWhatsApp}
        aria-label="Contact us on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </button>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          type="button"
          className="floating-btn top-btn"
          onClick={handleScrollTop}
          aria-label="Scroll to top"
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      )}
    </>
  );
};

export default FloatingActions;