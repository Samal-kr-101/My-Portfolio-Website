import { useEffect, useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (id) => {
    setActive(id);
    setOpen(false);
  };

  return (
    <nav className="nav">
      {/* Logo */}
      <a href="#home" className="logo">
        Samal.dev
      </a>

      {/* Desktop Navigation */}
      <div className="links desktop">
        <a
          className={active === "home" ? "active" : ""}
          href="#home"
        >
          Home
        </a>

        <a
          className={active === "about" ? "active" : ""}
          href="#about"
        >
          About
        </a>

        <a
          className={active === "skills" ? "active" : ""}
          href="#skills"
        >
          Skills
        </a>

        <a
          className={active === "projects" ? "active" : ""}
          href="#projects"
        >
          Projects
        </a>

        <a
          className={active === "contact" ? "active" : ""}
          href="#contact"
        >
          Contact
        </a>
      </div>

      {/* Resume Button */}
      <a
        href="/Samal-Kumar-Resume.pdf"
        download
        className="btn desktop"
      >
        Resume
      </a>

      {/* Mobile Hamburger */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <a
          href="#home"
          className={active === "home" ? "active" : ""}
          onClick={() => handleClick("home")}
        >
          Home
        </a>

        <a
          href="#about"
          className={active === "about" ? "active" : ""}
          onClick={() => handleClick("about")}
        >
          About
        </a>

        <a
          href="#skills"
          className={active === "skills" ? "active" : ""}
          onClick={() => handleClick("skills")}
        >
          Skills
        </a>

        <a
          href="#projects"
          className={active === "projects" ? "active" : ""}
          onClick={() => handleClick("projects")}
        >
          Projects
        </a>

        <a
          href="#contact"
          className={active === "contact" ? "active" : ""}
          onClick={() => handleClick("contact")}
        >
          Contact
        </a>

        <button
  className="btn mobile-btn"
  onClick={() => {
    window.open("/Samal-Kumar-Resume.pdf");
  }}
>
  Resume
</button>
      </div>
    </nav>
  );
}