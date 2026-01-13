const http = require("http");

const PORT = 3000;
const HOST = "0.0.0.0";

const server = http.createServer((req, res) => {
    console.log(`request masuk : ${req.method} ${req.url}`);

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello assalamualaikum\n");
});

server.listen(PORT, HOST, () => {
    // console.log(`Server berjalan di http://${HOST}:${PORT}`);
});