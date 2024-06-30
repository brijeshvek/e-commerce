import React, { Component } from "react";

export default class FruitManu extends Component {
  render() {
    return (
      <>
        <div className="container my-4">
          <ul class="nav row row-cols-md-6">
            <li class="nav-item">
              <h2 className="text-dark">Featured Categories</h2>
            </li>
            <li class="nav-item" >
              <a class="nav-link text-dark" href="#">
                Cake & Milk
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">
                Coffes & Teas
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">
                Pet Foods Vegetables
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
