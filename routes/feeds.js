const express = require("express");
const router = express.Router();
const connection = require("../config/connection");
const moment = require("moment");
const multer = require("multer");

const { auth } = require("../middleware/auth");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "_" + file.originalname);
  },
});

const upload = multer({ storage });

router.get("/", auth, (req, res) => {
  const sqlQuery = `SELECT feeds.id, email, user_id, username, image_url, profilePictureSRC, caption, created_at FROM feeds LEFT JOIN users ON feeds.user_id=users.id GROUP BY feeds.id ORDER BY feeds.id DESC`;

  connection.query(sqlQuery, (err, data) => {
    const sqlQuery2 = `SELECT * FROM comments`;
    connection.query(sqlQuery2, (err, data2) => {
      const result = [];

      data.map((d) => {
        const comments = [];
        data2.map((d2) => {
          if (d.id === d2.post_id) {
            comments.push(d2);
          }
        });
        result.push({ ...d, comments });
      });

      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });
});

router.post("/", auth, upload.single("files"), (req, res) => {
  const id = req.decode.id;
  const date = moment().unix();

  const caption = req.body.caption;

  const imageURL = "http://localhost:5000/uploads/" + req.file.filename;

  const sqlQuery = `INSERT INTO feeds (id, user_id, image_url, stored_as, caption, liked, comment_id, location, tags_id, created_at) VALUES ('', '${id}', '${imageURL}', '', '${caption}', '', '', '', '', '${date}')`;

  connection.query(sqlQuery, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

router.get("/images", (req, res) => {
  const sqlQuery = `SELECT * FROM feeds`;

  connection.query(sqlQuery, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
