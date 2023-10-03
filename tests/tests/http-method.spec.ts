import { it } from 'mocha';
import { spec, request } from 'pactum';

describe('Http Method Test', () => {

  before(async () => {
    request.setBaseUrl('https://reqres.in');
  })

  it('Should Get Users - Http Method GET', async() => {
    await spec().get('/api/users?page=1').expectStatus(200);
  });

  it('Should Create User - Http Method POST', async() => {
    await spec().post('/api/users').withJson({"name":"morpheus","job":"leader"}).expectStatus(201);
  });

  it('Should Update User - Http Method PUT', async() => {
    await spec().put('/api/users/2').withJson({"name":"morpheus","job":"leader"}).expectStatus(200);
  });

  it('Should Update User - Http Method PATCH', async() => {
    await spec().patch('/api/users/2').withJson({"name":"morpheus","job":"leader"}).expectStatus(200);
  });

  it('Should Update User - Http Method DELETE', async() => {
    await spec().delete('/api/users/2').expectStatus(204);
  });

  it('Should Respond Http Status 404 - Negative Test - Http Method GET', async() => {
    await spec().get('/api/users/23').expectStatus(200);
  });

  it('Should Get Users, High Response Time - Http Method GET', async() => {
    await spec().get('/api/users?delay=1').expectStatus(200);
  });
  
});