var getattr = (function () {
'use strict';

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

}());
