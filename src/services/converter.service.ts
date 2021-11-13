import { TColor } from "../types/color.types";
import { hexColorValidation, hslColorValidation, rgbColorValidation } from "./validation.service";

class ConverterService {
    convertHexToRgb(hex: TColor): TColor {
        const h = hexColorValidation(hex);
        if (!h) return null;

        const rgb: number[] = [];
    
        for(let i = 0; i < 6; i += 2) {
            const elem = h.slice(i, i + 2);
            rgb.push(parseInt(elem, 16));
        }
    
        return `rgb(${rgb.join(', ')})`;
    }
    
    convertRgbToHsl(rgb: TColor): TColor {
        const rgbArr = rgbColorValidation(rgb);
        
        if(!rgbArr || rgbArr.length < 3) return null; 

        const r = +rgbArr[0] / 255,
              g = +rgbArr[1] / 255,
              b = +rgbArr[2] / 255;
        const minLig = Math.min(r, g, b),
              maxLig = Math.max(r, g, b),
              delta = maxLig - minLig,
              HSL = {hue: 0, sat: 0, lig: maxLig};
        let del_R, del_G, del_B;
    
        if( delta !== 0 ) {
            HSL.sat = delta / maxLig;
            del_R = (((maxLig - r) / 6) + (delta / 2)) / delta;
            del_G = (((maxLig - g) / 6) + (delta / 2)) / delta;
            del_B = (((maxLig - b) / 6) + (delta / 2)) / delta;
    
            if (r === maxLig) HSL.hue = del_B - del_G;
                else if (g === maxLig) HSL.hue = (1 / 3) + del_R - del_B;
                else if (b === maxLig) HSL.hue = (2 / 3) + del_G - del_R;
    
            if (HSL.hue < 0) HSL.hue += 1;
            if (HSL.hue > 1) HSL.hue -= 1;
        }
    
        HSL.hue = Math.round(HSL.hue * 360);
        HSL.sat = Math.round(HSL.sat * 100);
        HSL.lig = Math.round(HSL.lig * 100);
    
        return `hsl(${HSL.hue}, ${HSL.sat}%, ${HSL.lig}%)`;
    }
    
    convertHslToRgb(hsl: TColor): TColor {
        const hslArr = hslColorValidation(hsl);
        if(!hslArr || hslArr.length < 3) return null; 
        
        let h = +hslArr[0];
        let s = +hslArr[1];
        let l = +hslArr[2];

        s /= 100;
        l /= 100;
        const k = (n: number) => (n + h / 60) % 6;
        const f = (n: number) => l * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
        return `rgb(${Math.round(255 * f(5))}, ${Math.round(255 * f(3))}, ${Math.round(255 * f(1))})`;
    }

    convertRgbToHex(rgb: TColor): TColor {
        const rgbArr = rgbColorValidation(rgb);
        
        if(!rgbArr || rgbArr.length < 3) return null; 

        const r = +rgbArr[0],
              g = +rgbArr[1],
              b = +rgbArr[2];
        
        return '#' + ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0').toUpperCase();
    }

}

export default new ConverterService();
