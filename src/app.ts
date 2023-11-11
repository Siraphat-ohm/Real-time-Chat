import { Server } from "socket.io";
import createServer from "./server";
import http from "http";

const PORT = 30788;
const app = createServer();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })
});

server.listen(PORT, () => {
    console.log(`listening on *: ${PORT}`)
});