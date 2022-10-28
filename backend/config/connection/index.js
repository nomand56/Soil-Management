const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION_URL).then((res) => {
    console.log('database connected...')
}).catch((err) => {
    console.log(err)
})