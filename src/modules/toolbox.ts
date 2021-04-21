import chalk from 'chalk'

export default {
        report:(data: any)=>{ return [] },
        termlog:(type: string, data: any) => {
            switch(type) {
                case "install-error":
                    console.log(chalk.white(`${chalk.bgRed(" saffron ")} ${data}${data.slice(-1) === "." ? "" : "."} Please consult our docs, at https://github.com/poiw-org/saffron/wiki.`))
                return
                default:
                    console.log(chalk.black(`${chalk.bgGreen(" saffron ")} ${data}`))
                return
            }
        }
        // database,
        // orbit
    }
