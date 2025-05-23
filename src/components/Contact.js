import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div style={{
      minHeight: "100vh",
      padding: "2rem",
      backgroundColor: "transparent"
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "6rem auto", // shifted downward
        border: "2px solid purple",
        borderRadius: "8px",
        padding: "2rem",
        backgroundColor: "rgba(255, 255, 255, 0.05)", // subtle glass effect
        backdropFilter: "blur(5px)"
      }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
          {/* Left Side */}
          <div style={{ flex: "1", minWidth: "300px" }}>
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", color:"white"}}>Get In Touch</h1>

            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" , color:"white", marginTop:"5rem"}}>
              <FaMapMarkerAlt style={{ fontSize: "2rem", color: "purple", marginRight: "1rem" }} />
              <span>Chennai</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" , color:"white"}}>
              <FaEnvelope style={{ fontSize: "2rem", color: "purple", marginRight: "1rem" }} />
              <span>subhabalasubramanian2@gmail.com</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", color:"white" }}>
              <FaPhoneAlt style={{ fontSize: "2rem", color: "purple", marginRight: "1rem" }} />
              <span>+91 9787757657</span>
            </div>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "1.5rem", marginTop: "2rem" }}>
              <a
                href="https://www.linkedin.com/in/subhashree-b-9a9644290?original_referer="
                target="_blank"
                rel="noopener noreferrer"
                style={iconLinkStyle}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Subhashree0718"
                target="_blank"
                rel="noopener noreferrer"
                style={iconLinkStyle}
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div style={{ flex: "1", minWidth: "300px" }}>
            <h1 style={{ fontSize: "2rem", fontWeight: "bold" , color:"white"}}>Leave A Message</h1>
            <form style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
              <div style={{ display: "flex", gap: "1rem" }}>
                <input type="text" placeholder="First Name" style={inputStyle} />
                <input type="text" placeholder="Last Name (optional)" style={inputStyle} />
              </div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <input type="email" placeholder="Email" style={inputStyle} />
                <input type="text" placeholder="Phone" style={inputStyle} />
              </div>
              <textarea placeholder="Message" rows="5" style={{ ...inputStyle, resize: "none" }} />
              <button type="submit" style={buttonStyle}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Input Style
const inputStyle = {
  flex: 1,
  padding: "0.75rem",
  borderRadius: "4px",
  border: "1px solid #ccc",
  backgroundColor: "transparent",
  color: "#000"
};

// Button Style
const buttonStyle = {
  padding: "0.75rem",
  backgroundColor: "#a38d79",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "bold"
};

// Icon Link Style
const iconLinkStyle = {
  color: "white",
  fontSize: "2rem",
  transition: "color 0.3s",
  textDecoration: "none"
};

export default Contact;
