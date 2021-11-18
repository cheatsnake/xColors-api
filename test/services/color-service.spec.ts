import ColorService from 'services/color.service';
import { assert, expect } from "chai";

describe('Checking color service', function() {
    it('Getting a random color', function() {
        const color = ColorService.getRandomColor();
        expect(color).to.be.an('object');
        expect(Object.keys(color)).have.length(3);
    });

    it('Getting an array of random colors', function() {
        const colorsArr = ColorService.getRandomColor(3);
        expect(colorsArr).to.be.an('array');
        expect(colorsArr).have.length(3);
    });

    it('Getting a random shade of a specific color', function() {
        const color = ColorService.getRandomShade("0", 'any', 1);
        expect(color).to.be.an('object')
        expect(Object.keys(color)).have.length(3);
    });

    it('Getting an array of random shades of a specific color', function() {
        const colorsArr = ColorService.getRandomShade("0", 'any', 3);
        expect(colorsArr).to.be.an('array');
        expect(colorsArr).have.length(3);
    });
});