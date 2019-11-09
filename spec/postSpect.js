var request = require("request");
var postTest = require("../app.js")
var base_url = "http://localhost:3000/api/v1"

describe("Posts Test Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(`${base_url}/feed`, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });
});

describe("Posts Test Server", function() {
    describe("GET /", function() {
      it("returns status code 200", function(done) {
        request.get(`${base_url}/articles/1`, function(error, response, body) {
          expect(response.statusCode).toBe(200);
          done();
        });
      });
    });
  });

  describe("Posts Test Server", function() {
    describe("GET /", function() {
      it("returns status code 200", function(done) {
        request.get(`${base_url}/gifs/1`, function(error, response, body) {
          expect(response.statusCode).toBe(200);
          done();
        });
      });
    });
  });
  
  describe("Posts Test Server", function() {
      describe("GET /", function() {
        it("returns status code 200", function(done) {
          request.get(`${base_url}/feed/tags/work`, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
          });
        });
      });
    });