import { pactum, request, mock } from 'pactum';

function setRequestDefaults() {
    console.log('Starting 1...')
    request.setBaseUrl('http://localhost:3000');
    request.setDefaultTimeout(10000);
}

function setupMockServer() {
    mock.start();
    console.log('Starting...')
    mock.useRemoteServer("http://localhost:9393");
}

before(async () => {
    setupMockServer();
    setRequestDefaults();
})

after(async () => {
    mock.stop();
})

mock.addInteraction({
    request: {
        method: 'GET',
        path: '/status/418'
    },
    response: {
        status: 418
    }
});

