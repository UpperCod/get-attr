/**
 *
 * @param {*} object
 * @param {string|array} prop
 * @param {*} option
 */
export default function(value = {}, attr, option) {
    attr = Array.isArray(attr) ? attr : attr.match(/([^\[\]\.]+)/g);
    for (let i = 0; i < attr.length; i++) {
        if (typeof value === "object" && attr[i] in value) {
            value = value[attr[i]];
        } else {
            return option;
        }
    }
    return value;
}
