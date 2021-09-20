
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          user_id: 1, 
          username: 'seed_username', 
          password: 'replace with token later'
        },
      ]);
    });
};
