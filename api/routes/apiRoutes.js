'use strict'
module.exports = function (app) {
    var boardController = require('../controllers/boardController');
    var cardController = require('../controllers/cardController');
    
    app.route('/board/all')
        .get(boardController.get_all);

    // app.route('/board/test')
    //     .get(boardController.add_testdata);

    app.route('/card/create')
        .post(cardController.create);
};