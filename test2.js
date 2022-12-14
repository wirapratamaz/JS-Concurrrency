function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`);
        setTimeout(() => {
            if (location == 'Google') {
                resolve('Google says hi');
            } else {
                reject('We can only talk with Google');
            }
        }, 2000);
    });
};

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response');
        setTimeout(() => {
            if (response) {
                resolve(`Extra Infromation ${response}`);
            }
        }, 2000);
    });
};

//PROMISE
makeRequest('Google')
    .then(response => {
        console.log('Request Received');
        return processRequest(response);
    })
    .then(processResponse => {
        console.log(processResponse);
    })
    .catch(error => {
        console.log(error);
    })

async function doWork() {
    try {
        const response = await makeRequest('Google');
        console.log('Response recieved');
        const processResponse = await processRequest(response);
        console.log(processResponse);
    } catch (error) {
        console.log(error)
    }
}

doWork();