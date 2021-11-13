import { Request, Response } from "express";
import ConverterService from "../services/converter.service";
import { hslColorValidation, requestValidation, rgbColorValidation } from "../services/validation.service";

class ConverterController {
    convertHexToRgb(req: Request, res: Response) {
        try {
            const hex = requestValidation('hex', String(req.query.value));
            const rgb = ConverterService.convertHexToRgb(hex);
            return rgb 
                ? res.json({hex, rgb}) 
                : res.status(400).json({error: 'Incorrect request'});
        } catch (error) {
            console.log(error);
        }
    }

    convertHexToHsl(req: Request, res: Response) {
        try {
            const hex = requestValidation('hex', String(req.query.value))
            const rgb = ConverterService.convertHexToRgb(hex);
            const hsl = ConverterService.convertRgbToHsl(rgb);
            return hsl 
                ? res.json({hex, hsl}) 
                : res.status(400).json({error: 'Incorrect request'});
        } catch (error) {
            console.log(error);
        }
    }

    convertRgbToHex(req: Request, res: Response) {
        try {
            const rgb = requestValidation('rgb', String(req.query.value));
            const hex = ConverterService.convertRgbToHex(rgb);
            return hex 
                ? res.json({rgb, hex}) 
                : res.status(400).json({error: 'Incorrect request'});
        } catch (error) {
            console.log(error);
        }
    }

    convertRgbToHsl(req: Request, res: Response) {
        try {
            const rgb = requestValidation('rgb', String(req.query.value));
            const hsl = ConverterService.convertRgbToHsl(rgb);
            return hsl 
                ? res.json({rgb, hsl}) 
                : res.status(400).json({error: 'Incorrect request'});
        } catch (error) {
            console.log(error);
        }
    }

    convertHslToRgb(req: Request, res: Response) {
        try {
            const hsl = requestValidation('hsl', String(req.query.value));
            const rgb = ConverterService.convertHslToRgb(hsl);
            return rgb 
                ? res.json({hsl, rgb}) 
                : res.status(400).json({error: 'Incorrect request'});
        } catch (error) {
            console.log(error);
        }
    }

    convertHslToHex(req: Request, res: Response) {
        try {
            const hsl = requestValidation('hsl', String(req.query.value));
            const rgb = ConverterService.convertHslToRgb(hsl);
            const hex = ConverterService.convertRgbToHex(rgb);
            return hex 
                ? res.json({hsl, hex}) 
                : res.status(400).json({error: 'Incorrect request'});
        } catch (error) {
            console.log(error);
        }
    }

}

export default new ConverterController();