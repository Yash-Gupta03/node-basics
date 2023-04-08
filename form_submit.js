const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(
      `<html><head><title>Form</title></head><body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body></html>`
    );
    return res.end();
  }

  if (req.url === "/message" && req.method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("location", "/");
        return res.end();
      });
    });
  }
});

server.listen(3000);
