exports.up = knex =>{
    return knex.schema.createTable("rentals", table=>{
        table.increments("id").primary();
        table.string("type").notNullable();
        table.integer("beds").notNullable();
        table.integer("bathrooms").notNullable();
        table.string("furnished").notNullable();
        table.string("adress").notNullable();
        table.integer("price").notNullable();
        table.string("image");
        table.string("description");
        table
            .integer("user_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
    })
};

exports.down = knex => {
  return knex.schema.dropTable('rentals');
};
