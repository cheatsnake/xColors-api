import { IColors } from "../types/color.types";
import { generateHexColor, hueData, randomLightness, randomNumber } from "./helper.service";
import ConverterService from "./converter.service";

class ColorService {
    getRandomColor(number = 1): IColors | IColors[]  {
        const arr = [];
        for(let i = 0; i < number; i++) {
            const hex = generateHexColor();
            const rgb = ConverterService.convertHexToRgb(hex);
            const hsl = ConverterService.convertRgbToHsl(rgb);
            arr.push({hex, rgb, hsl})
        }
        return arr.length > 1 ? arr : arr[0];
    }
    getRandomShade(hue:string, type: string, number: number): IColors | IColors[] {
        const arr = [];
    
        for (let i = 0; i < number; i++) {
            const saturation = randomNumber(100, 50);
            const hsl = `hsl(${hueData(hue)}, ${saturation}%, ${randomLightness(type)})`;
            const rgb = ConverterService.convertHslToRgb(hsl);
            const hex = ConverterService.convertRgbToHex(rgb);
            arr.push({hex, rgb, hsl})
        }
        return arr.length > 1 ? arr : arr[0];
    }
}


export default new ColorService();