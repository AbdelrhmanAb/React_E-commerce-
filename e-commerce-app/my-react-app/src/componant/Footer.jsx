import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo */}
        <div className="logo">
          <span className="site-name">New Fashion</span>
          <span className="site-desc">The Best clothes </span>
        </div>

        {/* Links */}
        <ul className="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Copyright */}
        <p className="copyright">
          © 2025 MyWebsite. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
