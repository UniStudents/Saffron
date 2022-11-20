import {DateTime} from "luxon";
import {LoggerTypes} from "../components/LoggerTypes"
import chalk from 'chalk'

/**
 * Logs information in to the console
 * @param type The type of log based on LoggerTypes
 * @param data The message that will be logged
 */
export function logger(type: LoggerTypes, data: any): void {
    const time = chalk.bold(`${DateTime.now().toLocaleString({
        day: '2-digit',
        month: '2-digit',
        year: "2-digit",
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })}`);

    switch (type) {
        case LoggerTypes.STEP:
            console.log(chalk.white(`${chalk.green(" | ")}`));
            console.log(chalk.white(`${chalk.green(" ✓ ")} ${time}: ${data}`));
            return;
        case LoggerTypes.ERROR:
            console.log(chalk.red(" | "))
            console.log(chalk.red.bold(` ⊗ ${time}: ${data}`));
            return;
        case LoggerTypes.INFO:
            console.log(chalk.white(`${chalk.blue(" | ")}`));
            console.log(chalk.white(`${chalk.blue(" ◉ ")} ${time}: ${data}`));
            return;
        case LoggerTypes.DEBUG:
            console.log(chalk.white(`${chalk.blue(" | ")}`));
            console.log(chalk.white(`${chalk.blue(" ⦿ ")} ${time}: ${data}`));
            return;
        default:
            console.log(chalk.black(`${chalk.bgGreen(" saffron ")}`), chalk.white(chalk.white(data)));
            return;
    }
}
