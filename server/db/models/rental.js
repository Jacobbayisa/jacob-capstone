const bookshelf = require("../bookshelf");

const Rental = bookshelf.model("Rental",{
    tableName:"rentals"
});

module.exports = Rental;