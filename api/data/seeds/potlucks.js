
exports.seed = function(knex) {
  return knex('potlucks').del()
    .then(function () {
      return knex('potlucks').insert([
        {potluck_id: 1, potluck_name: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
