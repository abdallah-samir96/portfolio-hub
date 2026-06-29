function Contact() {
    return (
        <section id = "contacts-details">
            <h2 className="section-title">Contact</h2>
            <div className="card shadow border-0 p-4">
                <form>
                    <div className="mb-3">
                        <input className="form-control" placeholder="Name" />
                    </div>
                    <div className="mb-3">
                        <input className="form-control" placeholder="Email" />
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                    </div>
                    <button className="btn btn-primary" type="button">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact;