const userData = require("../seed_data/users");
const rentalData = require("../seed_data/rentals");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then( ()=> {
      // Inserts seed entries
      return knex('users').insert(userData);
    })
    .then(()=>{
      return knex('rentals').del();
    })
    .then(() =>{
      return knex("rentals").insert(rentalData);
    })
};
