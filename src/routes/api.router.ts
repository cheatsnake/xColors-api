import { Router } from "express";
import colorController from "../controllers/color.controller";
import converterController from "../controllers/converter.controller";

const apiRouter = Router();

apiRouter.get("/random", colorController.randomColor);
apiRouter.get("/random/:color", colorController.randomShade);

apiRouter.get("/hex2rgb", converterController.convertHexToRgb);
apiRouter.get("/hex2hsl", converterController.convertHexToHsl);
apiRouter.get("/rgb2hex", converterController.convertRgbToHex);
apiRouter.get("/rgb2hsl", converterController.convertRgbToHsl);
apiRouter.get("/hsl2hex", converterController.convertHslToHex);
apiRouter.get("/hsl2rgb", converterController.convertHslToRgb);

export default apiRouter;


