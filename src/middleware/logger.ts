import chalk from 'chalk'
import Events from "../modules/events";
import {LoggerTypes} from "./LoggerTypes"
import Config from "../components/config";

export default (type: LoggerTypes, data: any) => {
    Events.getAntennae().emit("log", type, data)

    switch(type) {
        case LoggerTypes.INSTALL_ERROR:
            console.log(chalk.red(" | "))
            console.log(chalk.red.bold(` ⊗ ${data}${data.slice(-1) === "." ? "" : "."} Please consult our docs, at https://github.com/poiw-org/saffron/wiki.\n`))
        return
        case LoggerTypes.STEP:
            console.log(chalk.white(`${chalk.green(" | ")}`))
            console.log(chalk.white(`${chalk.green(" ✓ ")} ${data}`))
        return
        case LoggerTypes.ERROR:
            console.log(chalk.red(" | "))
            console.log(chalk.red.bold(` ⊗ ${data}`))
            return
        case LoggerTypes.INFO:
            console.log(chalk.white(`${chalk.blue(" | ")}`))
            console.log(chalk.white(`${chalk.blue(" ◉ ")} ${data}`))
        return
        case LoggerTypes.DEBUG:
            console.log(chalk.white(`${chalk.blue(" | ")}`))
            console.log(chalk.white(`${chalk.blue(" ⦿ ")} ${data}`))
            return
        default:
            console.log(chalk.black(`${chalk.bgGreen(" saffron ")}`), chalk.white(chalk.white(data)))
        return;
    }
}
