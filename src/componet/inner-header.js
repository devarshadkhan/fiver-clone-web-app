
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const InnerHeader = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 30);
    });
  }, []);
  return (
    <header
      className={scroll ? "header main-header header_inner scrolled" : "header main-header header_inner"}
    >
      <div className="container">
        <div className="logo">
          {" "}
          <Link to="/">
            <img
              src="/images/logo_dark.png"
              width={200}
              alt="logo"
              className="logo_w"
            />
            <img
              src="/images/logo_dark.png"
              width={180}
              alt="logo"
              className="logo_dark"
            />
          </Link>{" "}
        </div>
        <div className="menu">
          <ul>
            <li className="dropdown_menu">
              {" "}
              <a href="" className="arrow">
                Find Talent
              </a>
              <div className="mega_menu">
                <div className="container">
                  <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        data-bs-toggle="tab"
                        href="#home"
                      >
                        <strong>Post a job and hire a pro</strong>
                        <span>Talent Marketplace</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#menu1">
                        <strong>Browse and buy projects</strong>
                        <span>Project Catalog</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-bs-toggle="tab" href="#menu2">
                        <strong>Get advice from an industry expert</strong>
                        <span>Consultations</span>
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div class="tab-pane  active" id="home">
                      <div className="row">
                        <div className="col-8">
                          <h4>
                            Talent Marketplace<sup>TM</sup>
                          </h4>
                          <p>
                            Learn about working with talent or explore your
                            specific hiring needs.
                          </p>

                          <ul>
                            <li>
                              <a href="">Development &amp; IT</a>
                            </li>
                            <li>
                              <a href="">Design &amp; Creative</a>
                            </li>
                            <li>
                              <a href="">Sales &amp; Marketing</a>
                            </li>
                            <li>
                              <a href="/">Writing &amp; Translation</a>
                            </li>
                            <li>
                              <a href="">Admin &amp; Customer Support</a>
                            </li>
                            <li>
                              <a href="">Finance &amp; Accounting</a>
                            </li>
                            <li>
                              <a href="">HR &amp; Training</a>
                            </li>
                            <li>
                              <a href="">Legal</a>
                            </li>
                            <li>
                              <a href="">Engineering &amp; Architecture</a>
                            </li>
                            <li>
                              <a href="">Hire freelancers</a>
                            </li>
                          </ul>

                          <div className="talent_hire">
                            <a href="">
                              {" "}
                              Hire on Talent Marketplace{" "}
                              <img src="/images/lnr-arrow-right.svg" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <img
                            src="/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane  fade" id="menu1">
                      <div className="row">
                        <div className="col-8">
                          <h4>
                            Project Catalog<sup>TM</sup>
                          </h4>
                          <p>
                            Browse and buy projects that have a clear scope and
                            price.
                          </p>

                          <ul>
                            <li>
                              <a href="">Logo Design</a>
                            </li>
                            <li>
                              <a href="">Articles & Blog Posts</a>
                            </li>
                            <li>
                              <a href="">WordPress</a>
                            </li>
                            <li>
                              <a href="/">Social Media Marketing</a>
                            </li>
                            <li>
                              <a href="">Video Editing</a>
                            </li>
                            <li>
                              <a href="">SEO</a>
                            </li>
                          </ul>
                          <div className="talent_hire">
                            <a href="">
                              {" "}
                              Browse Project Catalog{" "}
                              <img src="/images/lnr-arrow-right.svg" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <img
                            src="/images/eliott-reyna-8ExW1R3DiYM-unsplash.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane  fade" id="menu2">
                      <div className="row">
                        <div className="col-8">
                          <h4>Consultations</h4>
                          <p>
                            Explore what is possible with an industry expert.
                            See their availability and book a time that works
                            for you.
                          </p>

                          <ul>
                            <li>
                              <a href="">Web Programming</a>
                            </li>
                            <li>
                              <a href="">AI & Machine Learning</a>
                            </li>
                            <li>
                              <a href="">Marketing Strategy</a>
                            </li>
                            <li>
                              <a href="/">Social Media Marketing</a>
                            </li>
                            <li>
                              <a href="">Website Builders & CMS</a>
                            </li>
                          </ul>
                          <div className="talent_hire">
                            <a href="">
                              {" "}
                              Explore all categories{" "}
                              <img src="/images/lnr-arrow-right.svg" />
                            </a>
                          </div>
                        </div>
                        <div className="col-4">
                          <img
                            src="/images/patrik-velich-RtVGS4vGkgM-unsplash.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
           
            <li className="dropdown_menu dropdown_menu_small">
              {" "}
              <Link to="" className="arrow">Why Skillzena</Link>{" "}
              <div className="mega_menu_small">
                     <ul>
                      <li><Link to="/why-skillzena/how-to-hire">How to hire</Link></li>
                      <li><Link to="/why-skillzena/how-to-find-work">How to find work</Link></li>
                     </ul>
                </div>
            </li>
            <li>
              {" "}
              <Link to="/services">Services</Link>{" "}
            </li>
            <li>
              {" "}
              <a href="">Categories</a>{" "}
            </li>

            <li>
              {" "}
              <a href="">Login</a>{" "}
            </li>
            <li>
              {" "}
              <a href="">Sign Up</a>{" "}
            </li>
            <li>
              {" "}
              <a href="" className="post_job">
                {" "}
                Post a Job <img src="/images/bag-shopping-solid.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default InnerHeader
