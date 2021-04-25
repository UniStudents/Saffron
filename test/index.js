const saffron = require('../dist/index');
(async()=>{
    await saffron.initialize("../test/saffron.json")

    saffron.on("log", (type, data)=>console.log(type, data))

    await saffron.start()
})()
