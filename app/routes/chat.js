module.exports = function (rtapp) {
    rtapp.post('/chat', function (req, res) {
        rtapp.app.controllers.chat.getChat(rtapp, req, res);
    });
    rtapp.get('/chat', function (req, res) {
        rtapp.app.controllers.chat.getChat(rtapp, req, res);
    });

}

