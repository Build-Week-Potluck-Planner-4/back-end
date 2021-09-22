
exports.seed = function(knex) {
  return knex('guests').del()
    .then(function () {
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
