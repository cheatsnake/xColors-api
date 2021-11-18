import request from 'supertest';
import { expect } from 'chai';
import app from 'server';

describe('Checking server', function() {
    it('server is created without error', function(done) {
       request(app).get("/").expect(200, done);
    });
});
