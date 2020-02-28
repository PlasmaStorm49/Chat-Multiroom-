module.exports.getChat = function (ctapp, req, res) {

    var formdata = req.body;
    req.assert('nickname', 'É obrgatório inserir um nome de usuário').notEmpty();
    req.assert('nickname', 'O nome de usuário deve ter entre 4 e 20 caracteres').len(4, 20);

    var erros = req.validationErrors();

    if (erros) {
        res.render("index", { validation: erros })
        return;
    }

    ctapp.get('scktcn').emit(
        'clientlogin',
        { nickname: formdata.nickname, mensagem: ' acabou de entrar no chat' }
    )
    res.render('chat', { formdata: formdata })
}