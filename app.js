const express = require('express') // Importando librería express
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
require('ejs');
const dbConnect = require('./db'); // Importando archivo de conexión a la base de datos

const app = express(); // Inicializando express
dbConnect();

// Configuración de variables de entorno
const port = process.env.PORT || 3000;

// Para que el servidor comprenda datos con formato json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Otros middlewares
app.use(cors());
app.use(morgan('dev'));


// Motor de plantillas ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Importando rutas
app.use(require('./routes/tareas.routes')); // Importando rutas
app.use(require('./routes/home.routes')); // Importando rutas

// Configurando puerto
app.listen(port, () => console.log(`Servidor escuchando en http://127.0.0.1:${port}`));
