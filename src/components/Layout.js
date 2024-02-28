import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function Layout() {
  useEffect(() => {
    // Initialize Bootstrap components (if necessary)
  }, []);

  return (
    <body style={{ backgroundColor: 'linear-gradient(45deg, #FFA07A, #87CEFA)' }}>
      <div className="body">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <button className="navbar-brand" href="#">
            JOBSEEKER
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li>
                <button className="nav-link btn btn-primary">
                  <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                    HOME
                  </Link>
                </button>
              </li>
              <li className="nav-item active">
                <button className="nav-link btn btn-primary">
                  <Link to="/Findjob" style={{ color: 'white', textDecoration: 'none' }}>
                    FIND JOB
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-primary">
                  <Link to="/Postjob" style={{ color: 'white', textDecoration: 'none' }}>
                    POST JOB
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-primary">
                  <Link to="/About" style={{ color: 'white', textDecoration: 'none' }}>
                   ABOUT
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <Outlet />
      </div>
    </body>
  );
}