const webSocket = require("ws");

const webSocketServer = new webSocket.Server({
    port: 3000
});

webSocketServer.on("connection", ws => {
    console.log("New Clint Connected");

    ws.on("message", data =>{
        console.log(`Recived msg: ${data}`);

        // document.getElementById("sendMsg").innerHTML = `Clint : ${data}`;

        ws.send("im fine");
    })

    ws.on("close", () => {
        console.log("Clint Disconnected");
    })
})