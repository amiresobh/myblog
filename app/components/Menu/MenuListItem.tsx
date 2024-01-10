"use client";
import React from 'react'
import Link from 'next/link';

import toggleMenu from '@/app/functions/toggleMenu';

const MenuListItem = ({
    title, description, url,
  }: {
    title: string;
    description: string;
    url: string;
  }) => {
    return (
      <li className="primary-links__item flex flex-row-reverse z-50 h-[20vh]">
        <Link
          className={`primary-links__link t-primar text-right !font-IranianSans`}
          href={url}
          onClick={toggleMenu}
        >
          {title}
        </Link>

        <span
          id="desc_work"
          className={`primary-links__summary flex-1 text-right !font-IranianSans`}
        >
          {description}
        </span>
      </li>
    );
  };

export default MenuListItem