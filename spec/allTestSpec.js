/* eslint-disable func-names */
/* eslint-disable no-undef */
const request = require('request');
const userTest = require('../app.js');

const baseUrl = 'http://localhost:3000/api/v1';

describe('User Test Server', function() {
  describe('POST /', function() {
    it('returns status code 200', function(done) {
      request.post(
        `${baseUrl}/auth/signin`,
        {
          json: true,
          body: {
            email: 'zaeddade@rty.com',
            password: 'me367mjnfdw'
          }
        },
        function(error, response) {
          expect(response.statusCode).toBe(200);
          expect(response.body.status).toBe('success');
          done();
        }
      );
    });
  });
});

describe('User Test Server', function() {
  describe('POST /', function() {
    it('returns status code 200', function(done) {
      request.post(
        `${baseUrl}/auth/create-user`,
        {
          json: true,
          body: {
            email: 'fatddade@rty.com',
            password: 'me2367mjnfdw'
          }
        },
        function(error, response) {
          expect(response.statusCode).toBe(201);
          expect(response.body.status).toBe('success');
          done();
        }
      );
    });
  });
});

describe('Posts Test Server', function() {
  describe('GET /', function() {
    it('returns status code 201', function(done) {
      request.get(`${baseUrl}/feed`, function(error, response) {
        expect(response.statusCode).toBe(201);
        expect(response.body.status).toBe('success');
        done();
      });
    });
  });
});

describe('Posts Test Server', function() {
  describe('GET /', function() {
    it('returns status code 201', function(done) {
      request.get(`${baseUrl}/articles/1`, function(error, response) {
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('success');
        done();
      });
    });
  });
});

describe('Posts Test Server', function() {
  describe('GET /', function() {
    it('returns status code 201', function(done) {
      request.get(`${baseUrl}/gifs/3`, function(error, response) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });
});

describe('Posts Test Server', function() {
  describe('GET /', function() {
    it('returns status code 201', function(done) {
      request.get(`${baseUrl}/feed/tags/work`, function(error, response) {
        expect(response.statusCode).toBe(201);
        done();
      });
    });
  });
});

describe('Posts Test Server', function() {
  describe('PUT /', function() {
    it('returns status code 201', function(done) {
      request.put(
        `${baseUrl}/gifs/1`,
        {
          json: true,
          body: {
            title: 'zaeddade@rty.com',
            imageUrl: 'me367mjnfdw',
            tag: 'work'
          }
        },
        function(error, response) {
          expect(response.statusCode).toBe(201);
          done();
        }
      );
    });
  });
});

describe('Posts Test Server', function() {
  describe('PUT /', function() {
    it('returns status code 201', function(done) {
      request.put(
        `${baseUrl}/articles/1`,
        {
          json: true,
          body: {
            title: 'zaeddade@rty.com',
            article: 'me367mjnfdw',
            tag: 'work'
          }
        },
        function(error, response) {
          expect(response.statusCode).toBe(201);
          done();
        }
      );
    });
  });
});

describe('Delete Test Server', function() {
  describe('DELETE /', function() {
    it('returns status code 201', function(done) {
      request.delete(`${baseUrl}/articles/1`, function(error, response) {
        expect(response.statusCode).toBe(201);
        done();
      });
    });
  });
});

describe('Delete Test Server', function() {
  describe('DELETE /', function() {
    it('returns status code 201', function(done) {
      request.delete(`${baseUrl}/gifs/1`, function(error, response) {
        expect(response.statusCode).toBe(201);
        done();
      });
    });
  });
});

describe('Post Articles', function() {
  describe('POST /', function() {
    it('returns status code 201', function(done) {
      request.post(
        `${baseUrl}/articles`,
        {
          json: true,
          body: {
            title: 'fatddade@rty.com',
            article: 'me2367mjnfdw',
            authorId: 7,
            tag: 'work'
          }
        },
        function(error, response) {
          expect(response.statusCode).toBe(201);
          done();
        }
      );
    });
  });
});
