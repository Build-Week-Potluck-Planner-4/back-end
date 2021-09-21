
exports.seed = function(knex) {
      return knex('users').insert([
        {
          user_id: 1, 
          username: 'ash',
          password: '1234'
        },
      ]);
};
