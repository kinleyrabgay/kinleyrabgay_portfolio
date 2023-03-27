import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsTwitter href="https://twitter.com/fsd_rabgay" />
      </div>
      <div>
        <FaFacebook href="https://www.facebook.com/kinley.rabgay.3956/" />
      </div>
      <div>
        <BsInstagram href="https://www.instagram.com/__rabgay.kinley/" />
      </div>
    </div>
  );
};

export default SocialMedia;
