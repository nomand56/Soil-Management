let express = require('express')
let app = express();
app.use(express.json());
require('dotenv').config();
require('./config/connection/index')
const client = require('./routes/client/index')
const admin = require('./routes/admin/index')
const verifyToken=require('./middlewares/jwt/index')
app.use('/client',client)
app.use('/admin',verifyToken,admin)

app.listen(process.env.PORT, console.log(`server started on PORT : ${process.env.PORT}`))