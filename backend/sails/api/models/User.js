/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
		name: {
			type: 'string'
		},

		surname: {
			type: 'string'
		},

		getUserId: function() {
			return this.id;
		},

		toJSON: function() {
			const user = this.toObject();
			user._id = this.getUserId();
			return user;
		}
	},

	tableName: 'users'
};

