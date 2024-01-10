import React from "react";

const MenuBTN = () => {
  
  return (
    <div className="menu-link">
      <button
        className="menu-link__trigger js-menu-trigger"
        aria-expanded="false"
        aria-controls="main-menu"
      >
        <span className="menu-link__mask">
          <span
            className="menu-link__label menu-link__label--close js-menu-label-close"
            aria-hidden="true"
          >
            CLOSE
          </span>
          <span
            className="menu-link__label menu-link__label--open js-menu-label-open"
            aria-hidden="false"
          >
            MENU
          </span>
        </span>
      </button>
    </div>
  );
};

export default MenuBTN;
