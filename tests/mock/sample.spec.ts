import { mock } from 'pactum';

mock.addInteraction({
    request: {
        method: 'GET',
        path: '/status/418'
    },
    response: {
        status: 418
    }
});