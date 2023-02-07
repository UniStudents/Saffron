import Saffron from "@poiw/saffron";

const saffron = new Saffron();

saffron.initialize({
    sources: {
        path: './sources'
    }
});

saffron.start();
