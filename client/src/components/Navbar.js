import React from 'react';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    const userState = localStorage.getItem("user") ? true : false;
    return ( 
      userState
        ?
      <header className="header">
        <div className="navbar-area fixed-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="/">
                    <h2 style={{ color: 'white'}}>EduHome <i className="fa fa-laptop" aria-hidden="true"></i></h2>
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>

                  <div 
                    className="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <div className="ms-auto">
                      <ul id="nav" className="navbar-nav ms-auto">
                        <li className="nav-item">
                          <a className="page-scroll" href="/">Add Post</a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="/discuss">Discuss</a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#">Welcome {user.Username}!</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="header-btn">
                    <button id="login-btn" className="main-btn btn-hover"
                    onClick={() => {
                        localStorage.clear()
                        navigate('/')
                    }}>
                      LogOut
                    </button>
                  </div>
                  {/* <!-- navbar collapse --> */}
                </nav>
                {/* <!-- navbar --> */}
              </div>
            </div>
            {/* <!-- row --> */}
          </div>
          {/* <!-- container --> */}
        </div>
        {/* <!-- navbar area --> */}
      </header>
      //  <!-- ========================= header end ========================= --> 

        : 
      <header className="header">
        <div className="navbar-area fixed-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="/">
                    <h2 style={{ color: 'white'}}>EduHome <i className="fa fa-laptop" aria-hidden="true"></i></h2>
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <div className="ms-auto">
                      <ul id="nav" className="navbar-nav ms-auto">
                        <li className="nav-item">
                          <a className="page-scroll active" href="/#home">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="/#features">Features</a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="/#service">Services</a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="/#footer">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="header-btn">
                    <button id="login-btn" className="main-btn btn-hover">
                      <a href="/login" style={{ color: 'inherit', textDecoration:'none' }}>LogIn</a>
                    </button>
                  </div>
                  {/* <!-- navbar collapse --> */}
                </nav>
                {/* <!-- navbar --> */}
              </div>
            </div>
            {/* <!-- row --> */}
          </div>
          {/* <!-- container --> */}
        </div>
        {/* <!-- navbar area --> */}
      </header>
      //  <!-- ========================= header end ========================= --> 
    );
}
 
export default Navbar;