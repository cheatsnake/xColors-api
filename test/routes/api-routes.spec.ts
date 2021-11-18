import request from 'supertest';
import { expect } from 'chai';
import app from 'server';

describe('Checking API routes', function() {
    it('/api/random is working', function(done) {
        request(app).get("/api/random").expect(200, done);
    });
    it('/api/random/100 is working', function(done) {
        request(app).get("/api/random/100").expect(200, done);
    });
    it('/api/hex2rgb is working', function(done) {
        request(app).get("/api/hex2rgb/?value=FFFFFF").expect(200, done);
    });
    it('/api/hex2hsl is working', function(done) {
        request(app).get("/api/hex2hsl/?value=FFFFFF").expect(200, done);
    });
    it('/api/rgb2hex is working', function(done) {
        request(app).get("/api/rgb2hex?value=255-255-255").expect(200, done);
    });
    it('/api/rgb2hsl is working', function(done) {
        request(app).get("/api/rgb2hsl?value=255-255-255").expect(200, done);
    });
    it('/api/hsl2hex is working', function(done) {
        request(app).get("/api/hsl2hex?value=359-100-100").expect(200, done);
    });
    it('/api/hsl2rgb is working', function(done) {
        request(app).get("/api/hsl2rgb?value=359-100-100").expect(200, done);
    });
});