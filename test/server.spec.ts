import request from 'supertest';
import { expect } from 'chai';
import app from '../src/server';

describe('Checking server', function() {

    it('server is created without error', function(done) {
       request(app).get("/").expect(200).end(done);
    });
});
