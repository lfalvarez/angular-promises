'use strict';


describe('ddah.promises module category', function(){
    beforeEach(module('ddah.promises'));
    it('can be instanciated', function(){
        var category = new Category('this is a promise');


        expect(category.name).toEqual('this is a promise')
        expect(category.slug).toEqual('this-is-a-promise')
        expect(category.promises instanceof Array).toBe(true)


    })
    it('can add a promise to a category', function(){
        var category = new Category('this is a promise');
        var promise = new Prom();
        promise.name = 'this is a promise'
        promise.description = "this is a description"
        promise.fulfillment = 10
        promise.ponderator = 0.1
        promise.quality = 70

        category.add_promise(promise)
        expect(category.promises.length).toEqual(1)
        var p = category.promises[0]
        expect(p.category).toEqual(category)
    })
})