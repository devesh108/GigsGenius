import Link from "next/link";

export default function Footer() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s",
  };

  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #1e3c72, #2a5298, #764ba2)",
        color: "white",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* --- Company Section --- */}
        <div style={{ minWidth: "200px" }}>
          <h3 style={{ color: "#ffebcd", marginBottom: "15px" }}>Company</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              <Link href="/about" className="nav-link fw-medium" style={linkStyle}>
                About Us
              </Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link href="/contact" className="nav-link fw-medium" style={linkStyle}>
                Contact Info
              </Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link href="/careers" className="nav-link fw-medium" style={linkStyle}>
                Career
              </Link>
            </li>
          </ul>
        </div>

        {/* --- Legal Section --- */}
        <div style={{ minWidth: "200px" }}>
          <h3 style={{ color: "#ffebcd", marginBottom: "15px" }}>Legal</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              <Link href="/terms" className="nav-link fw-medium" style={linkStyle}>
                Terms of Service
              </Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link href="/privacy" className="nav-link fw-medium" style={linkStyle}>
                Privacy Policy
              </Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link href="/escrow-policy" className="nav-link fw-medium" style={linkStyle}>
                Escrow Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* --- Support Section --- */}
        <div style={{ minWidth: "250px" }}>
          <h3 style={{ color: "#ffebcd", marginBottom: "15px" }}>Support</h3>
          <p style={{ marginBottom: "5px" }}>
            For any queries, please mail us at:
          </p>
          <Link
            href="mailto:support@giggsgenius.com"
            style={{
              color: "#ffd580",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "color 0.3s",
            }}
          >
            support@giggsgenius.com
          </Link>
        </div>
      </div>

      {/* --- Footer Bottom --- */}
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          paddingTop: "15px",
          fontSize: "0.9rem",
        }}
      >
        © {new Date().getFullYear()} GigsGenius™. All rights reserved.
      </div>

      {/* --- Hover Effect CSS --- */}
      <style jsx>{`
        a:hover {
          color: #ffd580 !important;
        }

        @media (max-width: 768px) {
          footer div {
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
