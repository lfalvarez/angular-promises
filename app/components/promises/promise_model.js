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
