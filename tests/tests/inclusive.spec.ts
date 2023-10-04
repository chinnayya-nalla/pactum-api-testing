import { it } from 'mocha';
import { spec } from 'pactum';

describe('Pactum Inclusive Tests', () => {

  xit('Should Skip Test Case - xit', async() => {
    await spec().get('/inclusive/1').expectStatus(200);
  });

  it.skip('Should Skip Test Case - skip', async() => {
    await spec().get('/inclusive/2').expectStatus(200);
  });

});

describe.skip('Pactum Inclusive Suit Tests', () => {

  it('Pactum Inclusive Suit Test - 1', async() => {
    await spec().get('/inclusive/1').expectStatus(200);
  });

  it('Pactum Inclusive Suit Test - 2', async() => {
    await spec().get('/inclusive/2').expectStatus(200);
  });

});