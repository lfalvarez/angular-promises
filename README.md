# angular-promises
Angular components for promises
--------------------------------
How do I use it?

Ok so this is composed of models, one controller and a json into model transformer.
The simplest way to use it is by including the angular-promises into your html as follows:


```
<script src="bower_components/angular/angular.js"></script>
<script src="my-app.js"></script>
<script src="/dist/angular-promises.js"></script>
```


In the definition of your app you need to specify that you require




```
angular.module('myApp', [
  'ngRoute',
  'ddah.promises' // <-- tell your app that we are using this as a requirement
]).
```


Then in your HTML yo can do something like:


```
 <div ng-init='data = [{
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
        }]'>
    <div ng-controller="DDAHCategoriesController">
      <ul>

        <li ng-repeat="category in categories">
          {{category.name}} - {{category.slug}}
          <ul>
            <li ng-repeat="promise in category.promises">{{promise.name}}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
```

The models:
---------
Currently this has two models that can have the following attributes:

```
var Category = function(name){
	this.name = name
	this.slug = slugify(name)
	this.promises = []
}
var Prom = function(){
    this.name = ''
    this.description = ''
    this.fulfillment = 0
    this.ponderator = 1
    this.quality = 1
    this.category = null
}
```

