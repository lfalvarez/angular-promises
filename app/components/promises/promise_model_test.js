'use strict';


describe('ddah.promises module', function(){
    beforeEach(module('ddah.promises'));
    it('can be instanciated', function(){
        var promise = new Prom();
        promise.name = 'this is a promise'
        promise.description = "this is a description"
        promise.fulfillment = 10
        promise.ponderator = 0.1
        promise.quality = 70

        expect(promise.name).toEqual('this is a promise')
        expect(promise.description).toEqual("this is a description")
        expect(promise.fulfillment).toEqual(10)
        expect(promise.ponderator).toEqual(0.1)

        
        expect(promise.ponderated_fulfillment()).toEqual(1)
        expect(promise.ponderated_quality()).toEqual(7)
    })
})