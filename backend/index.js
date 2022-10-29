let express = require('express')
let app = express();
app.use(express.json());
require('dotenv').config();
require('./config/connection/index')

const client = require('./routes/users/index')
const admin = require('./routes/admin/index')
const company = require('./routes/companies/index')
const order = require('./routes/orders/index')

app.use('/api/v1',client)
app.use('/api/v1', admin)
app.use('/api/v1',company)
app.use('/api/v1',order)


app.listen(process.env.PORT, console.log(`server started on PORT : ${process.env.PORT}`))