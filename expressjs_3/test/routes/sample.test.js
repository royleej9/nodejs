const request = require('supertest');
const defaultTestRouter = require('../defaultTestRouter');
const sampleRouter = require('@routes/sample');

defaultTestRouter.use('/sample', sampleRouter);

describe('Test auth router', () => {
  test('It should response the GET method', (done) => {
    request(defaultTestRouter)
      .get('/sample/datas')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('GET - end - done', (done) => {
    request(defaultTestRouter)
      .get('/sample/datas')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        const datas = res.body;
        expect(datas).toEqual(expect.toBeArray());
        expect(datas).toBeArrayOfSize(3);
        expect(datas.length).toEqual(3);

        return done();
      });
  });

  test('GET - promises - then - done', (done) => {
    return request(defaultTestRouter)
      .get('/sample/datas')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const datas = res.body;
        expect(datas).toEqual(expect.toBeArray());
        expect(datas).toBeArrayOfSize(3);
        expect(datas.length).toEqual(3);

        done();
      })
      .catch((err) => done(err));
  });
});
