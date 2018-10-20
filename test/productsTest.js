import chai from 'chai';
import chaiHttp from 'chai-http';
// import products from '../products';

// const should = chai.should();

chai.use(chaiHttp);

describe('GET /products', () => {
  it('returns all products', (done) => {
    request.get('/products')
      .expect(200)
      .end((err, res) => {
        chai.expect(res.body).to.be.an('array');
        done(err);
      });
  });
});

