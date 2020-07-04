const mongoose = require('mongoose')


mongoose.connect(prosess.env,MONGODB_URL , {
    useNewUrlParser: true,
    useCreateIndex: true,
    userfindAndModify: true 
})


