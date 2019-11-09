var request = require("request");
var userTest = require("../app.js")
var base_url = "http://localhost:3000"

describe("User Test Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.post(`${base_url}/api/v1/auth/signin`, { json: true, body: { 
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
        request.post(`${base_url}/api/v1/auth/create-user`, { json: true, body: { 
            "email": "fatddade@rty.com", 
            "password": "me2367mjnfdw" }
        }, function(error, response, body) {
          expect(response.statusCode).toBe(201);
          done();
        });
      });
    });
  });