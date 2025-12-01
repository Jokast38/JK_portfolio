import React, { useState } from "react";
import "../styles/Contact.css";

const API_URL = process.env.REACT_APP_API_URL;


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message envoyé ✔");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Erreur, réessaie ❌");
      }
    } catch (err) {
      setStatus("Serveur inaccessible ❌") 
      console.log("API_URL =", API_URL);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact</h2>

      <form className="contact-form" onSubmit={sendEmail}>

        <div className="input-group">
          <label>Nom</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Message</label>
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button className="contact-btn" type="submit">
          Envoyer
        </button>

        <p className="form-status">{status}</p>
      </form>
    </section>
  );
};

export default Contact;
