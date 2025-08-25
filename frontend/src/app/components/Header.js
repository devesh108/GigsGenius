import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg shadow px-3">
      <div className="container-fluid">
        <Image
          src="/Interlocking Golden G Logo.png"
          alt="Gigs Genius Logo"
          width={50}
          height={50}
        />
        <a className="navbar-brand ms-3" href="/">GigsGenius</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            {/* Product Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle d-flex align-items-center gap-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Product <FaChevronDown size={10} />
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/gigs/web-development">Web Development</a></li>
                <li><a className="dropdown-item" href="/gigs/data-analytics">Data Science</a></li>
                <li><a className="dropdown-item" href="/gigs/app-development">App Development</a></li>
                <li><a className="dropdown-item" href="/gigs/it-support">IT Support & Consultancy</a></li>
              </ul>
            </li>

            {/* Projects */}
            <li className="nav-item">
              <a className="nav-link" href="/projects">Project</a>
            </li>

            {/* Pricing */}
            <li className="nav-item">
              <a className="nav-link" href="/pricing">Pricing</a>
            </li>

            {/* Profile */}
            <li className="nav-item">
              <a className="nav-link fw-bold" href="/profile">Profile</a>
            </li>

            {/* Sign Up */}
            <li className="nav-item">
              <a className="btn btn-light btn-sm ms-2 rounded-pill" href="/signup">Sign Up</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
