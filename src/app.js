const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const methodOverride = require('method-override')
const PORT = 3002;

const indexRoutes = require('./routes/index.routes');
const commentsRoutes = require('./routes/comments.routes');
const postsRoutes = require('./routes/posts.routes');
const usersRoutes = require('./routes/users.routes');

//config recursos estáticos
app.use(express.static(path.join(__dirname,'..', 'public')));

//config motor de plantillas
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

//config recibir datos formularios
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(methodOverride('_method'))

app.use('/', indexRoutes);
app.use('/comments',commentsRoutes);
app.use('/posts', postsRoutes)
app.use('/users',usersRoutes);

app.listen(PORT, () => 'Servidor corriendo en http://localhost:' + PORT)