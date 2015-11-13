/*! angular-promises`- v0.0.0 - 2015-11-13
* Copyright (c) 2015 Ciudadano Inteligente; Licensed  */
'use strict';


function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}


var Category = function(name){
	this.name = name
	this.slug = slugify(name)
	this.promises = []
}
Category.prototype.add_promise = function(promise){
	promise.category = this;
	this.promises.push(promise);
}
Category.prototype.summary = function(){
    return new Summary(this.promises)
}

angular.module('ddah.promises', ['ddah.promises.Promise'])

.value("Category", Category);

'use strict';

var Prom = function(){
    this.name = ''
    this.description = ''
    this.fulfillment = 0
    this.ponderator = 1
    this.quality = 1
    this.category = null
}
Prom.prototype.ponderated_fulfillment = function(){
    return this.fulfillment * this.ponderator
}
Prom.prototype.ponderated_quality = function(){
    return this.quality * this.ponderator
}

angular.module('ddah.promises', [
])

.value("Promise", Prom);

var Summary = function(promises){
    this.accomplished = 0
    this.in_progress = 0
    this.no_progress = 0
    this.total_progress = 0
    for(var i=0; i < promises.length; i++){
        var promise = promises[i];
        if(promise.fulfillment == 0){
            this.no_progress++;
        }
        if(promise.fulfillment > 0 && promise.fulfillment < 100){
            this.in_progress++;
        }
        if(promise.fulfillment == 100){
            this.accomplished++;
        }
    }
}

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
'use strict';


angular.module('ddah.promises', [])
var ddahAPP = angular.module('ddah',['ddah.promises']);

ddahAPP.controller('DDAHCategoriesController', ['$scope', function($scope) {
  if(typeof $scope.data === 'undefined'){
  	$scope.categories = []
  }
  else {
  	$scope.categories = ddahTransformer($scope.data)
  }
}]);