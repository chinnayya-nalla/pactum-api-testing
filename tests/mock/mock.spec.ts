import { mock } from 'pactum';

mock.addInteraction({
    request: {
        method: 'GET',
        path: '/api/mock/data'
    },
    response: {
        status: 200,
        body: { "name" : "mock-server", "type" : "data" }
    }
});