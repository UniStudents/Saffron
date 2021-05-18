import { createServer } from "http";
import { Server, Socket } from "socket.io";
import Config from "../../../components/config"
import Events from "../../../modules/events"

let antennae = Events.getAntennae()
let config = Config.load()

let port = process.env.PORT || config.grid.port || 5293

const httpServer = createServer()
const io = new Server(httpServer, {
    // ...
})

io.on("connection", (socket: Socket) => antennae.emit("new-grid-connection", socket));

httpServer.listen(port)