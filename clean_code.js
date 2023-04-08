const fs = require("fs");

const requestHandler = (req, res) => {
  if (req.url === "/") {
    fs.readFile("message.txt", "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.write(`<html>`);
        res.write(`<head><title>Form</title></head>`);
        res.write(`<body>${data}</body>`);
        res.write(
          `<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>`
        );
        res.write(`</html>`);
        return res.end();
      }
    });
  } else if (req.url === "/message" && req.method == "POST") {
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
};

module.exports = requestHandler;

// module.exports = {
//   handler: requestHandler,
//   someText: "hello, it is some text",
// };

// module.exports.handler = requestHandler;

// exports.handler = requestHandler;
