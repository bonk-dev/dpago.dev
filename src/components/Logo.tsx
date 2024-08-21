import React from "react";

interface LogoProps extends React.SVGAttributes<SVGElement> {
    includeMd5: boolean
}

const Logo = ({ includeMd5, ...props }: LogoProps) => {
    const className = (props.className ?? '') + ' text-neutral-800 dark:text-stone-300';

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="258.844"
            height="224.3"
            version="1.1"
            viewBox="0 0 68.486 59.346"
            xmlSpace="preserve"
            {...props}
            className={className}
        >
            <defs>
                <radialGradient
                    id="paint0_radial_6_78-9-9"
                    cx="0"
                    cy="0"
                    r="1"
                    fx="0"
                    fy="0"
                    gradientTransform="matrix(0 19.92643 -22.67407 0 96.513 130.13)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#5F00DA"></stop>
                    <stop offset="1" stopColor="#320074"></stop>
                </radialGradient>
            </defs>
            <g transform="translate(-70.156 -79.103)">
                <g transform="translate(7.73 -11.096)">
                    <path
                        fill="url(#paint0_radial_6_78-9-9)"
                        strokeWidth="0.265"
                        d="M96.513 110.154l17.3 29.964h-34.6z"
                    ></path>
                    <g
                        fill="currentColor"
                        fillOpacity="1"
                        fillRule="evenodd"
                        stroke="none"
                        strokeDasharray="none"
                        strokeLinejoin="miter"
                        strokeOpacity="1"
                        transform="translate(-6.709 -8.071)"
                    >
                        <path
                            strokeWidth="0.236"
                            d="M157.803 174.929H164.035V180.84H157.803z"
                            opacity="1"
                            transform="skewX(-29.361) scale(1 .87155)"
                        ></path>
                        <path
                            strokeWidth="0.236"
                            d="M-48.953 174.929H-42.721000000000004V180.84H-48.953z"
                            opacity="1"
                            transform="matrix(-1 0 .49031 .87155 0 0)"
                        ></path>
                        <path
                            strokeWidth="0.265"
                            d="M74.845 147.697l22.536-39.033 3.054 5.291-19.481 33.743z"
                            opacity="1"
                        ></path>
                        <path
                            strokeWidth="0.265"
                            d="M100.434 103.373l25.384 44.326h6.089l-28.538-49.43z"
                            opacity="1"
                        ></path>
                        <path
                            strokeWidth="0.265"
                            d="M80.736 157.616l3.09-5.16h38.838l2.98 5.16z"
                            opacity="1"
                        ></path>
                    </g>

                    {includeMd5 ? (
                        <text
                            xmlSpace="preserve"
                            style={{
                                fontVariantLigatures: "normal",
                                fontVariantCaps: "normal",
                                fontVariantNumeric: "normal",
                                fontVariantEastAsian: "normal"
                            }}
                            x="96.405"
                            y="123.265"
                            fill="#913eff"
                            fillOpacity="1"
                            fillRule="evenodd"
                            stroke="none"
                            strokeDasharray="none"
                            strokeLinejoin="miter"
                            strokeOpacity="1"
                            strokeWidth="0.265"
                            fontFamily="Monospace"
                            fontSize="3.175"
                            fontStretch="normal"
                            fontStyle="normal"
                            fontVariant="normal"
                            fontWeight="bold"
                            letterSpacing="0"
                            opacity="1"
                            textAnchor="start"
                            wordSpacing="0"
                        >
                            <tspan
                                style={{
                                    fontVariantLigatures: "normal",
                                    fontVariantCaps: "normal",
                                    fontVariantNumeric: "normal",
                                    fontVariantEastAsian: "normal"
                                }}
                                x="96.405"
                                y="123.265"
                                fill="#913eff"
                                fillOpacity="1"
                                strokeWidth="0.265"
                                fontFamily="Monospace"
                                fontSize="2.117"
                                fontStretch="normal"
                                fontStyle="normal"
                                fontVariant="normal"
                                fontWeight="bold"
                                textAnchor="middle"
                            >
                                a0a
                            </tspan>
                            <tspan
                                style={{
                                    fontVariantLigatures: "normal",
                                    fontVariantCaps: "normal",
                                    fontVariantNumeric: "normal",
                                    fontVariantEastAsian: "normal"
                                }}
                                x="96.405"
                                y="127.234"
                                fill="#913eff"
                                fillOpacity="1"
                                strokeWidth="0.265"
                                fontFamily="Monospace"
                                fontSize="2.117"
                                fontStretch="normal"
                                fontStyle="normal"
                                fontVariant="normal"
                                fontWeight="bold"
                                textAnchor="middle"
                            >
                                29c2f65
                            </tspan>
                            <tspan
                                style={{
                                    fontVariantLigatures: "normal",
                                    fontVariantCaps: "normal",
                                    fontVariantNumeric: "normal",
                                    fontVariantEastAsian: "normal"
                                }}
                                x="96.405"
                                y="131.202"
                                fill="#913eff"
                                fillOpacity="1"
                                strokeWidth="0.265"
                                fontFamily="Monospace"
                                fontSize="2.117"
                                fontStretch="normal"
                                fontStyle="normal"
                                fontVariant="normal"
                                fontWeight="bold"
                                textAnchor="middle"
                            >
                                be9fc40a4
                            </tspan>
                            <tspan
                                style={{
                                    fontVariantLigatures: "normal",
                                    fontVariantCaps: "normal",
                                    fontVariantNumeric: "normal",
                                    fontVariantEastAsian: "normal"
                                }}
                                x="96.405"
                                y="135.171"
                                fill="#913eff"
                                fillOpacity="1"
                                strokeWidth="0.265"
                                fontFamily="Monospace"
                                fontSize="2.117"
                                fontStretch="normal"
                                fontStyle="normal"
                                fontVariant="normal"
                                fontWeight="bold"
                                textAnchor="middle"
                            >
                                a30781c205d48
                            </tspan>
                        </text>
                    ) : null}
                </g>
            </g>
        </svg>
    );
};

export default Logo;