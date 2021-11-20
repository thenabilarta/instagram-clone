const express = require("express");
const app = express();
const cors = require("cors");
const httpServer = require("http").createServer(app);
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connection = require("./config/connection");
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/users", require("./routes/users"));
app.use("/api/feeds", require("./routes/feeds"));
app.use("/api/comments", require("./routes/comments"));
app.use("/api/likes", require("./routes/likes"));

app.use("/uploads", express.static(__dirname + "/uploads"));

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
);

io.on("connection", (socket) => {
  connection.query("SELECT * FROM chats", (err, res) => {
    socket.emit("private message", res);
  });

  socket.on("private message", (data) => {
    console.log(data);
    const from = data.from;
    const to = data.to;
    const date = data.date;
    const content = data.content;

    connection.query(
      `INSERT INTO chats
      (id, _from, _to, date, content) VALUES 
      ('', '${from}', '${to}', '${date}', '${content}')`
    );
    connection.query("SELECT * FROM chats", (err, res) => {
      io.emit("private message", res);
    });
  });
});
