import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import './index.scss'

const Sidebar = () => (
  <div className="nav-bar">
    <Link
      style={{
        textDecoration: 'none',
      }}
      className="logo"
      to="/"
    >
      <img src={LogoS} alt="Logo" />
      <h2>Saad Mushtaq</h2>
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <i className="fa-solid fa-house" />
      </NavLink>
      <p style={{ color: '#ffd700' }}>Home</p>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <i className="fa-solid fa-user" />
      </NavLink>
      <p style={{ color: '#ffd700' }}>About Me</p>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <i className="fa-solid fa-envelope" />
      </NavLink>
      <p style={{ color: '#ffd700' }}>Contact</p>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/saad-mushtaq007"
        >
          <i className="fa-brands fa-linkedin" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/SaaadMushtaq"
        >
          <i className="fa-brands fa-github" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
