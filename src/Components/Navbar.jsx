import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="bg-dark text-secondary px-4 py-1 text-center">
          <div className="py-3">
            <h1 className="display-5 fw-bold text-white">VogueVista</h1>
            <div className="col-lg-6 mx-auto">
              <p className="fs-5 mb-4">
                Make bold statements and embrace modern classics with our
                distinctive pieces.
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to="/">
                  <button
                    type="button"
                    className="btn btn-outline-info btn-lg px-2 me-sm-3 fw-bold"
                  >
                    Home
                  </button>
                </Link>

                <Link to="/products">
                  <button
                    type="button"
                    className="btn btn-outline-info btn-lg px-2 me-sm-3 fw-bold"
                  >
                    Product
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;