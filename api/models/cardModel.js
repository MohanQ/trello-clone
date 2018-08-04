'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CardSchema= new Schema({
    displayName : {
        type: String,
        required: 'The name of the Card'
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('Cards', CardSchema);