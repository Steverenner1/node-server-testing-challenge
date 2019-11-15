const request = require('supertest');

const server = require('./server');

describe('server', function() {
    describe('GET /', function() {
        it('should return 200 OK', function() {
            // run the server

            // make a GET request to /
            return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200);
            });
            // see that the http code of response is 200


        });
        
        it('should return JSON formatted response', function() {
            // run the server

            // make a GET request to /
            return request(server)
            .get('/')
            .then(res => {
                expect(res.type).toMatch(/json/i);
            });
            // see that the http code of response is 200


        });
    });
});