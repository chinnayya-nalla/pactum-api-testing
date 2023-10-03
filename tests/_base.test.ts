import dotenv from 'dotenv';
import { request, mock, settings } from 'pactum';

// Configuring dotenv
dotenv.config();

function setRequestDefaults() {
    request.setBaseUrl(process.env.BASE_URL);
    request.setDefaultTimeout(Number(process.env.DEFAULT_TIMEOUT));
}

function setupMockServer() {
    mock.start();
    mock.useRemoteServer("http://localhost:9393");
}

before(async () => {

    console.log('Started Executing API Test Automation : ', process.env.APPLICATION_NAME);
    console.log('\n');

    settings.setLogLevel("ERROR");

    setupMockServer();
    setRequestDefaults();
})

after(async () => {

    mock.stop();

    console.log('\n');
    console.log('Stopped Executing API Test Automation : ', process.env.APPLICATION_NAME);

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

