import React from 'react';

interface CircleProgressProps {
    progress: number;
    color: string;
}

const CircleProgress: React.FC<CircleProgressProps> = ({ progress, color }) => {
    const radius = 50;
    const stroke = 10;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <svg height={radius * 2} width={radius * 2}>
            <circle
                stroke="lightgrey"
                fill="transparent"
                strokeWidth={stroke}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            <circle
                stroke={color}
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={`${circumference} ${circumference}`}
                style={{ strokeDashoffset, transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="20"
                fill={color}
            >
                {`${progress}%`}
            </text>
        </svg>
    );
};

export default CircleProgress;