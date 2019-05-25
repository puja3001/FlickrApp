let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

process.env.NODE_ENV = 'test';

chai.use(chaiHttp);

describe('API Tests', function() {
    before(function() {
      //to-do
    });
  
    after(function() {
      //to-do
    });
  
    describe('Entry point', function() {
  
      it.only('TEST Entry', function(done) {
        chai.request(server)
          .get('/api')
          .end(function(err, res){
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message');
            done();
          });
      });

      it.only('GET feeds', function(done) {
        this.timeout(15000);
        chai.request(server)
          .get('/api/feeds')
          .end(function(err, res){
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('images');
            done();
          });
      });
  
    });
  
  });