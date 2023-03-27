import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/fsd_rabgay">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/kinley.rabgay.3956/">
          <FaFacebook />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/__rabgay.kinley/">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
