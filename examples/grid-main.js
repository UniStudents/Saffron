import Saffron from "@poiw/saffron";

const saffron = new Saffron();

saffron.initialize({
    mode: 'main',
    sources: {
        path: './sources'
    },
    grid: {
        distributed: true,
        useHTTPS: false,
        serverHost: '127.0.0.1',
        serverPort: 5654,
        authToken: '12345abc' // Super safe
    },
    workers: {
        nodes: ['Alpha']
    }
});

saffron.start();
