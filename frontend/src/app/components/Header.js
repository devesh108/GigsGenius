import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg shadow px-3">
      <div className="container-fluid">
        <Link href="/" className="d-flex align-items-center text-decoration-none">
          <Image
            src="/Interlocking Golden G Logo.png"
            alt="Gigs Genius Logo"
            width={50}
            height={50}
          />
          <span className="navbar-brand ms-3">GigsGenius</span>
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            {/* Product Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center gap-1"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product <FaChevronDown size={10} />
              </a>
              <ul className="dropdown-menu">
                <li><Link href="/gigs/web-development" className="dropdown-item">Web Development</Link></li>
                <li><Link href="/gigs/data-analytics" className="dropdown-item">Data Science</Link></li>
                <li><Link href="/gigs/app-development" className="dropdown-item">App Development</Link></li>
                <li><Link href="/gigs/it-support" className="dropdown-item">IT Support & Consultancy</Link></li>
              </ul>
            </li>

            {/* Projects */}
            <li className="nav-item">
              <Link href="/projects" className="nav-link">Project</Link>
            </li>

            {/* Pricing */}
            <li className="nav-item">
              <Link href="/pricing" className="nav-link">Pricing</Link>
            </li>

            {/* Profile */}
            <li className="nav-item">
              <Link href="/profile" className="nav-link fw-bold">Profile</Link>
            </li>

            {/* Sign Up */}
            <li className="nav-item">
              <Link href="/signup" className="btn btn-light btn-sm ms-2 rounded-pill">
                Sign Up
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
