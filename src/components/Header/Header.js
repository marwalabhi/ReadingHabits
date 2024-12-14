import { Link, NavLink } from "react-router-dom";
import "../Header/Header.scss";

const Header = () => {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <Link className="text-decoration-none c-user-sel-non">
          <span className="c-read-logo-pa display-6 fw-normal">Reading</span>
          <span className="c-habit-logo-pa">
            Habits<span className="c-excla-logo">!</span>
          </span>
        </Link>
      </div>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 c-font-lin-fmly">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "nav-link px-2 link-secondary"
                : "nav-link px-2 link-body-emphasis"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/library"}
            className={({ isActive }) =>
              isActive
                ? "nav-link px-2 link-secondary"
                : "nav-link px-2 link-body-emphasis"
            }
          >
            Library
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/booklist"}
            className={({ isActive }) =>
              isActive
                ? "nav-link px-2 link-secondary"
                : "nav-link px-2 link-body-emphasis"
            }
          >
            Book List
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/quotes"}
            className={({ isActive }) =>
              isActive
                ? "nav-link px-2 link-secondary"
                : "nav-link px-2 link-body-emphasis"
            }
          >
            Quotes
          </NavLink>
        </li>
      </ul>
      <div className="col-md-3 text-end c-font-lin-fmly">
        <Link to={"/login"}>
          <button type="button" className="btn btn-outline-primary me-2">
            Login
          </button>
        </Link>
        <Link to={"/signup"}>
          <button type="button" className="btn btn-primary">
            Sign-up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
