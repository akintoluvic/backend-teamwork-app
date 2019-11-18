/* eslint-disable func-names */
/* eslint-disable no-undef */
const request = require('request');

const baseUrl = 'http://localhost:3000/api/v1';

describe('User Test Server', function() {
  let Bearertoken;
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
        expect(response.body.userId).toBe(18);
        return Bearertoken = response.body.token;
        done();
      }
    );
    describe('POST /', function() {
      it('01 returns status code 200', function(done) {
        request.post(
          `${baseUrl}/auth/create-user`,
          {
            json: true,
            headers: { authorization: Bearertoken },
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
    describe('POST /', function() {
      it('02 returns status code 200', function(done) {
        request.post(
          `${baseUrl}/auth/create-user`,
          {
            json: true,
            headers: { authorization: Bearertoken },
            body: {
              email: 'fatddade@rty.com',
              password: 'me2367mjnfdw'
            }
          },
          function(error, response) {
            expect(response.statusCode).toBe(401);
            expect(response.body.status).toBe('error');
            done();
          }
        );
      });
    });
    describe('GET /', function() {
      it('returns status code 201', function(done) {
        request.get(`${baseUrl}/feed`, function(error, response) {
          expect(response.statusCode).toBe(401);
          expect(response.body.status).toBe(undefined);
          done();
        });
      });
    });
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
});

// describe('Post Articles', function() {
//   test('works with promises', () => {
//     return new Promise((resolve, reject) => {

//     })
//   })
// });
