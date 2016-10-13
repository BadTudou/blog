var assert = require('assert');

var feature = require('../servers/feature.js');
var newFeature = {
	title:'专题', 
	author:'作者', 
	introduction:'介绍',
};


describe('test feature', function() {
	var insertId = 0;

	describe('#add', function() {
		it('should return true when add feature is ok', function(done) {
			feature.add(newFeature,(err, result)=>
				{
					if (!err)
						done();
					else
						done(err);

					insertId = result.insertId;
				});
		});
	});

	describe('#edit', function() {
		it('should return true when edit feature is ok', function(done) {
			var featureEdit = {id:insertId, title:'新专题名'};	// 此处要更新内容的ID是#add 添加的记录，手动指定请启用下面的语句
			//var featureDel = {id:60, title:'新专题名'};	// 手动指定要更新的ID
			feature.edit(featureEdit, (err, result)=> {
					if (!err)
						done();
					else
						done(err);
				});
		});

		it('should return true when edit feature is error', function(done) {
			var featureEdit = {id:insertId+1, title:'新专题名'};	// 此处要更新内容的ID是#add 添加的记录+1，手动指定请启用下面的语句
			//var featureDel = {id:-1234567, title:'新专题名'};	// 手动指定要更新的ID
			feature.edit(featureEdit, (err, result)=> {
					if (!err)
						done(err);
					else
						done();
				});
		});
	});

	describe('#del', function() {
		it('should return true when add feature is ok', function(done) {
			var featureDel = {id:insertId};	// 此处要删除的ID是#add 添加的记录，手动指定请启用下面的语句
			//var featureDel = {id:60};	// 手动指定要删除的ID
			feature.del(featureDel,(err, result)=> {
					if (!err)
						done();
					else
						done(err);
				});
		});

		it('should return true when add feature is error', function(done) {
			var featureDel = {id:insertId+1};// 此处要删除的ID是#add 添加的记录+1，手动指定请启用下面的语句
			//var featureDel = {id:-1234567};	// 手动指定要删除的ID
			feature.del(featureDel,(err, result)=> {
					if (!err)
						done(err);
					else
						done();
				});
		});
	});

	describe('#search', function() {
		it('should return true when add feature is ok', function(done) {
			var condition = {author:'作者'};
			var fields = 'id, title';
			feature.search(fields, condition, (err, result)=> {
				if (!err)
				{
					done();
				}
				else
				{
					done(err);
				}
			});
		});

		it('should return true when add feature is error', function(done) {
			var condition = {};
			var fields = 'id, title';
			feature.search(fields, condition, (err, result)=> {
				if (!err)
				{
					done(err);
				}
				else
				{
					done();
				}
			});
		});
	});

	describe('#list', function() {
		it('should return true when list range is ok', function(done) {
			var fields = 'id, title';
			var range = {from:0, to:5};
			feature.list(fields, range, (err, result)=> {
				if (!err)
				{
					done();
				}
				else
				{
					done(err);
				}
			});
		});

		it('should return true when list feature is error', function(done) {
			var fields = 'id, title';
			var range = {from:0, to:-1};
			feature.list(fields ,range, (err, result)=> {
				if (!err)
				{
					done(err);
				}
				else
				{
					done();
				}
			});
		});

		it('should return true when list range is null', function(done) {
			var fields = 'id, title';
			feature.list(fields, null, (err, result)=> {
				if (!err)
				{
					done();
				}
				else
				{
					done(err);
				}
			});
		});
	});
});