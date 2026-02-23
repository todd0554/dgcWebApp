// src/pages/EventGallery.jsx
import React from "react";
import { Container } from "react-bootstrap";
import UploadEventImage from "../components/UploadEventImage";

function EventGallery() {
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
            Event Gallery
          </h1>
          <p style={{ fontSize: "18px", color: "#475569", marginBottom: 0 }}>
            Upload and browse photos from club events and activities.
          </p>
        </Container>
      </div>

      <div style={{ padding: "40px 0 60px" }}>
        <Container>
          <UploadEventImage />
        </Container>
      </div>
    </div>
  );
}

export default EventGallery;