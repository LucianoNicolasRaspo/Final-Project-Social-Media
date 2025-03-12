const mongoose = require('mongoose');

// Conexión a MongoDB (local)
mongoose.connect('mongodb://127.0.0.1:27017/SocialDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a la base de datos SocialDB 🚀'))
.catch(err => console.error('Error al conectar a la base de datos:', err));

// Definir el esquema de usuario
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Crear el modelo
const User = mongoose.model('User', userSchema);

module.exports = User;
