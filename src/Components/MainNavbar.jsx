import React, { Component } from "react";

export default class MainNavbar extends Component {
  render() {
    return (
      <>
        <header >
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <div className="logo">
                <a className="navbar-brand d-flex align-items-center" href="/">
                  <img
                    src="android-chrome-192x192.png"
                    alt="Logo"
                    width="90"
                    height="90"
                    class="d-inline-block align-text-top"
                  />
                  <div>
                    <h5>Fresh Fruit</h5>
                    <h6>Fruit Shop</h6>
                  </div>
                </a>
              </div>
             <div className="catigori">
             <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Catigori</option>
              </select>
             </div>
              <div className="search">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
              <div className="d-flex manu">
                <div>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Your Location</option>
                </select>
                </div>
                <div>
                  <button type="button" className="btn position-relative">
                    <img src="Wish.png" alt="" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      9+
                      <span className="visually-hidden">unread messages</span>
                    </span>
                    <span>Wishlist</span>
                  </button>
                </div>
                <div>
                  <button type="button" className="btn position-relative">
                    <img src="Cart.png" alt="" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      9+
                      <span className="visually-hidden">unread messages</span>
                    </span>
                    <span>Cart</span>
                  </button>
                </div>
                <div>
                  <button type="button" className="btn position-relative">
                    <img src="Accout.png" alt="" />
                    <span>Accout</span>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
