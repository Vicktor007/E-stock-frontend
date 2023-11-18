import React from "react";
import { RiEmphasis } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/inv-img.png";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";
import useHomeRedirectDeletedUser from "../../customHook/useHomeRedirectDeletedUser";

const Home = () => {
  
  useHomeRedirectDeletedUser("/")
  
  

  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo">
             <RiEmphasis size={35}/>

        </div>

        <ul className="home-links">
        


          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              
                <Link to="/login"className="--btn --btn-primary">Login</Link>
              
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              
                <Link to="/dashboard" className="--btn --btn-primary">Dashboard</Link>
              
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h2>Inventory {"&"} Stock Management Solution</h2>
          <p>
            Inventory system to control and manage proucts in the warehouse in
            real timeand integrated to make it easier to develop your business.
          </p>
          <div className="hero-buttons">
          <ShowOnLogout>
              <Link to="/register" className="--btn --btn-secondary">Free Trial 1 Month</Link>
            </ShowOnLogout>
          </div>
          <div className="--flex-start">
            <NumberText num="14K" text="Brand Owners" />
            <NumberText num="23K" text="Active Users" />
            <NumberText num="500+" text="Partners" />
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Inventory" />
        </div>
      </section>
    </div>
  );
};

const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h3 className="--color-white">{num}</h3>
      <p className="--color-white">{text}</p>
    </div>
  );
};

export default Home;


