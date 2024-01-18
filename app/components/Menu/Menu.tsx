//Notes:
//1. provide a valid link for RSS and Email Icon

import React from "react";
import MenuListItem from "./MenuListItem";


const Menu = () => {
  const MenuItems = [
    { title: "خانه", descprtion: "بازگشت به صفحه خانه", url: "home" },
    { title: "کار", descprtion: " مروری بر شیوه کار", url: "work" },
    { title: "درباره من", descprtion: "کمی درباره من", url: "about" },
    { title: "نوشته ها", descprtion: "آخرین نوشته های من درمورد تکنولوژی و پزشکی", url: "writting" },
  ];

  return (
    <div>
      <div className="main-menu js-menu h-0" id="main-menu">
        <div className="main-menu__mask z-[5]"></div>
        <div className="main-menu__flyout fixed z-[6] right-20 top-[20%]">
          <div className="main-menu__inr wrap h-full flex flex-col whitespace-nowrap align-middle ">
            <ul className="social-links">
              <li className="social-links__item">
                <a
                  className="social-links__link social-links__link--in"
                  href="https://www.instagram.com/amir.m.sobhani/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                </a>
              </li>
              <li className="social-links__item">
                <a
                  className="social-links__link social-links__link--gh"
                  href="https://github.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  data-rekishi-skip
                >
                </a>
              </li>
              <li className="social-links__item">
                <a
                  className="social-links__link social-links__link--email"
                  // href="mailto:hello@robbowen.digital"
                  href=""
                  rel="noopener noreferrer"
                  target="_blank"
                >
                </a>
              </li>
            </ul>
            <ul className="main-menu__links primary-links h-[100%] pr-10 ">
              {MenuItems.map(MenuItem => (<MenuListItem key={MenuItem.title} title={MenuItem.title} description={MenuItem.descprtion} url={MenuItem.url} />))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
