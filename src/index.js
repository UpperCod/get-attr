/**
 * 
 * @param {*} object 
 * @param {string|array} prop 
 * @param {*} option 
 */
export default function getattr(object,prop,option){
    if( 
        (
            Array.isArray(prop) ? prop : prop.match(/([^\[\]\.]+)/g) 
        ).every((prop)=>{
            if( object.hasOwnProperty(prop) ){
                object = object[prop];
                return true;
            }
        })
    ){
        return object;
    }else return option;
}


