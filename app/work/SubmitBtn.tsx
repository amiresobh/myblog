"use client";
import React from "react";
import { toggleConnectPopoverState } from "../functions/toggleConnectPopover";

const SubmitBtn = () => {
  return (
    <button onClick={toggleConnectPopoverState} className="btn">
      <span className="btn__label font-IranianSans">پیام بزارین</span>
      <span
        className="btn__fill stripes !font-IranianSans"
        data-drift="-10 -12"
        aria-hidden="true"
      >
        پیام بزارین
      </span>
    </button>
  );
};

export default SubmitBtn;
