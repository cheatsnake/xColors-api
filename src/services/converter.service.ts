import { TColor } from "../types/color.types";
import {
    hexColorValidation,
    hslColorValidation,
    rgbColorValidation,
} from "./validation.service";

class ConverterService {
    convertHexToRgb(hex: TColor): TColor {
        const h = hexColorValidation(hex);
        if (!h) return null;

        const rgb: number[] = [];

        for (let i = 0; i < 6; i += 2) {
            const elem = h.slice(i, i + 2);
            rgb.push(parseInt(elem, 16));
        }

        return `rgb(${rgb.join(", ")})`;
    }

    convertRgbToHsl(rgb: TColor): TColor {
        const rgbArr = rgbColorValidation(rgb);

        if (!rgbArr || rgbArr.length < 3) return null;

        const r = +rgbArr[0] / 255;
        const g = +rgbArr[1] / 255;
        const b = +rgbArr[2] / 255;
        const maxColor = Math.max(r, g, b);
        const minColor = Math.min(r, g, b);

        let L = (maxColor + minColor) / 2;
        let S = 0;
        let H = 0;

        if (maxColor != minColor) {
            if (L < 0.5) {
                S = (maxColor - minColor) / (maxColor + minColor);
            } else {
                S = (maxColor - minColor) / (2.0 - maxColor - minColor);
            }

            if (r == maxColor) {
                H = (g - b) / (maxColor - minColor);
            } else if (g == maxColor) {
                H = 2.0 + (b - r) / (maxColor - minColor);
            } else {
                H = 4.0 + (r - g) / (maxColor - minColor);
            }
        }

        L = Math.round(L * 100);
        S = Math.round(S * 100);
        H = Math.round(H * 60);

        if (H < 0) H += 360;

        return `hsl(${H}, ${S}%, ${L}%)`;
    }

    convertHslToRgb(hsl: TColor): TColor {
        const hslArr = hslColorValidation(hsl);
        if (!hslArr || hslArr.length < 3) return null;

        let h = +hslArr[0];
        let s = +hslArr[1];
        let l = +hslArr[2];

        s /= 100;
        l /= 100;

        const a = s * Math.min(l, 1 - l);
        const convert = (n: number, k = (n + h / 30) % 12) => {
            return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        };
        const r = Math.round(convert(0) * 255);
        const g = Math.round(convert(8) * 255);
        const b = Math.round(convert(4) * 255);

        return `rgb(${r}, ${g}, ${b})`;
    }

    convertRgbToHex(rgb: TColor): TColor {
        const rgbArr = rgbColorValidation(rgb);

        if (!rgbArr || rgbArr.length < 3) return null;

        const r = +rgbArr[0],
            g = +rgbArr[1],
            b = +rgbArr[2];

        return (
            "#" +
            ((r << 16) + (g << 8) + b)
                .toString(16)
                .padStart(6, "0")
                .toUpperCase()
        );
    }
}

export default new ConverterService();
