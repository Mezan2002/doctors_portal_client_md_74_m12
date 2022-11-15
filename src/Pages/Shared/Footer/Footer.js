import React from "react";
import { Link } from "react-router-dom";
import BgFooter from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <div>
      <footer
        style={{ backgroundImage: `url(${BgFooter})` }}
        className="p-10 bg-neutral text-neutral-content"
      >
        <div className="footer">
          <div>
            <span className="footer-title">Services</span>
            <Link to="/" className="link link-hover" href="/">
              Branding
            </Link>
            <Link to="/" className="link link-hover" href="/">
              Design
            </Link>
            <Link to="/" className="link link-hover" href="/">
              Marketing
            </Link>
            <Link to="/" className="link link-hover" href="/">
              Advertisement
            </Link>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <Link to="/" className="link link-hover" href="/">
              About us
            </Link>
            <Link to="/" className="link link-hover" href="/">
              Contact
            </Link>
            <Link to="/" className="link link-hover" href="/">
              Jobs
            </Link>
            <Link to="/" className="link link-hover" href="/">
              Press kit
            </Link>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <Link to="/" className="link link-hover" href="/">
              Terms of use
            </Link>
            <Link to="/" className="link link-hover" href="/">
              Privacy policy
            </Link>
            <Link to="/" className="link link-hover" href="/">
              Cookie policy
            </Link>
          </div>
        </div>
        <div className="mt-32 text-center">
          <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
