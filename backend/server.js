const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Configurar los encabezados CORS
  res.setHeader("Access-Control-Allow-Origin", "*"); // Permitir todos los orígenes
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.url === "/api/platos" && req.method === "GET") {
    fs.readFile("platos.json", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error leyendo el archivo");
        return;
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end("Recurso no encontrado");
  }
});

server.listen(5000, () => {
  console.log("Servidor corriendo en http://localhost:5000");
});
