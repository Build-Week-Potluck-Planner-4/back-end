
exports.seed = function(knex) {
  return knex('potlucks').del()
    .then(function () {
      return knex('potlucks').insert([
        { 
          potluck_id: 1, 
          potluck_name: 'rowValue1',
          date: 'date',
          time: 'time',
          location: 'location',
          user_id: 1,
        },
      ]);
    });
};
