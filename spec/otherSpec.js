/* eslint-disable func-names */
/* eslint-disable no-undef */
const request = require('request');
const userTest = require('../app.js');
const posts = require('../controllers/posts');
const users = require('../controllers/users');
const comments = require('../controllers/comments');
const cloud = require('../controllers/cloudinaryConfig');

const baseUrl = 'http://localhost:3000/api/v1';

beforeEach(done => {
//   posts.simulateAsyncOp(function() {
    asyncOpCompleted = true;
    done();
//   });
});

describe('User Test Server', function() {
  describe('GET /', function() {
    it('returns status code 201', function(done) {
      request.get(`${baseUrl}/gifs/3`, function(error, response) {
        expect(response.statusCode).toBe(401);
        done();
      });
    });
  });
  describe('GET /', function() {
    it('returns status code 201', function(done) {
      request.get(`${baseUrl}/feed/tags/work`, function(error, response) {
        expect(response.statusCode).toBe(401);
        done();
      });
    });
  });
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
          expect(response.statusCode).toBe(401);
          done();
        }
      );
    });
  });
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
          expect(response.statusCode).toBe(401);
          done();
        }
      );
    });
  });
  describe('DELETE /', function() {
    it('returns status code 201', function(done) {
      request.delete(`${baseUrl}/articles/1`, function(error, response) {
        expect(response.statusCode).toBe(401);
        done();
      });
    });
  });
  describe('DELETE /', function() {
    it('returns status code 201', function(done) {
      request.delete(`${baseUrl}/gifs/1`, function(error, response) {
        expect(response.statusCode).toBe(401);
        done();
      });
    });
  });
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
          expect(response.statusCode).toBe(401);
          done();
        }
      );
    });
  });
});

// describe('Post Articles', function() {
//   test('works with promises', () => {
//     return new Promise((resolve, reject) => {

//     })
//   })
// });
