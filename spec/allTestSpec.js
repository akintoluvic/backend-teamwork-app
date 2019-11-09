var request = require("request");
var userTest = require("../app.js")
var base_url = "http://localhost:3000/api/v1"

describe("User Test Server", function() {
  describe("POST /", function() {
    it("returns status code 200", function(done) {
      request.post(`${base_url}/auth/signin`, { json: true, body: { 
        "email": "zaeddade@rty.com", 
        "password": "me367mjnfdw" }
    },  function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });
});

describe("User Test Server", function() {
    describe("POST /", function() {
      it("returns status code 200", function(done) {
        request.post(`${base_url}/auth/create-user`, { json: true, body: { 
            "email": "fatddade@rty.com", 
            "password": "me2367mjnfdw" }
        }, function(error, response, body) {
          expect(response.statusCode).toBe(201);
          done();
        });
      });
    });
  });

describe("Posts Test Server", function() {
  describe("GET /", function() {
    it("returns status code 201", function(done) {
      request.get(`${base_url}/feed`, function(error, response, body) {
        expect(response.statusCode).toBe(201);
        done();
      });
    });
  });
});

describe("Posts Test Server", function() {
    describe("GET /", function() {
      it("returns status code 201", function(done) {
        request.get(`${base_url}/articles/1`, function(error, response, body) {
          expect(response.statusCode).toBe(201);
          done();
        });
      });
    });
  });

  describe("Posts Test Server", function() {
    describe("GET /", function() {
      it("returns status code 201", function(done) {
        request.get(`${base_url}/gifs/1`, function(error, response, body) {
          expect(response.statusCode).toBe(201);
          done();
        });
      });
    });
  });
  
  describe("Posts Test Server", function() {
      describe("GET /", function() {
        it("returns status code 201", function(done) {
          request.get(`${base_url}/feed/tags/work`, function(error, response, body) {
            expect(response.statusCode).toBe(201);
            done();
          });
        });
      });
    });

      describe("Posts Test Server", function() {
        describe("PUT /", function() {
          it("returns status code 201", function(done) {
            request.put(`${base_url}/gifs/1`, { json: true, body: { 
                "title": "zaeddade@rty.com", 
                "imageUrl": "me367mjnfdw",
                "tag": "work" }
            }, function(error, response, body) {
              expect(response.statusCode).toBe(201);
              done();
            });
          });
        });
      });
    
      describe("Posts Test Server", function() {
        describe("PUT /", function() {
          it("returns status code 201", function(done) {
            request.put(`${base_url}/articles/1`, { json: true, body: { 
                "title": "zaeddade@rty.com", 
                "article": "me367mjnfdw",
                "tag": "work" }
            }, function(error, response, body) {
              expect(response.statusCode).toBe(201);
              done();
            });
          });
        });
      });

      describe("Delete Test Server", function() {
        describe("DELETE /", function() {
          it("returns status code 201", function(done) {
            request.delete(`${base_url}/articles/1`, function(error, response, body) {
              expect(response.statusCode).toBe(201);
              done();
            });
          });
        });
      });

      describe("Delete Test Server", function() {
        describe("DELETE /", function() {
          it("returns status code 201", function(done) {
            request.delete(`${base_url}/gifs/1`, function(error, response, body) {
              expect(response.statusCode).toBe(201);
              done();
            });
          });
        });
      });
      
      describe("Post Articles", function() {
        describe("POST /", function() {
          it("returns status code 201", function(done) {
            request.post(`${base_url}/articles`, { json: true, body: { 
                "title": "fatddade@rty.com", 
                "article": "me2367mjnfdw",
                "authorId": 7,
                "tag": "work"
            }}, function(error, response, body) {
              expect(response.statusCode).toBe(201);
              done();
            });
          });
        });
      });