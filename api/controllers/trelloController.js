'use strict'
var mongoose = require('mongoose'),
    Card = mongoose.model('Cards'),
    Board = mongoose.model('Boards');

exports.get_a_card = function (req, res) {
    Card.findById(req.params.cardId, function (err, card) {
        if (err)
            res.send(err);
        res.json(card);
    });
};

exports.get_all_boards = function (req, res) {
    Board.find({}, function (err, all) {
        if (err)
            res.send(err)
        res.json(all);
    });
};

exports.add_testdata = function (req, res) {
    Board.insertMany(testData, function (err, docs) {
        if (err)
            res.send(err);
        res.json(docs);
    });
}

// exports.add_new_card = function (req, res) {
//     let conditions = { _id: req.cardId };
//     Board.update(conditions,)
// }

var testData = [
    {
        "displayName": "TestBoard1",
        "columns": [
            {
                "displayName": "List1",
                "cards": [
                    {
                        "displayName": "Card1",
                        "description": "Lorem ipsum"
                    },
                    {
                        "displayName": "Card2",
                        "description": "Lorem ipsum"
                    }
                ]
            },
            {
                "displayName": "List2",
                "cards": [
                    {
                        "displayName": "Card3",
                        "description": "Lorem ipsum"
                    },
                    {
                        "displayName": "Card4",
                        "description": "Lorem ipsum"
                    },
                    {
                        "displayName": "Card5",
                        "description": "Lorem ipsum"
                    }
                ]
            },
            {
                "displayName": "List3",
                "cards": [
                    {
                        "displayName": "Card6",
                        "description": "Lorem ipsum"
                    }
                ]
            }
        ]
    }
];
