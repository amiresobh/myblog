import React from "react";

//here we define RTLP component which gets className as prop and returns div with that className
const RTLP = ({className, children}:{className?:string, children?:React.ReactNode}) => {
    return <p className={className} dir="rtl">{children}</p>;
};

export default RTLP