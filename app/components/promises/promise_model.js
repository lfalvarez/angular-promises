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