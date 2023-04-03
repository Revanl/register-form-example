
const express = require('express')
const cors = require('cors')
const app = express()
// enable CORS for our localhost frontend
let corsOptions = {
  origin : ['http://localhost:5173'],
}

app.use(cors(corsOptions))
  
app.use(express.json());
app.use('', require('./routes/userRoutes'));

app.listen(8080, () => {
  console.log(`Server started on port : ${8080}`);
});














