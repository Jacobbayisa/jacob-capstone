const bookshelf = require("../bookshelf");

const User = bookshelf.model("User",{
    tableName:"users",
    // rentals: () =>{
    //     return this.hasMany("Rental");
    // }
});

module.exports = User;