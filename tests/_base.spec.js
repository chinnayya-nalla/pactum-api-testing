const { request, mock } = require('pactum');


function setRequestDefaults() {
    request.setBaseUrl('http://localhost:3000');
    request.setDefaultTimeout(10000);
}

before(async () => {
    console.log('hello');
    mock.start();
    mock.useRemoteServer("http://localhost:9393");
    setRequestDefaults();

})

after(async () => {
    console.log('bye');
})

mock.addInteraction({
    request: {
        method: 'GET',
        path: '/status/418'
    },
    response: {
        status: 418,
        body: {
            zipcode: 90210,
            city: 'Beverly Hills'
        }
    }
});

