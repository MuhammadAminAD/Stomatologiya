import React from 'react';

interface BarsIconProps {
    className?: string;
    width?: number | string;
    height?: number | string;
}

export default function BarsIcon({ className = '', width = 16, height = 16 }: BarsIconProps) {
    return (
        <svg
            data-testid="geist-icon"
            className={className}
            width={width}
            height={height}
            viewBox="0 0 16 16"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 2H1.75H14.25H15V3.5H14.25H1.75H1V2ZM1 12.5H1.75H14.25H15V14H14.25H1.75H1V12.5ZM1.75 7.25H1V8.75H1.75H14.25H15V7.25H14.25H1.75Z"
                fill="currentColor"
            />
        </svg>
    );
}