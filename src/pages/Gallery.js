// src/pages/Gallery.jsx
import React from "react";
import { Container } from "react-bootstrap";
import UploadImage from "../components/UploadImage";

function Gallery() {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <div
        style={{
          padding: "60px 0 40px",
          background:
            "linear-gradient(180deg, rgba(20,83,45,0.06) 0%, rgba(255,255,255,1) 70%)",
        }}
      >
        <Container>
          <h1 style={{ fontSize: "42px", fontWeight: 800, marginBottom: "10px" }}>
            Plant Gallery
          </h1>
          <p style={{ fontSize: "18px", color: "#475569", marginBottom: 0 }}>
            Upload and browse garden photos from our community.
          </p>
        </Container>
      </div>

      <div style={{ padding: "40px 0 60px" }}>
        <Container>
          <UploadImage />
        </Container>
      </div>
    </div>
  );
}

export default Gallery;