const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const methodOverride = require('method-override')
const session = require('express-session')
const morgan = require('morgan')
const connectDB = require("./config/connectDB.js");

const PORT = 3003;

const indexRoutes = require('./routes/index.routes');
const commentsRoutes = require('./routes/comments.routes');
const postsRoutes = require('./routes/posts.routes');
const usersRoutes = require('./routes/users.routes');

const checkLocals = require('./middlewares/checklocals')

//config recursos estáticos
app.use(express.static(path.join(__dirname,'..', 'public')));

//config motor de plantillas
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

//config recibir datos formularios
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

//registro de peticiones por consola
app.use(morgan('short'));

//conexión con mongodb
connectDB();


app.use(methodOverride('_method'))

app.use(session({
    secret: 'my_secret',
    resave: false,
    saveUninitialized: true,
  }));

app.use(checkLocals)

app.use('/', indexRoutes);
app.use('/comments',commentsRoutes);
app.use('/posts', postsRoutes)
app.use('/users',usersRoutes);

app.listen(PORT, () =>  console.log('Servidor corriendo en http://localhost:' + PORT));