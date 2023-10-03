const { request} = require('pactum');


function setRequestDefaults() {
    request.setBaseUrl('http://localhost:3000');
    request.setDefaultTimeout(10000);
}

before(async () => {
    console.log('hello');
    setRequestDefaults();
})

after(async () => {
    console.log('bye');
})