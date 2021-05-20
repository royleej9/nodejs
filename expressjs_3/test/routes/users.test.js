const request = require('supertest');
// const app = require('@app');

// describe('Test the root path', () => {
//   test('It should response the GET method', () => {
//     return request(app).get('/users').expect(200);
//   });
// });

// describe('Test the root path', () => {
//   test('It should response the GET method', () => {
//     return request(app).get('/users').expect(200);
//   });
// });

const users = require('@routes/users');
const defaultTestRouter = require('../defaultTestRouter');
defaultTestRouter.use('/users', users);

describe('Test users router', () => {
  test('It should response the GET method', () => {
    return request(defaultTestRouter).get('/users').expect(200);
  });
});
