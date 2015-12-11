var chai = require('chai'),
	assert = chai.assert,
	Official = require('../models/Official');

describe('Official', function() {
  describe('#create()', function () {
    it('should create a new Official', function () {
      var official = {
      	'first_name': 'Darth',
      	'last_name': 'Vader',
      	'gender': 'Male',
      	'in_office': true,
      	'bio': 'Anakin Skywalker, Jedi master turned to the Dark side',
      	'position': ['Imperial Commander', 'Jedi Master', 'Sith Lord']
      }

      Official.create(official, function(err, createdOfficial){
      	should.not.exist(err);
      	assert.equal(createdOfficial.first_name, 'Darth');
      	assert.equal(createdOfficial.last_name, 'Vader');
      	assert.equal(createdOfficial.gender, 'Male');
      	assert.equal(createdOfficial.in_office, false);
      });


    });
  });
});