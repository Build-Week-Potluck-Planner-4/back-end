
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {
          food_id: 1, 
          name: 'spaghetti'
        },
      ]);
    });
};
