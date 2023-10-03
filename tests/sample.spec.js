const { spec } = require('pactum');

describe('HTTP Bin', () => {

    it('should be a teapot', async () => {
      await spec()
        .get('https://httpbin.org/status/418')
        .expectStatus(418);
    });

    it('should be a teapot 2', async () => {
      await spec()
        .get('http://0.0.0.0:9393/status/418')
        .expectStatus(418);
    });
  
});