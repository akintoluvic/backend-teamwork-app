/* eslint-disable func-names */
/* eslint-disable no-undef */
const request = require('request');
const postTest = require('../app.js');
const baseUrl = 'http://localhost:3000/api/v1';

describe('Posts Test Server', function() {
  describe('GET /', function() {
    it('returns status code 200', function(done) {
      request.get(`${baseUrl}/feed`, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });
});

describe('Posts Test Server', function() {
  describe('GET /', function() {
    it('returns status code 200', function(done) {
      request.get(`${baseUrl}/articles/1`, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });
});

describe('Posts Test Server', function() {
  describe('GET /', function() {
    it('returns status code 200', function(done) {
      request.get(`${baseUrl}/gifs/1`, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });
});

describe('Posts Test Server', function() {
  describe('GET /', function() {
    it('returns status code 200', function(done) {
      request.get(`${baseUrl}/feed/tags/work`, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });
});
