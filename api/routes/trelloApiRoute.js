'use strict'
module.exports = function (app) {
    var trelloController = require('../controllers/trelloController');

    app.route('/card/:cardId')
        .get(trelloController.get_a_card);

    app.route('/board/all')
        .get(trelloController.get_all_boards);

    app.route('/board/test')
        .get(trelloController.add_testdata);

    app.route('/card/create')
        .post(trelloController.add_new_card);
};