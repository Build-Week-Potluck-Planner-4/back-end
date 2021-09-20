
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          user_id: 1, 
          username: 'seed_username', 
          password: 'seed_password' // repalce with token later
        },
        {
          user_id: 2, 
          username: 'guest_username', 
          password: 'seed_password' // repalce with token later
        },
      ]);
    });
};
