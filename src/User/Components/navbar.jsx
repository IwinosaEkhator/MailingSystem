import React, { useContext } from "react";

import { AppContext } from "../../Context/AppContext";

import "../User.css";
import nnpcgroup from "../../Components/Assets/nnpc-logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user , token, setUser, setToken } = useContext(AppContext);
  const navigate = useNavigate()

  async function handleLogout(e) {
    e.preventDefault()

    const res = await fetch('/api/logout', {
      method: 'post',
      headers: {
        Authorization: `Bearer ${token}`
      },
    });

    const data = await res.json()
    console.log(data);

    if (res.ok) {
      setUser(null)
      setToken(null)
      localStorage.removeItem("token");
      navigate('/login')
    }
  }

  return (
    <>
      <header
        className="pb-3 mb-4 border-bottom dashboard-navbar d-flex justify-content-between"
        style={{
          boxShadow:
            " rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
          padding: "1% 10% 5%",
        }}
      >
        <span
          className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"
        >
          {/* <span className="fs-4 welcome">Welcome Back, Admin👏</span> */}
          <img src={nnpcgroup} alt="" style={{ width: "100px" }} />
        </span>
        <div className="d-flex align-items-center">
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/user" className="nav-link px-4 fs-5 link-secondary">
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/user/new-request"
                className="nav-link px-4 fs-5 link-secondary"
              >
                New Request
              </Link>
            </li>
          </ul>

          <div className="dropdown text-end">
            <a
              href="#"
              className="d-flex justify-content-center align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="42"
                height="42"
                className="rounded-circle me-1"
              />
            </a>
            <ul className="dropdown-menu text-small">
              <li>
                <a className="dropdown-item" href="#">
                  {user ? user.username : "Guest"}
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <form onSubmit={handleLogout}>
                  <button className="dropdown-item" href="#">
                    Logout
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
