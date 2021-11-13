import { TColor } from "../types/color.types";

export const requestValidation = (key: string, value: string): TColor => {
    switch (key) {
        case 'hex':
            return `#${value.toUpperCase().slice(0, 6)}`;

        case 'rgb':
            const rgbArr = String(rgbColorValidation(value)).split(',');
            return rgbArr 
                ? `rgb(${rgbArr.join(', ')})` 
                : null;
    
        case 'hsl':
            const hslArr = String(hslColorValidation(value)).split(',');
            return hslArr 
                ? `hsl(${hslArr[0]}, ${hslArr[1]}%, ${hslArr[2]}%)`
                : null;

        default:
            return null;
    }
}

export const hexColorValidation = (hex: TColor): TColor => {
    if (hex === null || hex.length < 7) return null;
    const h = hex.slice(1);
    return /[g-zG-Z\W]+/igm.test(h) ? null : h;
}

export const rgbColorValidation = (color: TColor): string[] | null => {
    if (!color || !(/\d+/gi).test(color)) return null;

    const code = color.match(/\d+/gi)!.join(', ');
    const arr = code.split(', ');

    if (+arr[0] > 255 || !arr[0]) return null;
    if (+arr[1] > 255 || !arr[1]) return null;
    if (+arr[2] > 255 || !arr[2]) return null;

    return [arr[0], arr[1], arr[2]];
}

export const hslColorValidation = (color: TColor): string[] | null => {
    if (!color || !(/\d+/gi).test(color)) return null;

    const code = color.match(/\d+/gi)!.join(', ');
    const arr = code.split(', ');

    if (+arr[0] > 360 || !arr[0]) return null;
    if (+arr[1] > 100 || !arr[1]) return null;
    if (+arr[2] > 100 || !arr[2]) return null;

    return [arr[0], arr[1], arr[2]];
}