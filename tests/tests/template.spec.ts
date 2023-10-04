import { it } from 'mocha';
import { spec, request, settings } from 'pactum';

describe('Pactum Data Template Tests', () => {

    before(async () => {
        request.setBaseUrl('https://reqres.in');
    })

    it('Should Create User using Data Template', async() => {
        await spec().post('/api/register')
            .withBody({ '@DATA:TEMPLATE@': 'USER' }).expectStatus(200);
    });

    it('Should Fail Creating User using Data Template', async() => {
        await spec().post('/api/register')
            .withBody({ 
                '@DATA:TEMPLATE@': 'USER',
                '@OVERRIDES@': {
                    'email': 'sample@sample.com'
                } 
            }).expectStatus(400);
    });

});