module.exports = function (rtapp) {

    rtapp.get('/', function (req, res) {
        rtapp.app.controllers.index.home(rtapp, req, res);
    });
}