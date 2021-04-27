const saffron = require('../dist/index');
(async() => {
    await saffron.initialize("../test/saffron.json")

    // saffron.on("start", () => console.log('saffron started'))

    await saffron.start()
})()
