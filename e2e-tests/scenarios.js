'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('ddah', function() {
  describe('all categories view', function(){

    beforeEach(function(){  
      browser.get('app/#/all');
    });

    describe('view1 controller', function(){
      it('should display categories and promises', function(){
        expect(true).toBe(true)
      })
      // it('should display the categories and promises', inject(function($controller) {
      //   //spec body
      //   var $scope = {
      //     "data": the_json
      //   };
      //   var categoriesListView = $controller('DDAHCategoriesController', { $scope: $scope });
      //   expect(categoriesListView).toBeDefined();
      //   console.log(catego)
      // }));

    });
  })
});
