import http from 'http'
import app from './app.js'

const PORT = 4000
const server = http.createServer(app)


server.listen(PORT,()=>{
  console.log(`***
  ** server started at port ${PORT}
  ***
  `);
})
