import ConverterService from "../../src/services/converter.service";
import { assert } from "chai";

describe("Checking converter service", function () {
    it("Converting HEX to RGB", function () {
        const color = ConverterService.convertHexToRgb("#FFFFFF");
        assert.equal(color, "rgb(255, 255, 255)");
    });

    it("Converting RGB to HEX", function () {
        const color = ConverterService.convertRgbToHex("rgb(255, 255, 255)");
        assert.equal(color, "#FFFFFF");
    });

    it("Converting RGB to HSL", function () {
        const color = ConverterService.convertRgbToHsl("rgb(255, 255, 255)");
        assert.equal(color, "hsl(0, 0%, 100%)");
    });

    it("Converting HSL to RGB", function () {
        const color = ConverterService.convertHslToRgb("hsl(0, 0%, 100%)");
        assert.equal(color, "rgb(255, 255, 255)");
    });
});
