import React, { useState, useEffect } from "react";

export const AnimatedInput = ({
    placeholder: passedPlaceholder = "",
    ...passedProps
  }) => {
    const [placeholder, setPlaceholder] = useState(passedPlaceholder.slice(0, 0));
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
  
    useEffect(() => {
      const intr = setInterval(() => {
        setPlaceholder(passedPlaceholder.slice(0, placeholderIndex));
        if (placeholderIndex + 1 > passedPlaceholder.length) {
          setPlaceholderIndex(0);
        } else {
          setPlaceholderIndex(placeholderIndex + 1);
        }
      }, 150);
      return () => {
        clearInterval(intr);
      };
    });
  
    return <input {...passedProps} placeholder={placeholder} />;
  };
const Home = () => {
    
    return (
<>
<section className="home_sec1">
<video
  id="PlayVidSec"
  width="100%"
  data-wf-ignore="true"
  data-object-fit="cover"
  playsinline="playsinline"
  autoplay="autoplay"
  muted="muted"
  loop="loop"
>
  <source
    src="/images/video.mp4"
    type="video/mp4"
    autoplay=""
    data-wf-ignore="true"
  />
</video>
<div className="home_sec1_main">
  <div className="container">
    <div className="home_sec1_colm">
      <h1>
        Find & Hire
        <span> Expert Freelancers</span>
      </h1>
      <p>
        Work with the best freelance talent from around the world on our
        secure, flexible and cost-effective platform.
      </p>
      <div className="input_banner">
        <i>
          <img src="/images/search-interface-symbol.png" alt="" />
        </i>
        <AnimatedInput
          type="text"
          placeholder="What skill are you looking for"
          id="typer"
          name=""
          value=""
        />

        <a href="">Search</a>
      </div>
      <h6>Popular Searches</h6>
      <ul>
        <li>
          <a href="">Designer</a>
        </li>
        <li>
          <a href="">Developer</a>
        </li>
        <li>
          <a href="">Web</a>
        </li>
        <li>
          <a href="">IOS</a>
        </li>
        <li>
          <a href="">PHP</a>
        </li>
        <li>
          <a href="">Senior</a>
        </li>
      </ul>
    </div>
  </div>
</div>
</section>
<section className="home_sec2">
<div className="container">
  {" "}
  <h6>
    Trusted by the world’s best
    <span className="sm-title"> </span>{" "}
  </h6>
  <ul>
    <li>
      <img src="/images/Skillzena_landing-Page-01_03.png" alt="" />
    </li>
    <li>
      <img src="/images/Skillzena_landing-Page-01_05.png" alt="" />
    </li>
    <li>
      <img src="/images/Skillzena_landing-Page-01_07.png" alt="" />
    </li>
    <li>
      <img src="/images/Skillzena_landing-Page-01_09.png" alt="" />
    </li>
    <li>
      <img src="/images/Skillzena_landing-Page-01_12.png" alt="" />
    </li>
    <li>
      <img src="/images/Skillzena_landing-Page-01_14.png" alt="" />
    </li>
  </ul>
</div>
</section>
<section className="home_sec3">
<div className="container">
  <h2>Browse talent by category </h2>
  <h6>
    Get some Inspirations from 1800+ skills{" "}
    <span className="sm-title"> </span>
  </h6>
  <div className="row">
    <div className="col-12 col-md-3">
      <div className="home_sec3_main">

        <div className="icon_sec3">
          {" "}
          <img src="/images/skillzena_uiux.png" alt="" />
        </div>
        <div class="number_colm"><span>8</span> Services</div>
        <h3>Ui/UX</h3>
        <p>Software Engineer, Web / Mobile Developer & More </p>
      </div>
    </div>
    <div className="col-12 col-md-3">
      <div className="home_sec3_main">
        <div className="icon_sec3">
          {" "}
          <img src="/images/branding_icon.png" alt="" />
        </div>
        <div class="number_colm"><span>8</span> Services</div>
        <h3>Branding</h3>
        <p>Software Engineer, Web / Mobile Developer & More </p>
      </div>
    </div>
    <div className="col-12 col-md-3">
      <div className="home_sec3_main">
        <div className="icon_sec3">
          {" "}
          <img src="/images/web_development.png" alt="" />
        </div>
        <div class="number_colm"><span>8</span> Services</div>
        <h3>Web Development</h3>
        <p>Software Engineer, Web / Mobile Developer & More </p>
      </div>
    </div>
    <div className="col-12 col-md-3">
      <div className="home_sec3_main">
        <div className="icon_sec3">
          {" "}
          <img src="/images/app_development_icon.png" alt="" />
        </div>
        <div class="number_colm"><span>8</span> Services</div>
        <h3>App Development</h3>
        <p>Software Engineer, Web / Mobile Developer & More </p>
      </div>
    </div>
    <div className="col-12 col-md-3">
      <div className="home_sec3_main">
        <div className="icon_sec3">
          {" "}
          <img src="/images/content_icon.png" alt="" />
        </div>
        <div class="number_colm"><span>8</span> Services</div>
        <h3>Content</h3>
        <p>Software Engineer, Web / Mobile Developer & More </p>
      </div>
    </div>
    <div className="col-12 col-md-3">
      <div className="home_sec3_main">
        <div className="icon_sec3">
          {" "}
          <img src="/images/illustration_icon.png" alt="" />
        </div>
        <div class="number_colm"><span>8</span> Services</div>
        <h3>Illustration</h3>
        <p>Software Engineer, Web / Mobile Developer & More </p>
      </div>
    </div>
    <div className="col-12 col-md-3">
      <div className="home_sec3_main">
        <div className="icon_sec3">
          {" "}
          <img src="/images/illustration_icon.png" alt="" />
        </div>
        <div class="number_colm"><span>8</span> Services</div>
        <h3> Finance & Accounting </h3>
        <p>Software Engineer, Web / Mobile Developer & More </p>
      </div>
    </div>
    <div className="col-12 col-md-3">
      <div className="home_sec3_main">
        <div className="icon_sec3">
          {" "}
          <img src="/images/skillzena_uiux.png" alt="" />
        </div>
        <div class="number_colm"><span>8</span> Services</div>
        <h3>Digital Marketing</h3>
        <p>Software Engineer, Web / Mobile Developer & More </p>
      </div>
    </div>
  </div>
</div>
</section>
<section className="home_sec4">
<div className="row">
  <div className="col-12 col-md-6">
    <img
      src="/images/cowomen-cKQkMFzXHAI-unsplash.jpg"
      className="home_sec4_img"
      alt=""
    />
  </div>
  <div className="col-12 col-md-6">
    <div className="col_home_sec4">
      <h2>Find talent your way</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt ut laoreet dolore magna
        aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
        nostrud exerci tation ullamLorem ipsum dolor sit amet,
        consectetuer adipiscing elit, sed diam nonummy.
      </p>
      <a href="" className="btn_arrow">
        {" "}
        All Category <img src="/images/lnr-arrow-right.svg" />
      </a>
    </div>
  </div>
</div>
</section>
<section className="home_sec5">
<div className="container">
  <h2>Popular Developers</h2>
  <h6>
    Most viewed and all-time top-selling services{" "}
    <span className="sm-title"> </span>
  </h6>
  <div className="row">
    <div className="col-12 col-md-3">
      <div className="home_sec5_main">
        <div className="home_sec5_img">
          <img src="/images/service11-600x450.jpg" alt="" />
          <div className="home_sec5_heart">
            <img src="/images/lnr-heart.svg" alt="" />{" "}
          </div>
        </div>
        <div className="home_sec5_content">
          <abbr>Design & Creative</abbr>
          <h3>
            Developers drop the framework folder into a new parent
          </h3>
          <div className="star_icon"><i>&#9733; </i> {" "}
            <b>4.5</b> (2 Reviews)
          </div>
          <div className="bottom_icon">
            <div className="bottom_icon_left">
              <span>
                {" "}
                <img src="/images/5-150x150.jpg" alt="" />
              </span>
              <div class="text">John Powell </div>{" "}
            </div>
            <div className="bottom_icon_right">
              {" "}
              <h5>
                Starting at: <strong>$128</strong>
              </h5>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-3">
      <div className="home_sec5_main">
        <div className="home_sec5_img">
          <img
            src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service8-495x370.jpg"
            alt=""
          />
          <div className="home_sec5_heart">
            <img src="/images/lnr-heart.svg" alt="" />{" "}
          </div>
        </div>
        <div className="home_sec5_content">
          <abbr>Design & Creative</abbr>
          <h3>
            Developers drop the framework folder into a new parent
          </h3>
          <div className="star_icon"><i>&#9733; </i> {" "}
            <b>4.5</b> (2 Reviews)
          </div>
          <div className="bottom_icon">
            <div className="bottom_icon_left">
              <span>
                {" "}
                <img src="/images/5-150x150.jpg" alt="" />
              </span>
              <div class="text">John Powell </div>{" "}
            </div>
            <div className="bottom_icon_right">
              {" "}
              <h5>
                Starting at: <strong>$128</strong>
              </h5>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-3">
      <div className="home_sec5_main">
        <div className="home_sec5_img">
          <img
            src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service14-495x370.jpg"
            alt=""
          />
          <div className="home_sec5_heart">
            <img src="/images/lnr-heart.svg" alt="" />{" "}
          </div>
        </div>
        <div className="home_sec5_content">
          <abbr>Design & Creative</abbr>
          <h3>
            Developers drop the framework folder into a new parent
          </h3>
          <div className="star_icon"><i>&#9733; </i> {" "}
            <b>4.5</b> (2 Reviews)
          </div>
          <div className="bottom_icon"> 
            <div className="bottom_icon_left">
              <span>
                {" "}
                <img src="/images/5-150x150.jpg" alt="" />
              </span>
              <div class="text">John Powell </div>{" "}
            </div>
            <div className="bottom_icon_right">
              {" "}
              <h5>
                Starting at: <strong>$128</strong>
              </h5>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-3">
      <div className="home_sec5_main">
        <div className="home_sec5_img">
          <img
            src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service2-495x370.jpg"
            alt=""
          />
          <div className="home_sec5_heart">
            <img src="/images/lnr-heart.svg" alt="" />{" "}
          </div>{" "}
        </div>
        <div className="home_sec5_content">
          <abbr>Design & Creative</abbr>
          <h3>
            Developers drop the framework folder into a new parent
          </h3>
          <div className="star_icon"><i>&#9733; </i> {" "}
            <b>4.5</b> (2 Reviews)
          </div>
          <div className="bottom_icon">
            <div className="bottom_icon_left">
              <span>
                {" "}
                <img src="/images/5-150x150.jpg" alt="" />
              </span>
              <div class="text">John Powell </div>{" "}
            </div>
            <div className="bottom_icon_right">
              {" "}
              <h5>
                Starting at: <strong>$128</strong>
              </h5>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-3">
      <div className="home_sec5_main">
        <div className="home_sec5_img">
          <img
            src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service15-495x370.jpg"
            alt=""
          />
          <div className="home_sec5_heart">
            <img src="/images/lnr-heart.svg" alt="" />{" "}
          </div>{" "}
        </div>
        <div className="home_sec5_content">
          <abbr>Design & Creative</abbr>
          <h3>
            Developers drop the framework folder into a new parent
          </h3>
          <div className="star_icon"><i>&#9733; </i> {" "}
            <b>4.5</b> (2 Reviews)
          </div>
          <div className="bottom_icon">
            <div className="bottom_icon_left">
              <span>
                {" "}
                <img src="/images/5-150x150.jpg" alt="" />
              </span>
              <div class="text">John Powell </div>{" "}
            </div>
            <div className="bottom_icon_right">
              {" "}
              <h5>
                Starting at: <strong>$128</strong>
              </h5>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-3">
      <div className="home_sec5_main">
        <div className="home_sec5_img">
          <img
            src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service9-495x370.jpg"
            alt=""
          />
          <div className="home_sec5_heart">
            <img src="/images/lnr-heart.svg" alt="" />{" "}
          </div>{" "}
        </div>
        <div className="home_sec5_content">
          <abbr>Design & Creative</abbr>
          <h3>
            Developers drop the framework folder into a new parent
          </h3>
          <div className="star_icon"><i>&#9733; </i> {" "}
            <b>4.5</b> (2 Reviews)
          </div>
          <div className="bottom_icon">
            <div className="bottom_icon_left">
              <span>
                {" "}
                <img src="/images/5-150x150.jpg" alt="" />
              </span>
              <div class="text">John Powell </div>{" "}
            </div>
            <div className="bottom_icon_right">
              {" "}
              <h5>
                Starting at: <strong>$128</strong>
              </h5>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-3">
      <div className="home_sec5_main">
        <div className="home_sec5_img">
          <img
            src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service16-495x370.jpg"
            alt=""
          />
          <div className="home_sec5_heart">
            <img src="/images/lnr-heart.svg" alt="" />{" "}
          </div>{" "}
        </div>
        <div className="home_sec5_content">
          <abbr>Design & Creative</abbr>
          <h3>
            Developers drop the framework folder into a new parent
          </h3>
          <div className="star_icon"><i>&#9733; </i> {" "}
            <b>4.5</b> (2 Reviews)
          </div>
          <div className="bottom_icon">
            <div className="bottom_icon_left">
              <span>
                {" "}
                <img src="/images/5-150x150.jpg" alt="" />
              </span>
              <div class="text">John Powell </div>{" "}
            </div>
            <div className="bottom_icon_right">
              {" "}
              <h5>
                Starting at: <strong>$128</strong>
              </h5>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-3">
      <div className="home_sec5_main">
        <div className="home_sec5_img">
          <img
            src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service5-495x370.jpg"
            alt=""
          />
          <div className="home_sec5_heart">
            <img src="/images/lnr-heart.svg" alt="" />{" "}
          </div>{" "}
        </div>
        <div className="home_sec5_content">
          <abbr>Design & Creative</abbr>
          <h3>
            Developers drop the framework folder into a new parent
          </h3>
          <div className="star_icon"><i>&#9733; </i> {" "}
            <b>4.5</b> (2 Reviews)
          </div>
          <div className="bottom_icon">
            <div className="bottom_icon_left">
              <span>
                {" "}
                <img src="/images/5-150x150.jpg" alt="" />
              </span>
              <div class="text">John Powell </div>{" "}
            </div>
            <div className="bottom_icon_right">
              {" "}
              <h5>
                Starting at: <strong>$128</strong>
              </h5>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
<div className="container">
<section className="home_sec6">
  <div className="row">
    <div className="col-12 col-md-7 pe-5">
      {" "}
      <h2>Join World's Best Marketplace for Workers</h2>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do
        amet sint. Velit officia consequat duis enim velit mollit.
        Exercitation veniam consequat sunt nostrud amet.
      </p>
      <ul>
        <li>Last Education of Bachelor Degree</li>
        <li>More Than 15 Years Experience</li>
        <li>12 Education Award Winning</li>
      </ul>
      <ol>
        <li>
          <a href="" className="btn_arrow">
            {" "}
            Hire freelancer <img src="/images/lnr-arrow-right.svg" />
          </a>
        </li>
        <li>
          <a href="" className="btn_arrow btn_arrow1">
            {" "}
            Apply as freelancer{" "}
            <img src="/images/lnr-arrow-right.svg" />
          </a>
        </li>
      </ol>
    </div>
    <div className="col-12 col-md-5">
      <img
        src="/images/jason-goodman-Kt-E_Qq8DW4-unsplash.jpg"
        alt=""
      />
    </div>
  </div>
</section>
</div>
{/* <section class="bg-secondary">
<div class="scrolling-marquee">
  <h4> Design &amp; Branding — Web Development — Product Design — </h4>
  <h4> Mobile Application — Web Application — SEO Optimization - </h4>
</div>
</section> */}
<section className="home_sec7">
<div className="container">
  <h2>Highest Rated Freelancers</h2>
  <h6>
    Lorem ipsum dolor sit amet, consectetur.{" "}
    <span className="sm-title"> </span>
  </h6>
  <div className="row">
    <div className="col-12 col-md-3">
      <div className="home_sec7_main">
        <div class="bottom_icon_left">
          <div className="home_sec5_heart">
            <img src="/images/lnr-heart.svg" alt="" />{" "}
          </div>
          <div className="home_sec55_main">
          <span>
            {" "}
            <img src="/images/5-150x150.jpg" alt="" />
          </span>
          <div className="home_sec55_row">
          <div class="text">John Powell </div>
          <div class="freelancer-job">Marketing Manager </div>
          <div class="star_icon"><i>&#9733; </i> {" "}
            <b>4.5</b> (2 Reviews)
          </div>
          </div>
        </div>  
          <ul>
            <li>
              <a href=""> Figma</a>
            </li>{" "}
            <li>
              <a href="">Creative</a>
            </li>
            <li>+3</li>
          </ul>
        </div>

        <div className="freelancer-location">
          <div className="colm-location">
            <h5>
              <strong>Location:</strong>
              Los Angeles
            </h5>
          </div>
          <div className="colm-location">
            <h5>
              <strong>Rate:</strong>
              $25 - $45 - hr
            </h5>
          </div>
        </div>
        <a href="" class="btn_arrow">
          {" "}
          Hire freelancer <img src="/images/lnr-arrow-right.svg" />
        </a>
      </div>
    </div>
    <div className="col-12 col-md-3">
      <div className="home_sec7_main">
        <div class="bottom_icon_left">
          <div className="home_sec5_heart">
            <img src="/images/lnr-heart.svg" alt="" />{" "}
          </div>
          <div className="home_sec55_main">
          <span>
            {" "}
            <img src="/images/5-150x150.jpg" alt="" />
          </span>
          <div className="home_sec55_row">
          <div class="text">John Powell </div>
          <div class="freelancer-job">Marketing Manager </div>
          <div class="star_icon"><i>&#9733; </i> {" "}
            <b>4.5</b> (2 Reviews)
          </div>
          </div>
        </div>  
          <ul>
            <li>
              <a href=""> Figma</a>
            </li>{" "}
            <li>
              <a href="">Creative</a>
            </li>
            <li>+3</li>
          </ul>
        </div>

        <div className="freelancer-location">
          <div className="colm-location">
            <h5>
              <strong>Location:</strong>
              Los Angeles
            </h5>
          </div>
          <div className="colm-location">
            <h5>
              <strong>Rate:</strong>
              $25 - $45 - hr
            </h5>
          </div>
        </div>
        <a href="" class="btn_arrow">
          {" "}
          Hire freelancer <img src="/images/lnr-arrow-right.svg" />
        </a>
      </div>
    </div>
    <div className="col-12 col-md-3">
      <div className="home_sec7_main">
        <div class="bottom_icon_left">
          <div className="home_sec5_heart">
            <img src="/images/lnr-heart.svg" alt="" />{" "}
          </div>
          <div className="home_sec55_main">
          <span>
            {" "}
            <img src="/images/5-150x150.jpg" alt="" />
          </span>
          <div className="home_sec55_row">
          <div class="text">John Powell </div>
          <div class="freelancer-job">Marketing Manager </div>
          <div class="star_icon"><i>&#9733; </i> {" "}
            <b>4.5</b> (2 Reviews)
          </div>
          </div>
        </div>  
          <ul>
            <li>
              <a href=""> Figma</a>
            </li>{" "}
            <li>
              <a href="">Creative</a>
            </li>
            <li>+3</li>
          </ul>
        </div>

        <div className="freelancer-location">
          <div className="colm-location">
            <h5>
              <strong>Location:</strong>
              Los Angeles
            </h5>
          </div>
          <div className="colm-location">
            <h5>
              <strong>Rate:</strong>
              $25 - $45 - hr
            </h5>
          </div>
        </div>
        <a href="" class="btn_arrow">
          {" "}
          Hire freelancer <img src="/images/lnr-arrow-right.svg" />
        </a>
      </div>
    </div>
    <div className="col-12 col-md-3">
      <div className="home_sec7_main">
        <div class="bottom_icon_left">
          <div className="home_sec5_heart">
            <img src="/images/lnr-heart.svg" alt="" />{" "}
          </div>
          <div className="home_sec55_main">
          <span>
            {" "}
            <img src="/images/5-150x150.jpg" alt="" />
          </span>
          <div className="home_sec55_row">
          <div class="text">John Powell </div>
          <div class="freelancer-job">Marketing Manager </div>
          <div class="star_icon"><i>&#9733; </i> {" "}
            <b>4.5</b> (2 Reviews)
          </div>
          </div>
        </div>  
          <ul>
            <li>
              <a href=""> Figma</a>
            </li>{" "}
            <li>
              <a href="">Creative</a>
            </li>
            <li>+3</li>
          </ul>
        </div>

        <div className="freelancer-location">
          <div className="colm-location">
            <h5>
              <strong>Location:</strong>
              Los Angeles
            </h5>
          </div>
          <div className="colm-location">
            <h5>
              <strong>Rate:</strong>
              $25 - $45 - hr
            </h5>
          </div>
        </div>
        <a href="" class="btn_arrow">
          {" "}
          Hire freelancer <img src="/images/lnr-arrow-right.svg" />
        </a>
      </div>
    </div>
    <div className="col-12 col-md-3">
      <div className="home_sec7_main">
        <div class="bottom_icon_left">
          <div className="home_sec5_heart">
            <img src="/images/lnr-heart.svg" alt="" />{" "}
          </div>
          <div className="home_sec55_main">
          <span>
            {" "}
            <img src="/images/5-150x150.jpg" alt="" />
          </span>
          <div className="home_sec55_row">
          <div class="text">John Powell </div>
          <div class="freelancer-job">Marketing Manager </div>
          <div class="star_icon"><i>&#9733; </i> {" "}
            <b>4.5</b> (2 Reviews)
          </div>
          </div>
        </div>  
          <ul>
            <li>
              <a href=""> Figma</a>
            </li>{" "}
            <li>
              <a href="">Creative</a>
            </li>
            <li>+3</li>
          </ul>
        </div>

        <div className="freelancer-location">
          <div className="colm-location">
            <h5>
              <strong>Location:</strong>
              Los Angeles
            </h5>
          </div>
          <div className="colm-location">
            <h5>
              <strong>Rate:</strong>
              $25 - $45 - hr
            </h5>
          </div>
        </div>
        <a href="" class="btn_arrow">
          {" "}
          Hire freelancer <img src="/images/lnr-arrow-right.svg" />
        </a>
      </div>
    </div>
    <div className="col-12 col-md-3">
      <div className="home_sec7_main">
        <div class="bottom_icon_left">
          <div className="home_sec5_heart">
            <img src="/images/lnr-heart.svg" alt="" />{" "}
          </div>
          <div className="home_sec55_main">
          <span>
            {" "}
            <img src="/images/5-150x150.jpg" alt="" />
          </span>
          <div className="home_sec55_row">
          <div class="text">John Powell </div>
          <div class="freelancer-job">Marketing Manager </div>
          <div class="star_icon"><i>&#9733; </i> {" "}
            <b>4.5</b> (2 Reviews)
          </div>
          </div>
        </div>  
          <ul>
            <li>
              <a href=""> Figma</a>
            </li>{" "}
            <li>
              <a href="">Creative</a>
            </li>
            <li>+3</li>
          </ul>
        </div>

        <div className="freelancer-location">
          <div className="colm-location">
            <h5>
              <strong>Location:</strong>
              Los Angeles
            </h5>
          </div>
          <div className="colm-location">
            <h5>
              <strong>Rate:</strong>
              $25 - $45 - hr
            </h5>
          </div>
        </div>
        <a href="" class="btn_arrow">
          {" "}
          Hire freelancer <img src="/images/lnr-arrow-right.svg" />
        </a>
      </div>
    </div>
    <div className="col-12 col-md-3">
      <div className="home_sec7_main">
        <div class="bottom_icon_left">
          <div className="home_sec5_heart">
            <img src="/images/lnr-heart.svg" alt="" />{" "}
          </div>
          <div className="home_sec55_main">
          <span>
            {" "}
            <img src="/images/5-150x150.jpg" alt="" />
          </span>
          <div className="home_sec55_row">
          <div class="text">John Powell </div>
          <div class="freelancer-job">Marketing Manager </div>
          <div class="star_icon"><i>&#9733; </i> {" "}
            <b>4.5</b> (2 Reviews)
          </div>
          </div>
        </div>  
          <ul>
            <li>
              <a href=""> Figma</a>
            </li>{" "}
            <li>
              <a href="">Creative</a>
            </li>
            <li>+3</li>
          </ul>
        </div>

        <div className="freelancer-location">
          <div className="colm-location">
            <h5>
              <strong>Location:</strong>
              Los Angeles
            </h5>
          </div>
          <div className="colm-location">
            <h5>
              <strong>Rate:</strong>
              $25 - $45 - hr
            </h5>
          </div>
        </div>
        <a href="" class="btn_arrow">
          {" "}
          Hire freelancer <img src="/images/lnr-arrow-right.svg" />
        </a>
      </div>
    </div>
    <div className="col-12 col-md-3">
      <div className="home_sec7_main">
        <div class="bottom_icon_left">
          <div className="home_sec5_heart">
            <img src="/images/lnr-heart.svg" alt="" />{" "}
          </div>
          <div className="home_sec55_main">
          <span>
            {" "}
            <img src="/images/5-150x150.jpg" alt="" />
          </span>
          <div className="home_sec55_row">
          <div class="text">John Powell </div>
          <div class="freelancer-job">Marketing Manager </div>
          <div class="star_icon"><i>&#9733; </i> {" "}
            <b>4.5</b> (2 Reviews)
          </div>
          </div>
        </div>  
          <ul>
            <li>
              <a href=""> Figma</a>
            </li>{" "}
            <li>
              <a href="">Creative</a>
            </li>
            <li>+3</li>
          </ul>
        </div>

        <div className="freelancer-location">
          <div className="colm-location">
            <h5>
              <strong>Location:</strong>
              Los Angeles
            </h5>
          </div>
          <div className="colm-location">
            <h5>
              <strong>Rate:</strong>
              $25 - $45 - hr
            </h5>
          </div>
        </div>
        <a href="" class="btn_arrow">
          {" "}
          Hire freelancer <img src="/images/lnr-arrow-right.svg" />
        </a>
      </div>
    </div>
  </div>
</div>
</section>
</>
);
};
export default Home