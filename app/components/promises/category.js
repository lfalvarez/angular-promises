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
