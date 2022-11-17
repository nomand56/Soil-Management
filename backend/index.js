let express = require("express");
let app = express();
const bodyParser = require("body-parser");
app.use(express.json());
require("dotenv").config();
require("./config/connection/index");
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

const client = require("./routes/users/index");
const admin = require("./routes/admin/index");
const company = require("./routes/companies/index");
const order = require("./routes/orders/index");
const cart = require("./routes/cart/index");
const products = require("./routes/products/index");
const warehouse = require("./routes/warehouse/index");
const postalCode = require("./routes/postalcode/index");
app.use("/api/v1", client);
app.use("/api/v1", admin);
app.use("/api/v1", company);
app.use("/api/v1", order);
app.use("/api/v1", cart);
app.use("/api/v1", products);
app.use("/api/v1", warehouse);
app.use("/api/v1", postalCode);

app.listen(
  process.env.PORT,
  console.log(`server started on PORT : ${process.env.PORT}`)
);
