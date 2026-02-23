import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GoogleMapSite from "../components/GoogleMapSite";

function About() {
  const supporters = [
    { name: "Aumann's", link: "https://www.aumanns.com.au/", logo: "/image/logo/aumanns.png" },
    { name: "Bunnings Doncaster", link: "https://www.bunnings.com.au/stores/vic/doncaster", logo: "/image/logo/BunningsDoncaster.png" },
    { name: "Beasleys Nursery", link: "https://www.beasleysnursery.com.au/", logo: "/image/logo/beasleys.png" },
    { name: "Bulleen Art & Garden", link: "https://baag.com.au", logo: "/image/logo/baag.png" },
    { name: "Manningham Gourmet", link: "https://www.manninghamgourmet.com.au", logo: "/image/logo/manningham-gourmet.png" },
    { name: "Ryset Australia", link: "https://ryset.com", logo: "/image/logo/ryset.png" },
    { name: "Donvale Flower Gallery", link: "https://donvaleflowergallery.com.au", logo: "/image/logo/donvale.png" },
    { name: "BottleMart Tunstall", link: "https://bottlemart.com.au", logo: "/image/logo/bottlemart.png" },
    { name: "The Greenery", link: "https://thegreenery.com.au", logo: "/image/logo/greenery.png" },
    { name: "Grill'd Tunstall Square", link: "https://grilld.com.au/restaurants/victoria/tunstall-square", logo: "/image/logo/grilld.png" },
    { name: "Captain Gummy Fish", link: "https://www.ubereats.com/au/store/captain-gummys-fish", logo: "/image/logo/gummys.png" },
    { name: "Amcal North Balwyn", link: "https://www.amcal.com.au/store-locator/amcal-pharmacy-north-balwyn", logo: "/image/logo/amcal.png" },
    { name: "Nicole Werner", link: "https://www.nicolewerner.com.au/", logo: "/image/logo/nicole.png" }
  ];

  return (
    <div style={{ background: "#ffffff" }}>

      {/* Hero Section */}
      <div
        style={{
          padding: "60px 0 40px",
          background:
            "linear-gradient(180deg, rgba(20,83,45,0.06) 0%, rgba(255,255,255,1) 70%)",
        }}
      >
        <Container>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <h1
              style={{
                fontSize: "42px",
                fontWeight: 800,
                letterSpacing: "-0.5px",
                marginBottom: "10px",
              }}
            >
              About Doncaster Garden Club
            </h1>

            <p style={{ fontSize: "18px", color: "#475569" }}>
              A friendly gardening community since 1976
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "30px",
            }}
          >
            <img
              src="image/DGC_logo2.png"
              alt="Doncaster Garden Club logo"
              style={{
                maxWidth: "320px",
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>

          <Row className="justify-content-center">
            <Col lg={9} style={{ fontSize: "18px", lineHeight: 1.8, color: "#334155" }}>
              <p>
                Doncaster Garden Club began in 1976 with a small group meeting
                in a home for an inaugural meeting to help would-be gardeners
                with knowledge for growing plants. Our senior members in their
                80s and 90s have a huge reservoir of knowledge to share.
              </p>

              <p>
                Today, almost 50 members meet monthly (except January) to hear
                expert speakers share knowledge on sustainable gardening topics
                including healthy soils, fertilisers and soil conditioners,
                grey water use, and growing flowers, fruit and vegetables.
              </p>

              <p>
                Meetings are held on the 2nd Wednesday of each month from
                February to December at 7:30 pm at the Doncaster RSL Hall,
                Corner Doncaster Rd and Leeds St, Doncaster East.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Map Section */}
      <div style={{ padding: "40px 0" }}>
        <Container>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: 800,
              marginBottom: "20px",
            }}
          >
            Location
          </h2>

          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(2,6,23,0.08)",
            }}
          >
            <GoogleMapSite />
          </div>
        </Container>
      </div>

      {/* Supporters Section */}
      <div style={{ padding: "50px 0", background: "#f8fafc" }}>
        <Container>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 800,
              marginBottom: "10px",
            }}
          >
            Supporters & Affiliations
          </h2>

          <p style={{ color: "#64748b", marginBottom: "30px" }}>
            We appreciate the support of our local partners and community organisations.
          </p>

          <Row className="g-4">
            {supporters.map((item, index) => (
              <Col
                key={index}
                xs={12}
                md={6}
                lg={4}
                className="d-flex align-items-center justify-content-center"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    minHeight: "140px",
                    background: "#ffffff",
                    borderRadius: "14px",
                    border: "1px solid rgba(2,6,23,0.06)",
                    padding: "20px",
                    transition: "0.3s",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "90px",
                      objectFit: "contain",
                    }}
                  />
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Rules Section */}
      <div style={{ padding: "60px 0" }}>
        <Container>
          <h2 style={{ fontSize: "30px", fontWeight: 800, marginBottom: "20px" }}>
            Club Rules
          </h2>

          <details
            style={{
              background: "#ffffff",
              borderRadius: "14px",
              border: "1px solid rgba(2,6,23,0.08)",
              padding: "20px",
            }}
          >
            <summary style={{ fontWeight: 700, cursor: "pointer" }}>
              Doncaster Garden Club Inc RULES (Dec 2024)
            </summary>

            <div style={{ marginTop: "20px" }}>
              <iframe
                title="2024 Rules"
                src="/documentation/Doncaster Garden Club Inc RULES (Dec 2024).pdf"
                width="100%"
                height="800px"
              ></iframe>
            </div>
          </details>
        </Container>
      </div>
    </div>
  );
}

export default About;