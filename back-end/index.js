'use strict';

// Hapi for RESTfull apis
const Hapi = require('@hapi/hapi');

// mongoose for quering database
const mongoose = require('mongoose');


// connecting to the mongodb
mongoose.connect('mongodb+srv://kalpriksh_bist:kaybee7697@quiz-60ug4.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

// importing and modelling user schema
const User = mongoose.model('User', require('./schemas/user.js'));


const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path:'/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
