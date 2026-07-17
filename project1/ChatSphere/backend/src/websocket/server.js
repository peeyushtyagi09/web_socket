const { websocketServer } = require("ws");

function initializeWebSocket(server){
    const wss = new websocketServer({
        server
    });

    console.log("WebSocket server Initialized");
}

module.exports = {
    initializeWebSocket
};