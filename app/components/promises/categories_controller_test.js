describe('DDAHCategoriesController', function() {
  beforeEach(module('ddah'));

  var $controller;
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

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));
  describe('$scope.categories', function() {
    it('gets the categories and promises as models', function() {
      var $scope = {
        "data": the_json
      };
      var controller = $controller('DDAHCategoriesController', { $scope: $scope });
      var categories = $scope.categories;
      expect(categories.length).toEqual(2)
      expect(categories[0].name).toEqual('Category One')
      expect(categories[0].slug).toEqual('category-one')
      var the_category = categories[0]
      expect(the_category.promises.length).toEqual(2)
      var the_promise = the_category.promises[0]
      expect(the_promise.name).toEqual('promise name one')
      expect(the_promise.category).toEqual(the_category)
      expect(the_category.promises[1].category).toEqual(the_category) 
    });
    it('gets empty categories if no data is provided', function(){
      var $scope = {};
      var controller = $controller('DDAHCategoriesController', { $scope: $scope });
      var categories = $scope.categories;
      expect(categories.length).toEqual(0)
    })
  });

});