"use strict";
var mongoose = require("mongoose"),
    Board = mongoose.model("Boards");

exports.create = function(req, res) {
    let request = req.body;
    let boardId = request.boardId;
    let columnId = request.columnId;
    let card = request.card;

    Board.findById(boardId, function(err, board) {
        if (err) res.send(err);
        else {
            let column = board.columns.id(columnId);
            if (column) {
                column.cards.push(card);
                let newSubDoc = column.cards[column.cards.length - 1];
                newSubDoc.isNew = true;

                board.save(function(err) {
                    if (err) res.send(err);
                    res.json(board);
                });
            } else {
                res.send(new Error("The column is null!"));
            }
        }
    });
};

//TODO: REFACTOR based on: https://docs.mongodb.com/manual/tutorial/query-array-of-documents/

exports.update = function(req, res) {
    let data = req.body;
    let boardId = request.boardId;
    let columnId = request.columnId;
    let card = request.card;

    Board.findById(boardId, (err, board) => {
        if (err) res.send(err);
        else {
            let column = board.columns.id(columnId);

            if (column) {
                let existingCard = column.cards.id(card._id);

                if (existingCard) {
                    existingCard.displayName = card.displayName;
                    existingCard.description = card.description;

                    board.save(function(err) {
                        if (err) res.send(err);
                        res.json(board);
                    });
                } else {
                    res.send(new Error("The card cannot be find!"));
                }
            } else {
                res.send(new Error("The column is null!"));
            }
        }
    });
};

exports.get = function(req, res) {
    let boardId = req.params.boardId;
    let columnId = req.params.columnId;
    let cardId = req.params.cardId;

    Board.find({ columns: { _id: columnId } });

    // Board.findById(boardId, function(err, board) {
    //     if (err) return res.send(err);
    //     else {
    //         let column = board.columns.id(columnId);
    //         if (column) {
    //             let card = column.cards.id(cardId);
    //             if (card) res.json(card);
    //             else res.send(new Error("The card is null or undefined"));
    //         } else {
    //             res.send(new Error("The column is null"));
    //         }
    //     }
    // });
};
