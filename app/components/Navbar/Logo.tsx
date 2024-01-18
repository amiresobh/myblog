"use client";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className='logo-wrap '>
      <span className="u-vhide">Back to the homepage</span>
      <div className="logo js-logo">
        <div className="logo__skirrid">
          <div className="shade" data-drift="-5 -10">
            <svg version="1.1" x="0px" y="0px" viewBox="0 0 256 256">
              <polygon
                className="filled-poly"
                points="156.2,91.5 112.7,146.5 89,116.5 33.2,187 80.7,187 144.8,187 231.8,187"
              ></polygon>
            </svg>
          </div>
          <div className="logo">
            <svg version="1.1" x="0px" y="0px" viewBox="0 0 256 256">
              <polygon
                className="stroke-poly"
                points="84,106.5 28.2,177 139.8,177 "
              ></polygon>
              <polygon
                className="stroke-poly"
                points="151.2,81.5 75.7,177 226.8,177 "
              ></polygon>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
