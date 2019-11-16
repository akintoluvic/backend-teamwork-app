import { describe } from 'mocha';
import chaiThings from 'chai-things';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const auth = require('../middleware/auth');
const server = require('../server');

const { expect } = chai;
chai.use(chaiHttp);
chai.use(chaiThings);

let { token } = auth;
before(done => {
  const login = {
    email: 'zaeddade@rty.com',
    password: 'me367mjnfdw'
  };
  chai.request(server)
    .post('/api/v1/auth/signin/')
    .send(login)
    .end((error, response) => {
      token = response.body.token;
    });
  done();
});

describe('Server!', () => {
  it('welcomes user to the api', done => {
    chai
      .request(app)
      .get('/http://localhost:3000/api/v1/feed')
      .set('Authorization', token)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

//   it('welcomes user to the api', done => {
//     chai
//       .request(app)
//       .get('/http://localhost:3000/api/v1/feed')
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body.status).to.equals('success');
//         expect(res.body.message).to.equals('Welcome To Testing API');
//         done();
//       });
//   });

  it('adds 2 numbers', done => {
    chai
      .request(app)
      .post('/add')
      .send({ num1: 5, num2: 5 })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals('success');
        expect(res.body.result).to.equals(10);
        done();
      });
  });
});
