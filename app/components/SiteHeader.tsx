import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import brandMark from "../images/B.png";

const links = [
  { label: "Church solutions", href: "/#diagnostic" },
  { label: "Our approach", href: "/#approach" },
  { label: "Biblios Bible", href: "/biblios-bible" },
  { label: "About", href: "/#about" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const follow = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#") && location.pathname === "/") {
      document.querySelector(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" to="/" aria-label="Biblios Technologies home">
          <span className="brand-mark"><img src={brandMark} alt="" /></span>
          <span className="wordmark"><strong>BIBLIOS</strong><small>TECHNOLOGIES</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} to={link.href} onClick={() => follow(link.href)}>{link.label}</Link>
          ))}
        </nav>
        <a className="button button-primary header-cta" href="https://zcal.co/gabbitaylor/free-consultation" target="_blank" rel="noreferrer">Book a conversation</a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link key={link.href} to={link.href} onClick={() => follow(link.href)}>{link.label}</Link>
          ))}
          <a className="button button-dark" href="https://zcal.co/gabbitaylor/free-consultation" target="_blank" rel="noreferrer">Book a conversation</a>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
