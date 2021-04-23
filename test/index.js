const saffron = require('../dist/index')

saffron.initialize("../test/saffron.json")

saffron.on("log", (log) =>{
    console.log("lol", log);
})