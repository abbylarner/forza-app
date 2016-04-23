
exports.up = function(knex, Promise) {
	return knex.schema.createTable('prs', function(t){
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.string('liftName').notNull();
		t.integer('liftWeight').notNull();
		t.string('liftMetric').notNull();

		t.integer('userId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('users')
			.onDelete('CASCADE');
	});
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('prs');
};
