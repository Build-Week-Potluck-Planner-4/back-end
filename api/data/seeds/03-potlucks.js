
exports.seed = function(knex) {
  return knex('potlucks').del()
    .then(function () {
      return knex('potlucks').insert([
        {
            potluck_id: 1,
            potluck_name: 'rowValue1',
            date: '9-30-2021',
            time: '12:00:00',
            user_id: 1,
            location: 'U.S.A'
        }
      ]);
    });
};
