
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('guests').del()
    .then(function () {
      // Inserts seed entries
      return knex('guests').insert([
        {
          guest_id: 1, 
          potluck_id: 1,
          potluck_food_id: 1,
          user_id: 2,
          accepted: 0,
        },
      ]);
    });
};
