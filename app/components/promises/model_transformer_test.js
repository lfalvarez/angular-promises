'use strict';

describe('parsing json', function(){
	beforeEach(module('ddah.promises'));
	it('can parse json and turn it into promises and categories', function(){
		var the_json = [{
			"id": "1",
			"name": "promise name one",
			"description": "promise description one",
			"fulfillment": 50,
			"quality": 5,
			"ponderator": 0.1,
			"category": "Category One"
		},{
			"id": "1",
			"name": "promise name two",
			"description": "promise description two",
			"fulfillment": 70,
			"quality": 5,
			"ponderator": 0.1,
			"category": "Category One"
		},{
			"id": "1",
			"name": "promise name three",
			"description": "promise description three",
			"fulfillment": 35,
			"quality": 5,
			"ponderator": 0.1,
			"category": "Category Two"
		}]
		var categories = ddahTransformer(the_json)
		expect(categories.length).toEqual(2)
		expect(categories[0].name).toEqual('Category One')
		expect(categories[0].slug).toEqual('category-one')
		var the_category = categories[0]
		expect(the_category.promises.length).toEqual(2)
		var the_promise = the_category.promises[0]
		expect(the_promise.name).toEqual('promise name one')
		expect(the_promise.category).toEqual(the_category)
		expect(the_category.promises[1].category).toEqual(the_category)

	})
	it('can parse json containing a single element', function(){
		var the_json = {
			"id": "1",
			"name": "promise name one",
			"description": "promise description one",
			"fulfillment": 50,
			"quality": 5,
			"ponderator": 0.1,
			"category": "Category One"
		}
		var categories = ddahTransformer(the_json)
		expect(categories.length).toEqual(1)
		expect(categories[0].name).toEqual('Category One')
		expect(categories[0].slug).toEqual('category-one')
		var the_category = categories[0]
		expect(the_category.promises.length).toEqual(1)
		var the_promise = the_category.promises[0]
		expect(the_promise.name).toEqual('promise name one')
	})	
})