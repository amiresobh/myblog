"use client";
import { Fragment } from "react";

import { Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/20/solid";


import IranianSans from "@/app/assets/fonts/IranianSans";
const callsToAction = [{ name: "ارسال", href: "#", icon: PaperAirplaneIcon }];

export default function FlyoutMenu() {
  return (
    
    <Popover
      className={`relative hire-me mt-10 mr-20`}
    >
      <Popover.Button className="hire-me inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
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

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-96 max-w-max -translate-x-1/2 px-4 sm:w-screen !tracking-normal">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              <div
                className={` sm:text-2xl text-lg text-right m-7 font-IranianSans`}
              >
                از خودتان بگویید و راه تماسی برایم بگذارید
              </div>
              <textarea rows={10} cols={50} className={` p-3 rounded-lg focus:border-dotted border-2 border-e-blue-200 flex-1 sm:w-96 w-64 h-96 bg-gray-100 text-right font-medium sm:text-2xl text-xl resize-none`} />
              
            </div>
            <div className="divide-x divide-gray-900/5 bg-blue-300">
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={` flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 sm:text-2xl text-lg hover:bg-blue-400`}
                >
                  <item.icon
                    className="sm:h-10 sm:w-10 h-6 w-6 text-gray-900 font-IranianSans"
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
