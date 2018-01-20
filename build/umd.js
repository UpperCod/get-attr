(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.getattr = factory());
}(this, (function () { 'use strict';

/**
 * 
 * @param {*} object 
 * @param {string|array} prop 
 * @param {*} option 
 */
function getattr(object,prop,option){
    if( 
        (
            Array.isArray(prop) ? prop : prop.match(/([^\[\]\.]+)/g) 
        ).every(function (prop){
            if( object.hasOwnProperty(prop) ){
                object = object[prop];
                return true;
            }
        })
    ){
        return object;
    }else { return option; }
}

return getattr;

})));
