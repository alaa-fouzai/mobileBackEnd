const express = require('express');
require('dotenv/config');
const app = express();
var jwt = require('jsonwebtoken');
const mongoose=require('mongoose');
const socket = require('socket.io');
//const path = require('path');
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true , useUnifiedTopology: true } ,() => console.log('connected to BD'));
const bodyParser= require('body-parser');

// app.use(express.static(path.join(__dirname, '../frontend/dist/AdminLTE')));


app.use(bodyParser.json());
const server = app.listen(3000,'0.0.0.0');
const io = require('socket.io')(server);
io.on('connection', () => { /* … */ });
server.listen(3000);

/*app.get('*', (req, res) => {
    return res.sendFile(path.join(__dirname, '../frontend/dist/AdminLTE/index.html'))
});*/

app.post('/',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
});
/*
try {
    const fews = io
        .of('/fews')
        .on('connection', (socket) => {
            console.log('news connected');
            socket.emit('Receivenews', 'jhello');
            console.log("emitting");
            io.of('/fews').to(socket.socketId).emit('Receivenews', 'hello back');
            socket.on('join', data => {
                console.log("data :",data.toString());
                io.of('/fews').to(socket.socketId).emit('Receivenews', 'hello back');
                socket.emit('Receivenews', 'jhello');
                console.log(" emitting hello");
            });
        });

} catch (e) {
    console.log(e.toString());
}
*/



