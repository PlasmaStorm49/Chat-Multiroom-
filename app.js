var app = require('./config/server')

var server = app.listen(80, function () {
    console.log('Servidor Online')
})

var scktcn = require('socket.io').listen(server);


app.set('scktcn', scktcn);


scktcn.on('connection', function (sckt) {
    console.log('Usuário está conectado');

    sckt.on('disconnecting', function () {
        console.log('Desconectado');
        sckt.emit('disc', { msgl: 'Um usuário se desconectou' });

        sckt.broadcast.emit('disc', { msgl: 'Um usuário se desconectou' });

    })

    sckt.on('msgtoserver', function (info) {
        sckt.emit('clientmsg', { nickname: info.nickname, msg: info.msg });

        sckt.broadcast.emit('clientmsg', { nickname: info.nickname, msg: info.msg });

        if (parseInt(info.updated_nickname) == 0) {
            sckt.emit('clientusers', { nickname: info.nickname });

            sckt.broadcast.emit('clientusers', { nickname: info.nickname });
        };
    })
})
