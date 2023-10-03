import { it } from 'mocha';
import { spec, request } from 'pactum';

describe('Http Response Status Test', () => {

  before(async () => {
    request.setBaseUrl('https://httpbin.org/');
  })

  it('Should Respond 200', async() => {
    await spec().get('/status/200').expectStatus(200);
  });

  it('Should Respond 200 - Negative Test', async() => {
    await spec().get('/status/400').expectStatus(200);
  });

  it('Should Respond 500', async() => {
    await spec().get('/status/500').expectStatus(500);
  });
  
});