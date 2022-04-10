const express = require('express')
const app = express()
const cors = require('cors')

const port = 3000 || process.env.PORT
app.use(cors())
app.listen(port,()=>{
    console.log("server is running on port",port)
})
app.use('/outlet',require('./routers/outlet'))
