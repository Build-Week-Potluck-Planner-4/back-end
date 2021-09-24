exports.up = async (knex) => {
  await knex.schema
    .createTable('users', users => {
      users.increments('user_id');
      users.string('username', 200).notNullable();
      users.string('password', 200).notNullable();
      users.timestamps(false, true);
    })
    .createTable("potlucks", potlucks => {
      potlucks.increments("potluck_id");
      potlucks.string("potluck_name").notNullable();
      potlucks.date("date").notNullable();
      potlucks.time("time").notNullable();
      potlucks.string("location").notNullable();
      potlucks.integer("user_id")
        .notNullable()
        .unsigned()
        .references("user_id")
        .inTable("users");
    })
    .createTable("foods", foods => {
      foods.increments("food_id");
      foods.string("food_name").notNullable();
    })
    .createTable("potluck_foods", pfoods => {
      pfoods.increments("potluck_food_id");
      pfoods.integer("potluck_id")
        .notNullable()
        .unsigned()
        .references("potluck_id")
        .inTable("potlucks");
      pfoods.integer("food_id")
        .notNullable()
        .unsigned()
        .references("food_id")
        .inTable("foods");
    })
    .createTable("guests", guests => {
      guests.increments("guest_id");
      guests.integer("potluck_id")
        .notNullable()
        .unsigned()
        .references("potluck_id")
        .inTable("potlucks");
      guests.integer("potluck_food_id")
        .unsigned()
        .references("potluck_food_id")
        .inTable("potluck_foods");
      guests.integer("user_id")
        .notNullable()
        .unsigned()
        .references("user_id")
        .inTable("users");
      guests.boolean("accepted")
        .defaultTo(false);
    });
};

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists('guests')
    .dropTableIfExists('potluck_foods')
    .dropTableIfExists('foods')
    .dropTableIfExists('potlucks')
    .dropTableIfExists('users');
};
