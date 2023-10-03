import { it } from 'mocha';
import { spec, request } from 'pactum';
import { like } from 'pactum-matchers';

describe('Pactum Mocking Test', () => {

  before(async () => {
    request.setBaseUrl('https://mock-server.com');
  })

  it('Should Get Mock Data', async() => {
    await spec().get('/api/mock/data').expectStatus(200).expectJsonMatch('name', like('mock-server'));
  });
  
});