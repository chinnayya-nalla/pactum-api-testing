const { spec } = require('pactum');

describe('HTTP Bin', () => {

    it('should be a teapot', async () => {
      await spec()
        .get('https://httpbin.org/status/418')
        .expectStatus(418);
    });
  
});