import { Request, Response } from "express";
import ColorService from "../services/color.service";
import { IColors } from "../types/color.types";

class ColorController {
    randomColor(req: Request, res: Response) {
        try {
            const number = Number(req.query.number) || 1;
            const color = ColorService.getRandomColor(number);
            return res.json(color);
        } catch (error) {
            console.log(error);
        }
    }
    randomShade(req: Request, res: Response) {
        try {
            const type = String(req.query.type) || 'all';
            const hue = req.params.color;
            const number = Number(req.query.number) || 1;
            const color = ColorService.getRandomShade(hue, type, number);
            return res.json(color);
        } catch (error) {
            console.log(error);
            
        }
    }
}

export default new ColorController();