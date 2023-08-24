const express = require("express");
const multer = require("multer");

const app = express();

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    var imageUrl = file.fieldname + "-" + Date.now() + ".jpg";
    cb(null, imageUrl);
  },
});
const upload = multer({ storage: fileStorageEngine });

app.post("/single", upload.single("image"), (req, res) => {
  console.log(req.file.filename);
  res.send("Single file upload successful");
});

app.listen(5000);
