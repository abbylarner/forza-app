require('./User');

module.exports = bookshelf.model('Pr', {
	tableName: 'prs',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	user: function(){
		return this.belongsTo('User', 'userId');
	}
});