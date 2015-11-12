'use strict';


var constructor = function(){

}

var promise_pusher= function(category, promise){
	promise.category = category
    category.promises.push(promise)
    return category
}

var transformCategory = function(jsonResult){
	var category = new Category(jsonResult['category']);
    var promise = new Prom();
    angular.extend(promise, jsonResult);
    return promise_pusher(category, promise);
}

var getCategoryAndPromise = function(json_data){
	var categories = []
	angular.forEach(json_data, function(object) {
		var category = transformCategory(object, constructor)
		var position_in_array = categories.map(function(c) { return c.name; }).indexOf(category.name)
		var exists =  position_in_array > -1;
		if (!exists){
	    	categories.push(category);
		}
		else {
			var promise = category.promises[0];
			categories[position_in_array] = promise_pusher(categories[position_in_array], promise)
		}
	}, this);
	return categories;
}

var ddahTransformer = function(json_data){
	if (!angular.isArray(json_data)) {
		var temp = []
		temp.push(json_data)

		json_data = temp
	}
	return getCategoryAndPromise(json_data)
}

angular.module('ddah.promises', [
	'ddah.promises.Promise',
	'ddah.promises.Category'
	]).factory("ddahTransformer", ddahTransformer);