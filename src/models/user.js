//When we talk about "paseador de perros" we refer to "dogwalker" and in this case we say "user" to the dog walker
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    dni:{
        type: Number,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    puntaje:{
        type: Number,
        required: true,
        min:1,
        max:5,
    },
    status:{
        type: Boolean,
        required: true,
    }
});
//Si ya paso el servicio quedaria en false o sea que esta desactivado o que ya esta disponible.

module.exports = mongoose.model('dogWalker',userSchema);