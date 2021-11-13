import { TColor } from "../types/color.types";

export const generateHexNumber = (): string =>
    Math.floor(Math.random() * 16).toString(16).toUpperCase();

export const generateHexColor = (): string =>
    '#' + Array.from({length: 6}).map(generateHexNumber).join('');

export const randomNumber = (max: number, min: number): number => 
    Math.round(Math.random() * (max - min)) + min;

export const randomLightness  = (type = 'any') => {
    switch (type) {
        case 'dark': return randomNumber(80, 50);
        case 'light': return randomNumber(100, 90);
        default: return randomNumber(100, 50);
    }
}

export const hueData = (key: string) => {
    switch (key) {
        case 'red': return 0;
        case 'pink': return 320;
        case 'purple': return 280;
        case 'navy': return 240;
        case 'blue': return 210;
        case 'aqua': return 190;
        case 'green': return 140;
        case 'lime': return 80;
        case 'yellow': return 60;
        case 'orange': return 30;
        default: 
            const num = Number(key);
            return num >= 0 && num < 360 ? num : randomNumber(359, 0);
    }
}









