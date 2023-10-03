import { mock } from 'pactum';

mock.addInteraction({
    request: {
        method: 'GET',
        path: '/status/mock'
    },
    response: {
        status: 200
    }
});