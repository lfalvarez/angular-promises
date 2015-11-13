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
describe('Array of promises', function(){
    beforeEach(module('ddah.promises'));
    it('I can return a summary object',function(){
        var promise1 = new Prom();
        promise1.name = 'this is a promise'
        promise1.description = "this is a description"
        promise1.fulfillment = 0
        promise1.ponderator = 0.1
        promise1.quality = 70

        var promise2 = new Prom();
        promise2.name = 'this is a promise'
        promise2.description = "this is a description"
        promise2.fulfillment = 50
        promise2.ponderator = 0.1
        promise2.quality = 70

        var promise3 = new Prom();
        promise3.name = 'this is a promise'
        promise3.description = "this is a description"
        promise3.fulfillment = 100
        promise3.ponderator = 0.1
        promise3.quality = 70

        var promise4 = new Prom();
        promise4.name = 'this is a promise'
        promise4.description = "this is a description"
        promise4.fulfillment = 1
        promise4.ponderator = 0.1
        promise4.quality = 70

        var promise5 = new Prom();
        promise5.name = 'this is a promise'
        promise5.description = "this is a description"
        promise5.fulfillment = 99
        promise5.ponderator = 0.1
        promise5.quality = 70

        var promise6 = new Prom();
        promise6.name = 'this is a promise'
        promise6.description = "this is a description"
        promise6.fulfillment = 100
        promise6.ponderator = 0.1
        promise6.quality = 70

        var promises = [promise1, promise2, promise3, promise4, promise5, promise6]

        var summary = new Summary(promises)
        expect(summary.accomplished).toBeDefined()
        expect(summary.in_progress).toBeDefined()
        expect(summary.no_progress).toBeDefined()
        expect(summary.total_progress).toBeDefined()
        
        expect(summary.accomplished).toEqual(2)
        expect(summary.in_progress).toEqual(3)
        expect(summary.no_progress).toEqual(1)
    });
})
