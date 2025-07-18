import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>Our mission is to offer a taste of tradition with every dish we serve.
                 With a dedicated team, a carefully crafted menu, and a passion for excellence, 
                 we’re here to ensure that every visit feels special.</p>
            </div>
            <p className="mid">
              At Kothari's, we serve more than just food — we serve stories, heritage, 
              and the comforting warmth of home-cooked meals. Located in the heart of Jaipur,
               our restaurant is a place where culinary passion meets tradition, offering
                a unique dining experience that blends timeless recipes with a modern touch.


            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;