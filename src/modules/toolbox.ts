import chalk from 'chalk'

export default {
        report:(data: any)=>{ return [] },
        termlog:(type: string, data: any) => {
            switch(type) {
                case "install-error":
                    console.log(chalk.white(`${chalk.red(" | ")}`))
                    console.log(chalk.white(`${chalk.red(" x ")} ${data}${data.slice(-1) === "." ? "" : "."} Please consult our docs, at https://github.com/poiw-org/saffron/wiki.`))
                return
                case "step":
                    console.log(chalk.white(`${chalk.green(" | ")}`))
                    console.log(chalk.white(`${chalk.green(" ✓ ")} ${data}`))
                return
                case "error":
                    console.log(chalk.white(`${chalk.red(" | ")}`))
                    console.log(chalk.white.bold(`${chalk.red(" x ")} ${data}`))                
                    return
                default:
                    console.log(chalk.black(`${chalk.bgGreen(" saffron ")}`), chalk.white(chalk.white(data)))
                return
            }
        }
        // database,
        // orbit
    }
