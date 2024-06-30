import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <header>
          <nav className="navbar bg-body-tertiary navbar-expand-lg">
            <div className="container-fluid">
              <button className="btn btn-light">
                <ul className="nav nav-link active ">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-secondary-emphasis"
                      data-bs-toggle="dropdown"
                      href="/"
                      role="button"
                      aria-expanded="false"
                    >
                      All Catigroies
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Separated link
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </button>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="offcanvas offcanvas-end text-black" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="/">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="/">
                      Shop
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="/">
                      vedors
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="/">
                      Mego menu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="/">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="/">
                      Poges
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="/">
                      Contect
                    </a>
                  </li>
                </ul>
              </div>
              <div className="d-flex navbar-expand-lg">
                <img src="Custmore care.png" alt="" />
                <span>
                  <h5 className="mx-4 text-success">1900 - 888</h5>
                  <h6>24/7 Support center</h6>
                </span>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
