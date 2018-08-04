'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Card = require('./cardModel');

var ColumnSchema = new Schema({
    displayName: {
        type: String,
        required: 'The displayName is required'
    },
    cards: [Card.schema]
});

module.exports = mongoose.model('Columns', ColumnSchema);