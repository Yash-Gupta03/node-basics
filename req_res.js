const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req.headers, req.method, req.url);
  //   process.exit();
  res.setHeader("Content-Type", "text/html");
  if (req.url == "/home") {
    res.write(
      "<html><head head >      <title>response</title>      </head >    <body>Welcome home<body>    </html > "
    );
  } else if (req.url == "/about") {
    res.write(
      "<html><head head >      <title>response</title>      </head >    <body>Welcome to about us page<body>    </html > "
    );
  } else if (req.url == "/node") {
    res.write(
      "<html><head head >      <title>response</title>      </head >    <body>Welcome to my node js project<body>    </html > "
    );
  }
  res.end();
});

server.listen(3000);
