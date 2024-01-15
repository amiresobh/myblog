"use client";
import React, { useContext, useState } from "react";

import { ConnectPopoverContext } from "../Providers/ConnectPopoverContext";

const SubmitBtn = () => {
  const {isConnectPopoverOpen, setIsConnectPopoverOpen} = useContext(ConnectPopoverContext)
  return (
    <button
      className="btn"
      onClick={() =>
        setIsConnectPopoverOpen(true)
      }
    >
      <span className="btn__label font-IranianSans">ارتباط با من</span>
      <span
        className="btn__fill stripes !font-IranianSans"
        data-drift="-10 -12"
        aria-hidden="true"
      >
        ارتباط با من
      </span>
    </button>
  );
};

export default SubmitBtn;
