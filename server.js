require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const conditionsRoutes = require('./routes/conditions');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/conditions', conditionsRoutes);

app.listen(PORT, () => {
  console.log(`Servidor FHIR backend en puerto ${PORT}`);
});