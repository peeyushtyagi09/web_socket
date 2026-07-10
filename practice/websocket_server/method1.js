const net = require("net");

const server = net.createServer((socket) => {
    console.log("client si connected");

    socket.write("Hello Client");

    socket.on("data", (data) => {
        console.log(data.toString());
    });
});

server.listen(8000, () => {
    console.log("Listining on the port 8000")
});