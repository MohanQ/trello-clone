'use strict'
var mongoose = require('mongoose'),
    Board = mongoose.model('Boards');

exports.create = function (req, res) {

    let request = req.body;
    let boardId = request.boardId;
    let columnId = request.columnId;
    let card = request.card;

    Board.findById(boardId, function (err, board) {
        if (err)
            res.send(err);
        else {
            let column = board.columns.id(columnId);
            if (column) {
                column.cards.push(card);
                let newSubDoc = column.cards[column.cards.length - 1];
                newSubDoc.isNew = true;

                board.save(function (err) {
                    if (err) res.send(err);
                    res.json(card);
                });
            }
            else {
                res.send(new Error("The column is null!"));
            }
        }
    });
}

exports.get = function (req, res) {
    let boardId = req.params.boardId;
    let columnId = req.params.columnId;
    let cardId = req.params.cardId;

    Board.findById(boardId, function (err, board) {
        if (err)
            return res.send(err);
        else {
            let column = board.columns.id(columnId);
            if (column) {
                let card = column.cards.id(cardId);
                if (card)
                    res.json(card);
                else
                    res.send(new Error("The card is null or undefined"));
            }
            else {
                res.send(new Error("The column is null"));
            }
        }
    });
}