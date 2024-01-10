"use client";
import React from "react";
import { Popover } from "@headlessui/react";

const HireMe = ({ Link }: { Link: string }) => {
  return (
    <Popover className="relative">
      <Popover.Button
        className="hire-me"
        //   href="mailto:hello@robbowen.digital?subject=🤘 Hi Robb, I'd like to hire you"
        // onClick={}
      >
        <div className="shade" data-drift="-4 -6" data-drift-center="y">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
            <path
              className="filled-path"
              d="M30.78,9.87c13.52,0,24.46,9.58,24.46,21.41a19.4,19.4,0,0,1-5,12.95h0l2.9,9.82L42.37,50.1h0a27.51,27.51,0,0,1-11.59,2.58,26.84,26.84,0,0,1-14-3.86C10.42,45,6.24,38.52,6.24,31.2,6.24,19.53,17.26,9.87,30.78,9.87Z"
            ></path>
          </svg>
        </div>
        <div className="main">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
            <path
              className="stroke-path"
              d="M27.78,5.87c13.52,0,24.46,9.58,24.46,21.41a19.4,19.4,0,0,1-5,12.95h0l2.9,9.82L39.37,46.1h0a27.51,27.51,0,0,1-11.59,2.58,26.84,26.84,0,0,1-14-3.86C7.42,41,3.24,34.52,3.24,27.2,3.24,15.53,14.26,5.87,27.78,5.87Z"
            ></path>
          </svg>
        </div>
        Connect
      </Popover.Button>

    </Popover>
  );
};

export default HireMe;
