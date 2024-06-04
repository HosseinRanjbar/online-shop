import React from "react";
import twitter from "../assets/social-media-logos/icons8-twitter-48.png";
import facebook from "../assets/social-media-logos/icons8-facebook-48.png";
import instagram from "../assets/social-media-logos/icons8-instagram-48.png";
import youtube from "../assets/social-media-logos/icons8-youtube-48.png";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="bg-black p-10">
      <div className="flex justify-center gap-2 items-center">
        <a href="https://www.twitter.com/" target="_blank">
          <img src={twitter} alt="" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img src={facebook} alt="" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src={instagram} alt="" />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <img src={youtube} alt="" />
        </a>
      </div>
      <div className="text-white text-center">
        <p> Copyright &copy; Ecommerce Shop {year} </p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
