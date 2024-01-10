import React from "react";
import type { Metadata } from "next";
import LoadingComponent from "../components/LoadingComponent";

export const metadata: Metadata = {
  title: "What I Do - Amir Sobhani",
  description:
    "From interaction design to scaleable design systems, single-page apps to something more experimental with WebGL. I help awesome people to build ambitious yet accessible web projects",
  themeColor: "#FCC5D3",
  colorScheme: "only light",
};
export default function Work() {
  return (
    <div>
      <svg
        className="absolute top-[-900px] left-[-900px]"
        // style="
        //     position: absolute;
        //     top: -900px;
        //     left: -900px;
        //     clip: rect(0, 0, 0, 0);
        //   "
      >
        <filter id="duotone_filter">
          <feColorMatrix
            type="matrix"
            result="grayscale"
            values="1 0 0 0 0
                  1 0 0 0 0
                  1 0 0 0 0
                  0 0 0 1 0"
          />
          <feComponentTransfer
            color-interpolation-filters="sRGB"
            result="duotone"
          >
            <feFuncR
              type="table"
              tableValues="0.615686274509804 1.007843137254902"
            ></feFuncR>
            <feFuncG
              type="table"
              tableValues="-0.17647058823529413 0.9725490196078431"
            ></feFuncG>
            <feFuncB
              type="table"
              tableValues="0.023529411764705882 0.9803921568627451"
            ></feFuncB>
            <feFuncA type="table" tableValues="0 1"></feFuncA>
          </feComponentTransfer>
        </filter>
      </svg>

      <div className="section">
        <header className="page-header">
          <div className="page-header__inr">
            <div
              className="page-header__content"
              data-reveal="is-onscreen"
              data-prlx="0 0.25"
            >
              <div className="article-heading">
                <h1 className="article-heading__title t-heading t-medium:s t-bigger:m t-biggest:l text-right">
                  <span className=" font-IranianSans">
                    <span className="dot">.</span>کار من
                  </span>
                </h1>
              </div>
              <p className="page-header__lede t-primary lh-loose t-body:s t-sublede:m t-lede:l reveal-content text-right !font-IranianSans">
                <b> *من یک توسعه دهنده ام </b>
                <br></br>
                تحصیلات دانشگاهی مرتبط با برنامه نویسی ندارم ولی علاقه م من رو توی این راه راهنمایی کرده. سایت طراحی کردم، نرم افزار موبایل و ویندوز ساختم، و به موسسه های مختلف مشاوره فناورانه دادم
                <br></br>
              </p> 
              {/* <p className="page-header__lede t-primary lh-loose t-body:s t-sublede:m t-lede:l reveal-content text-right !font-IranianSans pr-16">
                 اگه میخاین که سایت داشته باشین برای خودتون یا کسب و کارتون     
                <br></br>
                اگه سایت دارین ولی داغونه و نمیدونین چیکارش کنین 
                <br></br>
                اگه نرم افزار موبایل میخواین 
                <br></br>
                اگه نمیدونین از فناوری کجای کسب و کارتون استفاده کنین 
              </p> */}
              {/* <p className="page-header__lede t-primary lh-loose t-body:s t-sublede:m t-lede:l reveal-content text-center !font-IranianSans mt-10 bg-[#0f1b61] !text-[#f4f9fc] w-[25vw] p-3">
                <b> شماره تونو برام بفرستین </b>
              </p> */}
              <span className="page-header__scroll" aria-hidden="true">
                <span>
                  <span>S</span> <span>c</span> <span>r</span>
                  <span>o</span> <span>l</span> <span>l</span>
                </span>
              </span>
            </div>
          </div>
        </header>
      </div>

      <div className="panels panels--centred" data-reveal="is-onscreen">
            <div className="panels__main">
              <div className="flow">
                <h2 className="t-heading t-lede:s t-medium:m t-medium:l text-right !font-IranianSans">
                <span className="dot">.</span>طراحی وب سایت
                </h2>
                <p>
                  No two projects are the same and I take a pragmatic approach
                  to each job I take on, focussing on delivering work that is as
                  accessible and optimised as possible.
                </p>
                <p>
                  More than a decade of experience building complex interfaces
                  means that I'm happy to deliver anything from single-page apps
                  to scaleable design systems. I can help you identify the most
                  appropriate technology for your project and, whilst I love a
                  good framework, you can be sure that I will never use tech for
                  tech's sake.
                </p>
              </div>
            </div>
            <div className="panels__side">
              <div className="circle">
                <div className="circle__inr" data-reveal="is-active">
                  <div className="circle__bg stripes" data-drift="-10 -14"></div>
                  <div className="illustration illustration--board">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 596.6 554.39"
                    >
                      <path
                        className="svg-bg"
                        d="M495.76,114.63H362.5L308.56,80.41a13,13,0,0,0-5.28-8A13,13,0,0,0,279.84,78L222,114.63H83.22a14.2,14.2,0,0,0-14.11,14.29V371.07a14.2,14.2,0,0,0,14.11,14.28H495.76a14.19,14.19,0,0,0,14.11-14.28V128.92A14.2,14.2,0,0,0,495.76,114.63ZM281.7,86.75a13.17,13.17,0,0,0,3.51,3.7,13,13,0,0,0,21.87-1l39.7,25.18h-109Z"
                      />
                      <rect
                        className="svg-bg"
                        y="467.84"
                        width="596.6"
                        height="86.55"
                      />
                    </svg>
                    <div className="illustration__layer" data-drift="-4 -4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 596.6 554.39"
                      >
                        <rect
                          className="svg-fill"
                          x="223.63"
                          y="273.15"
                          width="103.26"
                          height="26.64"
                        />
                        <circle
                          className="svg-fill"
                          cx="237.5"
                          cy="255.96"
                          r="8.94"
                          transform="translate(-52.45 61.41) rotate(-13.28)"
                        />
                        <path
                          className="svg-fill"
                          d="M215.35,239.35H335V188.7H215.35Zm17.85-42.19a.92.92,0,1,1,.73-1.69L275,213.25l41.09-17.78a.92.92,0,0,1,.73,1.69l-39.51,17.09,39.51,17.09a.93.93,0,0,1,.48,1.21.94.94,0,0,1-1.21.48L275,215.25,233.93,233a1,1,0,0,1-.37.07.92.92,0,0,1-.36-1.76l39.5-17.09Z"
                        />
                        <path
                          className="svg-fill"
                          d="M120.21,194.12h59.1V159h-59.1ZM129,164.87a.76.76,0,0,1-.24-.84c.1-.32.37-.47.6-.33L149.67,176,170,163.7c.23-.14.49,0,.59.33a.76.76,0,0,1-.23.84l-19.51,11.85,19.51,11.85a.75.75,0,0,1,.23.84.47.47,0,0,1-.41.38.37.37,0,0,1-.18,0l-20.29-12.33-20.29,12.33a.41.41,0,0,1-.18,0,.47.47,0,0,1-.42-.38.75.75,0,0,1,.24-.84l19.5-11.85Z"
                        />
                        <path
                          className="svg-fill"
                          d="M369.75,302.27h53.6V243h-53.6Zm3.95-47.94h40.83v8.56H373.7Zm0,21.24h40.83v8.56H373.7Zm0,15.16H390v5.93H373.7Z"
                        />
                        <path
                          className="svg-fill"
                          d="M447.74,268.44a13.66,13.66,0,1,0-13.65-13.66A13.66,13.66,0,0,0,447.74,268.44Zm-3.28-18.67a.74.74,0,0,1,1.14-.62l7.66,5a.74.74,0,0,1,0,1.23l-7.66,5a.74.74,0,0,1-1.14-.62Z"
                        />
                        <path
                          className="svg-fill"
                          d="M448.48,275.61a13.65,13.65,0,1,0,13.65,13.65A13.66,13.66,0,0,0,448.48,275.61Zm4.95,17.49a.92.92,0,0,1,0,1.3.93.93,0,0,1-1.3,0L448.62,291l-3.52,3.45a.93.93,0,0,1-1.3,0,.92.92,0,0,1,0-1.3l3.49-3.43-3.49-3.42a.92.92,0,1,1,1.28-1.31l3.52,3.45,3.52-3.45a.93.93,0,0,1,1.3,0,.92.92,0,0,1,0,1.3l-3.5,3.42Z"
                        />
                        <path
                          className="svg-fill"
                          d="M494.2,122.72H90.65A13.35,13.35,0,0,0,77.3,136.07V366a13.35,13.35,0,0,0,13.35,13.34H494.2A13.35,13.35,0,0,0,507.54,366v-230A13.35,13.35,0,0,0,494.2,122.72Zm6.64,236.1a13.35,13.35,0,0,1-13.35,13.34H97.35A13.34,13.34,0,0,1,84,358.82V142.43a13.35,13.35,0,0,1,13.34-13.35H487.49a13.35,13.35,0,0,1,13.35,13.35Z"
                        />
                      </svg>
                    </div>
                    <div className="illustration__layer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 596.6 554.39"
                      >
                        <rect
                          className="svg-stroke-thin"
                          x="212.66"
                          y="184.64"
                          width="119.69"
                          height="50.65"
                        />
                        <line
                          className="svg-stroke-thin"
                          x1="313.78"
                          y1="192.26"
                          x2="230.87"
                          y2="228.13"
                        />
                        <line
                          className="svg-stroke-thin"
                          x1="230.87"
                          y1="192.26"
                          x2="313.78"
                          y2="228.13"
                        />
                        <circle
                          className="svg-stroke-thin"
                          cx="234.81"
                          cy="251.9"
                          r="8.94"
                        />
                        <line
                          className="svg-stroke-thin"
                          x1="254.87"
                          y1="248.35"
                          x2="317.83"
                          y2="248.35"
                        />
                        <line
                          className="svg-stroke-thin"
                          x1="254.87"
                          y1="256.03"
                          x2="292.58"
                          y2="256.03"
                        />
                        <rect
                          className="svg-stroke-thin"
                          x="220.94"
                          y="269.09"
                          width="103.26"
                          height="26.64"
                        />
                        <rect
                          className="svg-stroke-thin"
                          x="212.66"
                          y="174.69"
                          width="119.69"
                          height="9.95"
                        />
                        <path
                          className="svg-stroke-thin"
                          d="M273.48,320.56c22.88,10.49,44.95,8.33,58.87,5V235.29H212.66v80.27C227,312.06,249.8,309.71,273.48,320.56Z"
                        />
                        <rect
                          className="svg-stroke-thin"
                          x="367.19"
                          y="238.94"
                          width="53.61"
                          height="59.31"
                        />
                        <rect
                          className="svg-stroke-thin"
                          x="371.14"
                          y="250.32"
                          width="40.83"
                          height="8.56"
                        />
                        <line
                          className="svg-stroke-thin"
                          x1="371.14"
                          y1="245.08"
                          x2="400.28"
                          y2="245.08"
                        />
                        <rect
                          className="svg-stroke-thin"
                          x="371.14"
                          y="271.56"
                          width="40.83"
                          height="8.56"
                        />
                        <line
                          className="svg-stroke-thin"
                          x1="371.14"
                          y1="266.32"
                          x2="400.28"
                          y2="266.32"
                        />
                        <rect
                          className="svg-stroke-thin"
                          x="371.14"
                          y="286.72"
                          width="16.3"
                          height="5.93"
                        />
                        <rect
                          className="svg-stroke-thin"
                          x="366.55"
                          y="209.43"
                          width="92.43"
                          height="16.26"
                          rx="5.31"
                        />
                        <circle
                          className="svg-stroke-thin"
                          cx="449.41"
                          cy="217.65"
                          r="4.91"
                        />
                        <rect
                          className="svg-stroke-thin"
                          x="366.55"
                          y="180.73"
                          width="92.43"
                          height="16.26"
                          rx="5.31"
                        />
                        <circle
                          className="svg-stroke-thin"
                          cx="446.27"
                          cy="251.53"
                          r="13.65"
                        />
                        <path
                          className="svg-stroke-thin"
                          d="M443,246.51v10a.73.73,0,0,0,1.13.62l7.67-5a.74.74,0,0,0,0-1.23l-7.67-5A.73.73,0,0,0,443,246.51Z"
                        />
                        <circle
                          className="svg-stroke-thin"
                          cx="446.27"
                          cy="286"
                          r="13.65"
                        />
                        <line
                          className="svg-stroke-thin"
                          x1="450.58"
                          y1="282.34"
                          x2="442.25"
                          y2="290.49"
                        />
                        <line
                          className="svg-stroke-thin"
                          x1="442.25"
                          y1="282.34"
                          x2="450.58"
                          y2="290.49"
                        />
                        <line
                          className="svg-stroke-thin"
                          x1="440.59"
                          y1="180.73"
                          x2="440.59"
                          y2="196.99"
                        />
                        <path
                          className="svg-fill-stroke"
                          d="M452.71,186.84h-6a.43.43,0,0,0-.37.67l3,3.93a.43.43,0,0,0,.73,0l3-3.93A.43.43,0,0,0,452.71,186.84Z"
                        />
                        <circle
                          className="svg-stroke-thin"
                          cx="388.82"
                          cy="318"
                          r="7.73"
                        />
                        <path
                          className="svg-fill-stroke"
                          d="M388.82,326.83h-15a8.84,8.84,0,1,1,0-17.67h15a1.11,1.11,0,0,1,0,2.21,6.63,6.63,0,1,0,0,13.25,1.11,1.11,0,0,1,0,2.21Z"
                        />
                        <path
                          className="svg-stroke-thin"
                          d="M490.81,119.34H87.26a13.34,13.34,0,0,0-13.34,13.34v230A13.34,13.34,0,0,0,87.26,376H490.81a13.34,13.34,0,0,0,13.34-13.34v-230A13.34,13.34,0,0,0,490.81,119.34Zm6.64,236.09a13.35,13.35,0,0,1-13.34,13.35H94a13.35,13.35,0,0,1-13.34-13.35V139A13.34,13.34,0,0,1,94,125.7H484.11A13.34,13.34,0,0,1,497.45,139Z"
                        />
                        <line
                          className="svg-stroke-thin"
                          x1="533.91"
                          y1="466.97"
                          x2="562.99"
                          y2="466.97"
                        />
                        <circle
                          className="svg-fill"
                          cx="295.83"
                          cy="82.99"
                          r="8.77"
                        />
                        <circle
                          className="svg-stroke-thin"
                          cx="292.67"
                          cy="79.83"
                          r="8.77"
                        />
                        <line
                          className="svg-stroke-thin"
                          x1="301.44"
                          y1="80.88"
                          x2="362.05"
                          y2="119.34"
                        />
                        <line
                          className="svg-stroke-thin"
                          x1="283.09"
                          y1="80.88"
                          x2="222.48"
                          y2="119.34"
                        />
                        <rect
                          className="svg-stroke-thin"
                          x="118.19"
                          y="284.26"
                          width="59.1"
                          height="33.55"
                        />
                        <line
                          className="svg-stroke-thin"
                          x1="122.91"
                          y1="292.22"
                          x2="168.81"
                          y2="292.22"
                        />
                        <line
                          className="svg-stroke-thin"
                          x1="122.91"
                          y1="298.63"
                          x2="156.09"
                          y2="298.63"
                        />
                        <rect
                          className="svg-stroke-thin"
                          x="122.91"
                          y="305.15"
                          width="16.3"
                          height="5.93"
                        />
                        <rect
                          className="svg-stroke-thin"
                          x="118.36"
                          y="155.86"
                          width="59.1"
                          height="35.12"
                        />
                        <line
                          className="svg-stroke-thin"
                          x1="168.29"
                          y1="161.14"
                          x2="127.35"
                          y2="186.01"
                        />
                        <line
                          className="svg-stroke-thin"
                          x1="127.35"
                          y1="161.14"
                          x2="168.29"
                          y2="186.01"
                        />
                        <rect
                          className="svg-stroke-thin"
                          x="118.36"
                          y="190.99"
                          width="59.1"
                          height="33.55"
                        />
                        <line
                          className="svg-stroke-thin"
                          x1="123.08"
                          y1="198.94"
                          x2="168.97"
                          y2="198.94"
                        />
                        <line
                          className="svg-stroke-thin"
                          x1="123.08"
                          y1="205.35"
                          x2="156.25"
                          y2="205.35"
                        />
                        <rect
                          className="svg-stroke-thin"
                          x="123.08"
                          y="211.88"
                          width="16.3"
                          height="5.93"
                        />
                        <line
                          className="svg-stroke-thin svg-stroke-dashed"
                          x1="149.76"
                          y1="232.74"
                          x2="149.76"
                          y2="275.65"
                        />
                      </svg>
                    </div>
                    <div className="illustration__layer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 596.6 554.39"
                      >
                        <path
                          className="svg-bg"
                          d="M540.5,391.81l32-40.84a6.31,6.31,0,0,0-7.91-9.48l-28.11,14.79,5.74-32.7a6.31,6.31,0,0,0-11.19-5l-14.53,18.5-10-32.5a6.32,6.32,0,0,0-12.08,0L484,338.76l-15.14-19.29a6.32,6.32,0,0,0-11.19,5l5.46,31.09-26.74-14.07a6.31,6.31,0,0,0-7.91,9.48l32,40.84a36.36,36.36,0,0,0,5.38,5.51A13,13,0,0,0,462,402h-2.35a10,10,0,0,0-9.95,10.22c1.22,44.54,23.08,59.49,24,60.11a6.31,6.31,0,0,0,3.48,1H523.8a6.34,6.34,0,0,0,3.48-1c.93-.62,22.79-15.57,24-60.11A10,10,0,0,0,541.34,402H540.2a13.08,13.08,0,0,0-4.51-5.21A35.58,35.58,0,0,0,540.5,391.81Z"
                        />
                      </svg>
                    </div>
                    <div className="illustration__layer" data-drift="-4 -4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 596.6 554.39"
                      >
                        <path
                          className="svg-fill"
                          d="M483.73,375.83,486,377l.57.32a23.14,23.14,0,0,1,.11-13.19l.59-1.91-13.52-19.54,9.22,31C483.21,374.44,483.45,375.14,483.73,375.83Z"
                        />
                        <path
                          className="svg-fill"
                          d="M518.7,377.36l.56-.32,2.31-1.21c.27-.69.52-1.39.73-2.1l9.22-31L518,362.26l.58,1.91A23.06,23.06,0,0,1,518.7,377.36Z"
                        />
                        <path
                          className="svg-fill"
                          d="M496.36,402.1l3.85.2-1-3.72c-1.14-4.3-5.25-9.07-10.3-12l-28-16.16,21.63,24.07C486.39,398.85,491.92,401.87,496.36,402.1Z"
                        />
                        <path
                          className="svg-fill"
                          d="M507.08,402.3l3.84-.2c4.45-.23,10-3.25,13.87-7.59l21.62-24.07-28,16.16c-5,2.91-9.15,7.68-10.3,12Z"
                        />
                        <path
                          className="svg-fill"
                          d="M543.69,411.94h-6.21a7.39,7.39,0,0,0-7.39-7.39H504.7l.79-1.08,0-6.05a18.48,18.48,0,0,1,2.88-9.37c0-.06,0-.13,0-.2l-.15-.93a19.11,19.11,0,0,0,3-15.43l-8-35-8,35a19.07,19.07,0,0,0,3,15.48l-.14.88c0,.09,0,.17,0,.26a18.31,18.31,0,0,1,2.86,9.31l0,6,.82,1.13h-25a7.39,7.39,0,0,0-7.4,7.39H462a3.64,3.64,0,0,0-3.63,3.73c1.14,41.76,21.18,55,21.18,55h46.58s20-13.24,21.17-55A3.63,3.63,0,0,0,543.69,411.94Z"
                        />
                      </svg>
                    </div>
                    <div className="illustration__layer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 596.6 554.39"
                      >
                        <path
                          className="svg-stroke-thin"
                          d="M456,412.09c1.14,41.76,21.17,55,21.17,55h46.59s20-13.24,21.17-55a3.64,3.64,0,0,0-3.63-3.73H459.65A3.63,3.63,0,0,0,456,412.09Z"
                        />
                        <path
                          className="svg-stroke-thin"
                          d="M473.36,401h55.46a6.29,6.29,0,0,1,6.29,6.29v1.11a0,0,0,0,1,0,0h-68a0,0,0,0,1,0,0v-1.11A6.29,6.29,0,0,1,473.36,401Z"
                        />
                        <path
                          className="svg-stroke-thin"
                          d="M567.52,347.08l-49.83,26.23c-9,4.73-15,12.84-15,20.37l0,6.52,7.94,0a33.17,33.17,0,0,0,24.87-12.27Z"
                        />
                        <path
                          className="svg-stroke-thin"
                          d="M433.41,347.08l49.83,26.23c9,4.73,14.94,12.84,15,20.37l0,6.52-8,0a33.16,33.16,0,0,1-24.86-12.27Z"
                        />
                        <path
                          className="svg-stroke-thin"
                          d="M517.17,373.6a23.17,23.17,0,0,0-.13-13.17l-16.56-54-16.56,54a23.18,23.18,0,0,0-.11,13.2c7.22,4,12.39,10.14,13.92,16.36l2.75,2,2.71-1.93C504.72,383.78,509.91,377.58,517.17,373.6Z"
                        />
                        <path
                          className="svg-stroke-thin"
                          d="M517.47,372.38a1.55,1.55,0,0,1,.22-.12l10.54-5.55L536,322.49l-22,28,3,9.93A23.14,23.14,0,0,1,517.47,372.38Z"
                        />
                        <path
                          className="svg-stroke-thin"
                          d="M502.94,390.21l-.34.24.24.45C502.87,390.67,502.9,390.44,502.94,390.21Z"
                        />
                        <path
                          className="svg-stroke-thin"
                          d="M483.24,372.26l.26.14a23.11,23.11,0,0,1,.42-12l2.54-8.27-22.61-28.79L471.34,366Z"
                        />
                      </svg>
                    </div>
                    <div className="illustration__layer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 596.6 554.39"
                      >
                        <path
                          className="svg-bg"
                          d="M319.83,438.66V423.45H429.11c6.82,0,18.27,3.1,18.27,23.83s-11.45,23.82-18.27,23.82H319.83V455.9h5.57c1.91-3,1.91-14.27,0-17.24Z"
                        />
                      </svg>
                    </div>
                    <div className="illustration__layer" data-drift="-4 -4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 596.6 554.39"
                      >
                        <path
                          className="svg-fill"
                          d="M327.66,430.52H432.72c10.84,0,14.06,8.78,14.06,19.62s-3.22,19.61-14.06,19.61H327.66V463h52.51c7.93,0,8.8-5.75,8.8-12.83s-1.4-12.84-8.8-12.84H327.66Z"
                        />
                        <path
                          className="svg-fill"
                          d="M337.82,440.25H375.6a.79.79,0,0,1,.79.8.79.79,0,0,1-.79.79H337.82a.79.79,0,0,1-.8-.79A.8.8,0,0,1,337.82,440.25Z"
                        />
                        <path
                          className="svg-fill"
                          d="M373.22,458.51H335.44a.8.8,0,0,1-.8-.8.79.79,0,0,1,.8-.79h37.78a.79.79,0,0,1,.79.79A.8.8,0,0,1,373.22,458.51Z"
                        />
                        <path
                          className="svg-fill"
                          d="M383,452.61a.79.79,0,0,1-.79.79H338.61a.79.79,0,0,1-.79-.79.79.79,0,0,1,.79-.8h43.57A.8.8,0,0,1,383,452.61Z"
                        />
                        <path
                          className="svg-fill"
                          d="M357.19,447.35a.79.79,0,0,1-.79.8H335.71a.8.8,0,0,1-.79-.8.79.79,0,0,1,.79-.79H356.4A.79.79,0,0,1,357.19,447.35Z"
                        />
                        <path
                          className="svg-fill"
                          d="M368.13,446.56a.79.79,0,0,1,.8.79.8.8,0,0,1-.8.8h-3.61a.8.8,0,0,1-.79-.8.79.79,0,0,1,.79-.79Z"
                        />
                      </svg>
                    </div>
                    <div className="illustration__layer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 596.6 554.39"
                      >
                        <path
                          className="svg-stroke-thin"
                          d="M376.55,459.39c7.93,0,8.81-5.74,8.81-12.83s-1.4-12.83-8.81-12.83H324v-6.79h54.61c10.84,0,14.07,8.79,14.07,19.62s-3.23,19.61-14.07,19.61H324v-6.78Z"
                        />
                        <path
                          className="svg-stroke-thin"
                          d="M326.19,433.73c6.48,0,6.48,25.66,0,25.66"
                        />
                        <path
                          className="svg-stroke-thin"
                          d="M374.5,426.94h54.61c10.83,0,14.06,8.79,14.06,19.62s-3.23,19.61-14.06,19.61H374.5"
                        />
                      </svg>
                    </div>
                    <div className="illustration__layer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 596.6 554.39"
                      >
                        <path
                          className="svg-bg"
                          d="M145.45,437.77v-15.2H136c1.87-3.51,3.09-8.38,3.09-15.13,0-20.73-11.45-23.83-18.27-23.83H103.31a17.29,17.29,0,0,0,.7-4.75v-.69c0-.25.27,1.66.53,1.59,6.29-1.9,14.74-7.75,17.66-14.23,5.24-11.61-2-26-12.28-30.88A18.38,18.38,0,0,0,104,333v-7H46v54.43a15.51,15.51,0,0,0,.32,3.15H11.58v15.21h5.57c1.9,3,1.9,14.27,0,17.24H11.58v15.21H21c-1.87,3.51-3.08,8.38-3.08,15.13,0,20.73,11.44,23.82,18.27,23.82H145.45V455h-5.58c-1.9-3-1.9-14.28,0-17.25Z"
                        />
                      </svg>
                    </div>
                    <div className="illustration__layer" data-drift="-4 -4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 596.6 554.39"
                      >
                        <path
                          className="svg-fill"
                          d="M146,429.64H132c5.82-2.84,7.76-9.94,7.76-18.29,0-10.83-3.23-19.61-14.06-19.61H96.5c3.54-1.47,6.12-5.83,6.12-9.73v-.68a7.42,7.42,0,0,1,5.45-7.08,17.27,17.27,0,0,0,10.54-9.48c3.78-8.2,1.11-17.48-6-20.75a13,13,0,0,0-10-.25v-6.69H57v46.54a8.64,8.64,0,0,0,5.72,8.12H20.6v6.78H73.11c7.4,0,8.8,5.74,8.8,12.83s-.87,12.83-8.8,12.83H20.6V431H34.68c-5.83,2.83-7.76,9.94-7.76,18.28,0,10.84,3.22,19.62,14.06,19.62H146v-6.78H93.53c-7.93,0-8.8-5.75-8.8-12.84s1.4-12.83,8.8-12.83H146Zm-43.42-79.43a8.34,8.34,0,0,1,6.73,0c4.49,2.08,6.19,8,3.79,13.19-2.06,4.47-6.47,7-10.52,6.27Z"
                        />
                        <path
                          className="svg-fill"
                          d="M135.88,439.37H98.1a.8.8,0,0,0,0,1.59h37.78a.8.8,0,1,0,0-1.59Z"
                        />
                        <path
                          className="svg-fill"
                          d="M100.48,457.62h37.78a.79.79,0,1,0,0-1.58H100.48a.79.79,0,1,0,0,1.58Z"
                        />
                        <path
                          className="svg-fill"
                          d="M90.73,451.73a.8.8,0,0,0,.79.79h43.57a.8.8,0,0,0,0-1.59H91.52A.8.8,0,0,0,90.73,451.73Z"
                        />
                        <path
                          className="svg-fill"
                          d="M116.51,446.47a.79.79,0,0,0,.79.79H138a.79.79,0,1,0,0-1.58H117.3A.79.79,0,0,0,116.51,446.47Z"
                        />
                        <path
                          className="svg-fill"
                          d="M105.57,445.68a.79.79,0,1,0,0,1.58h3.6a.79.79,0,1,0,0-1.58Z"
                        />
                        <path
                          className="svg-fill"
                          d="M68.54,401.47H30.76a.79.79,0,0,0-.79.79.79.79,0,0,0,.79.8H68.54a.79.79,0,0,0,.79-.8A.79.79,0,0,0,68.54,401.47Z"
                        />
                        <path
                          className="svg-fill"
                          d="M27.59,418.93a.79.79,0,0,0,.79.79H66.16a.79.79,0,0,0,.79-.79.79.79,0,0,0-.79-.8H28.38A.79.79,0,0,0,27.59,418.93Z"
                        />
                        <path
                          className="svg-fill"
                          d="M30.76,413.82a.8.8,0,0,0,.79.8H75.12a.8.8,0,0,0,0-1.59H31.55A.8.8,0,0,0,30.76,413.82Z"
                        />
                        <path
                          className="svg-fill"
                          d="M27.86,408.57a.79.79,0,0,0,.8.79H49.34a.79.79,0,0,0,0-1.58H28.66A.79.79,0,0,0,27.86,408.57Z"
                        />
                        <path
                          className="svg-fill"
                          d="M61.08,409.36a.79.79,0,0,0,0-1.58H57.47a.79.79,0,1,0,0,1.58Z"
                        />
                      </svg>
                    </div>
                    <div className="illustration__layer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 596.6 554.39"
                      >
                        <path
                          className="svg-stroke-thin"
                          d="M88.72,459.23c-7.92,0-8.8-5.75-8.8-12.84s1.4-12.83,8.8-12.83h52.51v-6.78H86.62c-10.83,0-14.06,8.78-14.06,19.61S75.79,466,86.62,466h54.61v-6.78Z"
                        />
                        <path
                          className="svg-stroke-thin"
                          d="M139.09,433.56c-6.48,0-6.48,25.67,0,25.67"
                        />
                        <path
                          className="svg-stroke-thin"
                          d="M90.78,426.78H36.17c-10.83,0-14.06,8.78-14.06,19.61S25.34,466,36.17,466H90.78"
                        />
                        <path
                          className="svg-stroke-thin"
                          d="M68.3,420.27c7.93,0,8.81-5.74,8.81-12.83s-1.41-12.83-8.81-12.83H15.79v-6.78H70.4c10.84,0,14.06,8.78,14.06,19.61s-3.22,19.62-14.06,19.62H15.79v-6.79Z"
                        />
                        <path
                          className="svg-stroke-thin"
                          d="M17.94,394.61c6.48,0,6.48,25.66,0,25.66"
                        />
                        <path
                          className="svg-stroke-thin"
                          d="M66.24,387.83h54.62c10.83,0,14.06,8.78,14.06,19.61s-3.23,19.62-14.06,19.62H66.24"
                        />
                        <path
                          className="svg-stroke-thin"
                          d="M51.76,331.82v46.54A8.63,8.63,0,0,0,60.39,387H88.73c4.77,0,8.63-5.47,8.63-10.24v-.69a7.43,7.43,0,0,1,5.45-7.08,17.25,17.25,0,0,0,10.54-9.47c3.78-8.2,1.11-17.49-6-20.75a13,13,0,0,0-10-.25v-6.69Zm45.6,32.61V345a8.32,8.32,0,0,1,6.72,0c4.5,2.07,6.2,8,3.8,13.18C105.82,362.62,101.41,365.12,97.36,364.43Z"
                        />
                        <line
                          className="svg-stroke-thin"
                          y1="467.84"
                          x2="524.99"
                          y2="466.97"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}
