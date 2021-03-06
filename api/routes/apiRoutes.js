"use strict";
module.exports = function(app) {
    var boardController = require("../controllers/boardController");
    var cardController = require("../controllers/cardController");

    app.route("/board/all").get(boardController.get_all);

    app.route("/card/create").post(cardController.create);

    app.route("/card/get/:boardId/:columnId/:cardId").get(cardController.get);

    app.route("card/update").put(cardController.update);
};
