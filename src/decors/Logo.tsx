import withMd5 from '../assets/logo-w5.svg';
import noMd5 from '../assets/logo-n5.svg';
import '../assets/logo-n5.svg';
import React from "react";

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    includeMd5: boolean
}

const Logo = ({ includeMd5, ...props }: LogoProps) => {
    const src = includeMd5 ? withMd5 : noMd5;
    return (
        <img alt='Logo dpago.dev' src={src} {...props}/>
    );
};

export default Logo;