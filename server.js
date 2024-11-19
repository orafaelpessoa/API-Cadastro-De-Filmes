const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectDB } = require('./config/db');
const filmRoutes = require('./routes/filmRoutes');

const app = express();


connectDB();


app.use(cors());
app.use(bodyParser.json());

app.use('/api/filmes', filmRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
