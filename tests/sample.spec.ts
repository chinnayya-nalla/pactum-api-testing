import { spec } from 'pactum';

describe('HTTP Bin', () => {

    it('should be a teapot', async () => {
      await spec()
        .get('https://httpbin.org/status/418')
        .expectStatus(418);
    });

    it('should be a teapot 2', async () => {
      await spec()
        .get('/status/418')
        .expectStatus(418);
    });

    it('should be a teapot 3', async () => {
      await spec()
        .get('/status/418')
        .expectStatus(200);
    });

    it('should be a teapot 3 - Mock', async () => {
      await spec()
        .get('http://localhost:9393/status/mock')
        .expectStatus(200);
    });
  
});