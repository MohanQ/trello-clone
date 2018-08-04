'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Column = require('./columnModel');

var BoardSchema = new Schema({
    displayName: {
        type: String,
        required: 'The displayName is required'
    },
    columns: [Column.schema]
});

module.exports = mongoose.model('Boards', BoardSchema);
