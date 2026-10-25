import { Link } from "react-router-dom";
import brandMark from "../images/B.png";

const SiteFooter = () => (
  <footer className="site-footer">
    <div className="shell footer-grid">
      <div className="footer-brand">
        <Link className="brand brand-light" to="/">
          <span className="brand-mark"><img src={brandMark} alt="" /></span>
          <span className="wordmark"><strong>BIBLIOS</strong><small>TECHNOLOGIES</small></span>
        </Link>
        <p>Purposeful systems and technology for churches, disciples, and the work of the Gospel.</p>
      </div>
      <div>
        <p className="footer-label">Explore</p>
        <Link to="/#diagnostic">Church solutions</Link>
        <Link to="/biblios-bible">Biblios Bible</Link>
        <Link to="/#about">About Biblios</Link>
      </div>
      <div>
        <p className="footer-label">Start a conversation</p>
        <a href="mailto:hello@bibliostechnologies.com">hello@bibliostechnologies.com</a>
        <a href="https://zcal.co/gabbitaylor/free-consultation" target="_blank" rel="noreferrer">Schedule a consultation</a>
      </div>
    </div>
    <div className="shell footer-bottom">
      <span>© {new Date().getFullYear()} Biblios Technologies</span>
      <span>Built in service of the Church.</span>
    </div>
  </footer>
);

export default SiteFooter;
