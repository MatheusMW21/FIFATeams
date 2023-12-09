import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  res.end("Hello, World!\n");
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server listening in http://localhost:${PORT}/`);
});
