import  {
    hexColorValidation, 
    rgbColorValidation, 
    hslColorValidation 
} from '../../src/services/validation.service';
import { assert, expect } from "chai";

describe('Checking validation service', function() {
    it('HEX validation', function() {
        const hex = hexColorValidation('#FFFFFF');
        assert.equal(hex, 'FFFFFF');
    });
    it('RGB validation', function() {
        const rgb = rgbColorValidation('rgb(255, 255, 255)');
        expect(rgb).have.length(3)
        assert.deepEqual(rgb, ['255', '255', '255']);
    });
    it('HSL validation', function() {
        const hsl = hslColorValidation('hsl(359, 100, 100)');
        expect(hsl).have.length(3)
        assert.deepEqual(hsl, ['359', '100', '100']);
    });
});