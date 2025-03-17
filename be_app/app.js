const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

const app = express();

require("dotenv").config();

const port = process.env.PORT || 3000; // Port default 3000

// Middleware untuk menampilkan log request
app.use(morgan("dev"));

// Middleware lain
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());
app.use(helmet());

// routes
const basicRoute = require("./routes/basicRoute");
const companyRoute = require("./routes/companyRoute");
const contactRoute = require("./routes/contactRoute");

app.use("/", basicRoute);
app.use("/company", companyRoute);
app.use("/api/contact", contactRoute);

app.get("/test", (req, res) => {
  res.json({
    message: "test API",
    code: 200,
    data: {
      nama: "Rizky",
      umur: 20,
    },
  });
});

app.use((req, res) => {
  res.status(404).send("<h1>Halaman tidak ditemukan</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
