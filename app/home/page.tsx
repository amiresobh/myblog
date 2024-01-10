import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <svg
        className="absolute top-[-900px] left-[-900px] "
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
            colorInterpolationFilters="sRGB"
            result="duotone"
          >
            <feFuncR
              type="table"
              tableValues="-0.054901960784313725 0.7647058823529411"
            ></feFuncR>
            <feFuncG
              type="table"
              tableValues="0.32941176470588235 0.9647058823529412"
            ></feFuncG>
            <feFuncB
              type="table"
              tableValues="0.45098039215686275 1.0274509803921568"
            ></feFuncB>
            <feFuncA type="table" tableValues="0 1"></feFuncA>
          </feComponentTransfer>
        </filter>
      </svg>
      <div className="section">
        <div
          className="relative"
          // style="position: relative"
          data-prlx="0 -0.125"
        >
          <div className="avatar-bg">
            <div className="avatar-wrap">
              <div className="bar-outer" data-prlx="0 -0.175">
                <div
                  className="bar stripes"
                  data-drift-center="x"
                  data-drift="-10 -10"
                ></div>
              </div>
              <div className="avatar avatar--intro avatar--ready">
                <svg className="base" viewBox="0 0 702 726">
                  <defs>
                    <clipPath id="clip--chin">
                      <path
                        className="svg-blank"
                        d="M351,538.29a133.13,133.13,0,0,1-53.48-11.11v70.14H404.49V527.18A133.22,133.22,0,0,1,351,538.29Z"
                      />
                    </clipPath>
                    <clipPath id="clip--eyebrow-l">
                      <rect
                        className="svg-blank"
                        x="224.5"
                        y="213.67"
                        width="87.98"
                        height="87.98"
                      />
                    </clipPath>
                    <clipPath id="clip--eyebrow-r">
                      <rect
                        className="svg-blank"
                        x="376.36"
                        y="220.19"
                        width="98.52"
                        height="85.33"
                      />
                    </clipPath>
                    <pattern
                      id="pattern--stubble"
                      data-name="SVGID 4 "
                      width="83.3"
                      height="97.7"
                      patternTransform="matrix(0.09, 0, 0, -0.09, -7212.72, 6963.89)"
                      patternUnits="userSpaceOnUse"
                      viewBox="0 0 83.3 97.7"
                    >
                      <rect className="svg-blank" width="83.3" height="97.7" />
                      <rect className="svg-blank" width="83.3" height="97.7" />
                      <rect
                        className="svg-fill"
                        x="41.6"
                        y="-24.5"
                        width="83.3"
                        height="48.9"
                      />
                      <circle className="svg-bg" cx="66.3" cy="-0.3" r="17" />
                      <rect
                        className="svg-fill"
                        x="-41.7"
                        y="-24.5"
                        width="83.3"
                        height="48.9"
                      />
                      <rect
                        className="svg-fill"
                        y="24.3"
                        width="83.3"
                        height="48.9"
                      />
                      <circle className="svg-bg" cx="24.6" cy="48.6" r="17" />
                      <rect
                        className="svg-fill"
                        x="41.6"
                        y="73.2"
                        width="83.3"
                        height="48.9"
                      />
                      <circle className="svg-bg" cx="66.3" cy="97.4" r="17" />
                      <rect
                        className="svg-fill"
                        x="-41.7"
                        y="73.2"
                        width="83.3"
                        height="48.9"
                      />
                    </pattern>
                  </defs>
                </svg>
                <div className="avatar__animwrap">
                  <div className="layer">
                    <div className="layer head__rotation">
                      <svg viewBox="0 0 702 726">
                        <path
                          className="bgmask mask__head"
                          d="M539.56,330a34.69,34.69,0,0,0-19.39-18.39l-6.88-2.53a33.49,33.49,0,0,0-15.39-2.32V294h-1c2.83-9.45,5.16-22.14,7.05-38.3,2.38-20.48,3.18-39.58,3.21-40.4l.09-2.22,21,11.38-9.74-27.08c-7.53-20.95-17.9-38.58-31-52.75l16.93,5.19-13.62-24C472.1,92.65,445,73.13,411.47,68.2l10.84-6.61-33.48-2.85a140.09,140.09,0,0,0-34.67,1.18l9.89-9.21-35.32,5.42C286,62.69,252.41,82.93,229,116.29c-17.63,25.13-24.75,51.62-27.45,65.3a34.93,34.93,0,0,0,4.26,26.67l-6.33,1.49-.19,8.5c-.21,9.27-.74,50.19,5.12,75.75h-.32v12.78a33.55,33.55,0,0,0-15.44,2.31l-6.8,2.5-.11,0a34.93,34.93,0,0,0-20.16,45c3.32,9,9.87,26.53,13.2,35.41a35.1,35.1,0,0,0,37.06,22.55v6.74c0,76.73,62.42,139.17,139.17,139.18S490.19,498.06,490.2,421.32V414.6a35.11,35.11,0,0,0,36.9-22.54c3.34-8.91,9.87-26.41,13.19-35.37A34.69,34.69,0,0,0,539.56,330Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg viewBox="0 0 702 726">
                        <g className="backgroundMask">
                          <path
                            className="bgmask mask__shoulders"
                            d="M588.92,668.08a85,85,0,0,0-8.71-31.4c-7.52-15-23-34-54.27-39.1-45.62-7.42-75.42-17.86-87.34-22.57-3.41-9.62-9.35-27.46-12.91-44.29A11,11,0,0,0,408.62,524H295.42a11,11,0,0,0-17.06,6.72,368.9,368.9,0,0,1-12.06,41.84l-.62.28c-5.72,2.55-37,15.71-92.58,24.74-31.23,5.08-46.75,24.07-54.27,39.1a85.13,85.13,0,0,0-8.7,31.4l0,.35.61,17a17.1,17.1,0,0,0,17.66,16.45,16.83,16.83,0,0,0,6-1.33,277.13,277.13,0,0,1,82.46-20c45.92-3.82,89.17,4.51,128.55,24.76,34.77,17.85,73,23.82,108.61,23.82,48.52,0,92.08-11.09,115.1-18.24a29,29,0,0,0,20.31-28.66Z"
                          />
                        </g>
                        <g className="shoulders">
                          <path
                            className="shading svg-fill"
                            d="M585.93,665.46s-2.24-53.35-55.43-62c-54-8.78-86-21.62-93.73-24.93,1,18-52,61.2-80.63,61.2h-.21c-28.89,0-82.53-43.93-80.59-61.67-5.25,2.34-37.82,16.14-94.79,25.4-53.2,8.66-55.43,62-55.43,62l.59,16.67a8.07,8.07,0,0,0,11.2,7.15c30.86-13,123.49-43.91,218.61,5,80,41.08,180,16.46,216.92,5a19.94,19.94,0,0,0,14-19.74Z"
                          ></path>
                          <path
                            d="M426.35,566.53s33.95,15.6,97.85,25.75c54.46,8.66,56.75,62,56.75,62"
                            className="svg-stroke"
                          ></path>
                          <path
                            d="M277,566.53s-34,15.6-97.85,25.75c-54.46,8.66-56.75,62-56.75,62"
                            className="svg-stroke"
                          ></path>
                        </g>
                        <g className="neck">
                          <g className="mask mask--chin">
                            <path
                              className="neck__shadow svg-fill"
                              d="M298.68,462v65.2c1.52,17.26,24.37,31,52.33,31s50.78-13.71,52.3-31h.08V462Z"
                            />
                          </g>
                          <path
                            className="svg-stroke"
                            d="M290.14,522.34c-5.23,24.68-15.39,51.07-15.39,51.07-3.19,16,48.49,57.59,76.17,57.59h.2c27.68,0,79.36-41.62,76.17-57.59,0,0-10.16-26.39-15.38-51.08"
                          />
                          <path
                            className="neck__adamsapple svg-stroke"
                            d="M332.93,569.71a28.43,28.43,0,0,0,36.14,0"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="head layer">
                    <div className="head__y">
                      <div className="head__yaw">
                        <div className="head__rotation">
                          <div className="shading face-tilt">
                            <svg id="" className="" viewBox="0 0 702 726">
                              <ellipse
                                className="svg-fill"
                                cx="211.09"
                                cy="371.36"
                                rx="8.4"
                                ry="12.43"
                              />
                              <ellipse
                                className="svg-fill"
                                cx="500.51"
                                cy="371.36"
                                rx="8.4"
                                ry="12.43"
                              />
                            </svg>
                          </div>
                          <div className="beard">
                            <svg id="" className="" viewBox="0 0 702 726">
                              <path
                                className="beard__tache svg-pattern"
                                d="M365.9,425.2a23.71,23.71,0,0,1-29.83,0c-25.53,1.6-44.4,18.82-44.4,18.82A187.24,187.24,0,0,0,410,444S391.3,426.82,365.9,425.2Z"
                              />
                              <path
                                className="beard__chin svg-pattern"
                                d="M351,514.25h0c-68.51,0-124-46.38-124-103.6v3.58A124.06,124.06,0,0,0,351,538.29h0A124.06,124.06,0,0,0,475.08,414.23v-3.58C475.08,467.87,419.54,514.25,351,514.25Z"
                              />
                              <rect
                                className="beard__lip svg-pattern"
                                x="325.2"
                                y="480.7"
                                width="46.65"
                                height="12.1"
                              />
                            </svg>
                          </div>
                          <div className="eyebrows face-tilt">
                            <div className="eyebrow eyebrows__left">
                              <svg id="" className="" viewBox="0 0 702 726">
                                <path
                                  className="svg-fill"
                                  d="M302.61,286.93C290,280.19,257.47,268.87,225,301.6v75.56h85.51V277.83l-1,5.81A4.8,4.8,0,0,1,302.61,286.93Z"
                                />
                                <path
                                  className="brow svg-fill-stroke"
                                  d="M310.54,277.83l-1,5.81a4.8,4.8,0,0,1-7,3.29c-12.68-6.77-45.49-18.19-78.11,15.2,1.65-17.62,28.26-47.23,83-29.23A4.37,4.37,0,0,1,310.54,277.83Z"
                                />
                              </svg>
                            </div>
                            <div className="eyebrow eyebrows__right">
                              <svg id="" className="" viewBox="0 0 702 726">
                                <path
                                  className="svg-fill"
                                  d="M386.13,276.58a4.74,4.74,0,0,1-6.72-3.33v85.5h94.43V291.64C442.9,257.6,399,270.43,386.13,276.58Z"
                                />
                                <path
                                  className="brow svg-fill-stroke"
                                  d="M378.58,267.19l.78,5.81a4.74,4.74,0,0,0,6.77,3.58c13-6.2,57.4-19.17,88.37,15.77-3.29-35.13-44.14-43.45-92.72-29.9A4.33,4.33,0,0,0,378.58,267.19Z"
                                />
                              </svg>
                            </div>
                            <div className="browmask">
                              <svg id="" className="" viewBox="0 0 702 726">
                                <path
                                  className="bgmask"
                                  d="M375.2,305c-4.7-1.7-11.5-2.8-21-2.8-4.6,0-14.8.3-23.2,2.8H216.1v42.9c0,28.4,20.2,45.1,55.6,46.2v.1h3.8V394c35.4-1.1,55.6-17.8,55.6-46.2V319c2.5-1.4,9.9-3.4,21-3.6,12.1-.3,18.8,1.7,20.8,3v29.5c0,28.4,20.2,45.1,55.6,46.2v.1h3.8V394c35.4-1.1,55.6-17.8,55.6-46.2V305Z"
                                />
                                <path
                                  className="svg-fill"
                                  d="M498.27,222.15l-11.87-3c-.71-2-1.44-4-2.13-5.9.68.68,1.26,1.35,1.94,2a169.32,169.32,0,0,0-4.45-19.16,212.14,212.14,0,0,1,28.16,12.68c-14.52-40.36-39.2-63.5-68-75.11a175.25,175.25,0,0,1,42,7.45C457.56,94.72,417.39,84.84,378,91.52c4.55-3.1,9.78-6.39,15.49-9.87-31.84-2.71-55.85,5.9-73.66,18.2,5-5.52,11-14.33,18-20.81C247.63,92.88,227.69,171,223.53,192.28c-4.77,19.32,15.49,30.1,15.49,30.1s39.68-22.17,95.33-33.69c25.65,3.88,52.46,10,68.72,24.49A167.64,167.64,0,0,0,389.71,182c8.71-.1,17.62,0,26.62.58,25.47,8.3,52.25,22.14,69.88,37.55-.24,6.42-1.59,42.5-3.55,86.33H379.26c-4.55-1.64-11.13-2.71-20.32-2.71-4.46,0-14.33.29-22.46,2.71H231.39c3.58-48,6.56-84.68,6.56-84.68l-16.35,3.87s-1.39,61.69,7.91,80.81h-4.24V348c0,27.49,19.55,43.65,53.82,44.72v.1h3.67v-.2c34.27-1.06,53.82-17.23,53.82-44.71V320c2.26-1.26,8.68-3,18.29-3.42V434.29c.32,0,
                        .64,0,1,0a23.66,23.66,0,0,0,15.1-5.42c9.48-3.2,15.87-11.13,15.19-20.23l-3-37.53c8.24,13.26,24.64,20.84,47.72,21.56v.1h3.68v-.2c34.26-1.06,53.81-17.23,53.81-44.71V306.48h-4C495.64,288.65,498.27,222.15,498.27,222.15ZM324,348h-.1c0,11.13-4,19.07-12.1,24.39-7.16,4.75-17.81,7.36-30.78,7.55-13-.19-23.61-2.8-30.78-7.55-8.13-5.32-12.09-13.35-12.09-24.39V319.26H324Zm151.66,0h-.1c0,11.13-4,19.07-12.1,24.39-7.16,4.75-17.8,7.36-30.77,7.55-13-.19-23.62-2.8-30.78-7.55-8.13-5.32-12.1-13.35-12.1-24.39V319.26h85.85Z"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="ears">
                            <div className="ears__left">
                              <svg id="" className="" viewBox="0 0 702 726">
                                <path
                                  className="svg-stroke"
                                  d="M231.57,390.59l-11.43,5.32a23.19,23.19,0,0,1-29.71-13.74c-3.19-8.52-9.58-25.65-12.77-34.26A23.15,23.15,0,0,1,191,318l6.58-2.42c8.91-3.39,15.78-1.64,22,4.94"
                                />
                                <path
                                  className="svg-stroke"
                                  d="M198.66,364c-6,9.3,6.92,17.76,13.06,11.62,9.88-9.88-6.9-31.17-19.06-31.17"
                                />
                              </svg>
                            </div>
                            <div className="ears__right">
                              <svg id="" className="" viewBox="0 0 702 726">
                                <path
                                  className="svg-stroke"
                                  d="M482.36,320.52c6.2-6.58,13.07-8.33,22-4.94l6.59,2.42a23.15,23.15,0,0,1,13.35,29.91c-3.19,8.61-9.58,25.74-12.77,34.26a23.2,23.2,0,0,1-29.72,13.74l-11.42-5.32"
                                />
                                <path
                                  className="svg-stroke"
                                  d="M509.27,344.42c-12.16,0-28.94,21.29-19.07,31.17,6.15,6.14,19.07-2.32,13.07-11.62"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="nose face-tilt">
                            <svg id="" className="" viewBox="0 0 702 726">
                              <path
                                className="nose__breath svg-stroke"
                                d="M323.63,367.83l-2.93,37c-.67,9.1,5.72,17,15.2,20.23a23.74,23.74,0,0,0,30.2,0c9.39-3.2,15.87-11.13,15.19-20.23"
                              />
                            </svg>
                          </div>
                          <div className="face-tilt">
                            <div className="mouth">
                              <svg id="" className="" viewBox="0 0 702 726">
                                <path
                                  className="svg-stroke"
                                  d="M300.33,467.31c25.75,8.49,90,6.12,99.4-8.42"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="hair face-tilt">
                            <svg id="" className="" viewBox="0 0 702 726">
                              <path
                                className="svg-stroke"
                                d="M409.55,174.85c25.85,8.42,53,22.56,70.66,38.23-.87-2.61-1.84-5.12-2.71-7.54.68.67,1.26,1.35,1.93,2A170,170,0,0,0,475,188.4a214.86,214.86,0,0,1,28.17,12.68c-14.52-40.36-39.2-63.49-68-75.1a174.68,174.68,0,0,1,42,7.45C450.79,87,410.62,77.1,371.23,83.78c4.55-3.1,9.77-6.39,15.48-9.87-31.84-2.71-55.84,5.9-73.65,18.19,5-5.51,11-14.32,18-20.81-90.2,13.84-110.14,92-114.3,113.24-4.77,19.33,15.48,30.1,15.48,30.1s39.68-22.16,95.34-33.68c25.64,3.87,52.45,10,68.71,24.49a168.73,168.73,0,0,0-13.35-31.17C391.65,174.18,400.55,174.27,409.55,174.85Z"
                              />
                              <path
                                className="svg-stroke"
                                d="M475.78,301c12.82-13.38,15.71-86.6,15.71-86.6l-12-3S478,251.56,475.78,301Z"
                              />
                              <path
                                className="svg-stroke"
                                d="M231.18,214.05l-16.36,3.87s-1.55,68.82,9.58,83.63C228.08,252.19,231.18,214.05,231.18,214.05Z"
                              />
                            </svg>
                          </div>
                          <div className="eyes face-tilt">
                            <div className="eyes__x">
                              <div className="eyes__y">
                                <div className="eyes__left eye">
                                  <svg id="" className="" viewBox="0 0 702 726">
                                    <line
                                      className="eye__lid svg-stroke"
                                      x1="269.51"
                                      y1="345.29"
                                      x2="279.28"
                                      y2="345.29"
                                    />
                                    <path
                                      className="eye__dot svg-fill-stroke"
                                      d="M274.44,323.52a5.81,5.81,0,1,1-5.81,5.8,5.82,5.82,0,0,1,5.81-5.8m0-3.87a9.68,9.68,0,1,0,9.68,9.67,9.71,9.71,0,0,0-9.68-9.67Z"
                                    />
                                  </svg>
                                </div>
                                <div className="eyes__right eye">
                                  <svg id="" className="" viewBox="0 0 702 726">
                                    <line
                                      className="eye__lid svg-stroke"
                                      x1="425.23"
                                      y1="345.29"
                                      x2="435.01"
                                      y2="345.29"
                                    />
                                    <path
                                      className="eye__dot svg-fill-stroke"
                                      d="M430.17,323.52a5.81,5.81,0,1,1-5.81,5.8,5.83,5.83,0,0,1,5.81-5.8m0-3.87a9.68,9.68,0,1,0,9.68,9.67,9.71,9.71,0,0,0-9.68-9.67Z"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <svg id="" className="" viewBox="0 0 702 726">
                              <path
                                className="eyes__glasses svg-stroke"
                                d="M373.45,301.64c-4.55-1.64-11.13-2.71-20.32-2.71-4.45,0-14.33.29-22.46,2.71H219.47v41.53c0,27.48,19.55,43.65,53.81,44.71v.1H277v-.2c34.26-1.06,53.81-17.22,53.81-44.71V315.19c2.42-1.35,9.58-3.29,20.33-3.48,11.71-.29,18.19,1.65,20.13,2.9v28.56c0,27.48,19.55,43.65,53.81,44.71v.1h3.68v-.2c34.26-1.06,53.81-17.22,53.81-44.71V301.64Zm-55.36,41.53c0,11.13-4,19.06-12.1,24.39-7.16,4.74-17.81,7.35-30.77,7.54-13-.19-23.62-2.8-30.78-7.54-8.13-5.33-12.1-13.36-12.1-24.39V314.42h85.85v28.75Zm151.67,0c0,11.13-4,19.06-12.1,24.39-7.17,4.74-17.81,7.35-30.78,7.54-13-.19-23.62-2.8-30.78-7.54C388,362.23,384,354.2,384,343.17V314.42h85.85v28.75Z"
                              />
                            </svg>
                          </div>
                          <div className="chin">
                            <svg id="" className="" viewBox="0 0 702 726">
                              <path
                                className="svg-stroke"
                                d="M227,392.74v21.49A124.06,124.06,0,0,0,351,538.29h0A124.06,124.06,0,0,0,475.08,414.23V392.5"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <header className="page-header page-header--masthead">
          <div className="page-header__inr">
            <div
              className="page-header__content"
              data-reveal="is-onscreen"
              data-prlx="0 0.25"
            >
              <h1
                className={`!font-IranianSans page-header__title lh-tight t-primary t-outline text-center md:text-left `}
              >
                  ،سلام &#8203;
                  <br />
                  <span className="dot">.</span>
                  <b>من امیرمحمدم</b>

               </h1>
              <p
                className={`!font-IranianSans page-header__lede lh-loose t-primary u-hide:s u-hide:m text-right font-bold`}
              >
                پزشک، طراح وب سایت و توسعه دهنده نرم افزار

              </p>
              <span className="page-header__scroll" aria-hidden="true">
                <span>
                  <span>S</span> <span>c</span> <span>r</span>
                  <span>o</span> <span>l</span> <span>l</span>
                </span>
              </span>
            </div>
          </div>
        </header>
        <div className="panels" data-reveal="is-onscreen">
          <div className="panels__main">
            <div className="article-heading">
              <h2
                className={`font-IranianSans article-heading__title t-heading t-medium:s t-big:m t-bigger:l text-right`}
              >
                <span className="font-IranianSans">پیشنهاد کاری دارید؟</span>
              </h2>
            </div>
            <div className="flow reveal-content ">
              <p className={`text-right !mt-10 !font-IranianSans`}>
                  از طراحی وب سایت ساده تک صفحه ای برای برند شما تا طراحی سیستم
                  های مقیاس پذیر برای ارائه خدمات، تیم ما میتونه در این مسیر به
                  شما کمک کنه

              </p>
              <Link href="work" className="btn">
                <span className={`font-IranianSans  btn__label`}>شیوه کار</span>
                <span
                  className="btn__fill stripes"
                  data-drift="-10 -12"
                  aria-hidden="true"
                >
                  شیوه کار
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
