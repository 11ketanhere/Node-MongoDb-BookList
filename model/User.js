const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required:true,
        
    },
    quantity: {
        type: String,
        required:true,
    },
    book_genre: {
        type: String,
        required:true,
    },
    created_at: {
        type: String,
        required:true,
    },
    updated_at: {
        type: String,
        required:true,
    },
});

module.exports = mongoose.model("User", userSchema);
