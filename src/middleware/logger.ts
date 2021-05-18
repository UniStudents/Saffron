import chalk from 'chalk'
import Events from "../modules/events";
import {LoggerTypes} from "./LoggerTypes"
import Config from "../components/config";
import { DateTime } from "luxon";

export default (type: LoggerTypes, data: any) => {
    Events.getAntennae().emit("log", type, data)
    let time = chalk.bold(`${DateTime.now().toLocaleString({ day: '2-digit', month: '2-digit', year: "2-digit" , hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}`)

    switch(type) {
        case LoggerTypes.INSTALL_ERROR:
            console.log(chalk.red(" | "))
            console.log(chalk.red.bold(` ⊗ ${time}: ${data}${data.slice(-1) === "." ? "" : "."} Please consult our docs, at https://github.com/poiw-org/saffron/wiki.\n`))
        return
        case LoggerTypes.STEP:
            console.log(chalk.white(`${chalk.green(" | ")}`))
            console.log(chalk.white(`${chalk.green(" ✓ ")} ${time}: ${data}`))
        return
        case LoggerTypes.ERROR:
            console.log(chalk.red(" | "))
            console.log(chalk.red.bold(` ⊗ ${time}: ${data}`))
            return
        case LoggerTypes.INFO:
            console.log(chalk.white(`${chalk.blue(" | ")}`))
            console.log(chalk.white(`${chalk.blue(" ◉ ")} ${time}: ${data}`))
        return
        case LoggerTypes.DEBUG:
            console.log(chalk.white(`${chalk.blue(" | ")}`))
            console.log(chalk.white(`${chalk.blue(" ⦿ ")} ${time}: ${data}`))
            return
        default:
            console.log(chalk.black(`${chalk.bgGreen(" saffron ")}`), chalk.white(chalk.white(data)))
        return;
    }
}
