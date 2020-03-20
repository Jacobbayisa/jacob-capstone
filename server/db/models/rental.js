const bookshelf = require("../bookshelf");

const Rental = bookshelf.model("Rental",{
    tableName:"rentals"
    // ,
    // users: () =>{
    //     return this.hasMany("Rental");
    // }
});

module.exports = Rental;