import { it } from 'mocha';
import { spec, request } from 'pactum';

describe('Pactum Data Map Tests', () => {

    before(async () => {
        request.setBaseUrl('https://reqres.in');
    })

    it('Should Create User using Data Map', async() => {
        await spec().post('/api/register')
            .withBody({
                "email": "$M{USER.email}",
                "password": "$M{USER.password}"
            }).expectStatus(200);
    });

    it('Should Fail Creating User using Data Map', async() => {
        await spec().post('/api/register')
            .withBody({
                "email": "$M{USER.email}"
            }).expectStatus(400);
    });

});